"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { ChartSplineIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { parse, format } from 'date-fns';

const chartConfig = {
	pageviews: {
		label: "Page Views",
		color: "hsl(var(--chart-1))",
	},
};

export default function AnalyticsPopover({ title, slug }: { title: string, slug: string }) {
	const [open, setOpen] = useState<boolean>(false);
	const [chartData, setChartData] = useState<any[]>([]);

	useEffect(() => {
		const fetchChartData = async () => {
			const response = await fetch(`/api/analytics?slug=${slug}`);
			const data = await response.json();

			setChartData(data);
		};

		fetchChartData();
	}, [slug]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" size="icon">
					<ChartSplineIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="space-y-3 w-[400px] rounded-xl">
                <div className="space-y-1 mb-6">
                    <h3 className="text-base font-bold">Analytics for {title}.</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                        This chart shows page views from the last 7 days in 6 hour intervals.
                    </p>
                </div>
				<ChartContainer config={chartConfig} className="h-[200px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={chartData}>
							<XAxis
								dataKey="hour"
								tickFormatter={(value) => {
									try {
										const date = parse(value, 'MMMM d, yyyy \'at\' hh:mm a', new Date());
										return format(date, 'MMM d'); // Changed to month and day
									} catch (error) {
										console.error('Error parsing date:', error);
										return value; // Return original value if parsing fails
									}
								}}
								tickLine={false}
								axisLine={false}
							/>
							<YAxis tickLine={false} axisLine={false} />
							<ChartTooltip content={<ChartTooltipContent />} />
							<Line type="monotone" dataKey="pageviews" stroke="var(--color-pageviews)" strokeWidth={2} dot={false} />
							<CartesianGrid strokeDasharray="3 3" vertical={false} />
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</PopoverContent>
		</Popover>
	);
}
