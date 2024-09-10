"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Download, Loader, QrCode } from "lucide-react";
import { Button } from "./button";
import generateQRCode, { QRCodeOptions } from "@/lib/utils/qr-code-generator";
import QRCodeStyling, { cornerDotTypes, DotType, CornerSquareType, CornerDotType } from "qr-code-styling";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectType } from "@/lib/types/projects";
import { IMAGE_BASE_URL } from "@/lib/utils";
import html2canvas from "html2canvas";

export default function QrCodePopover({ project }: { project: ProjectType }) {
	const [qrCode, setQrCode] = useState<Blob | null>(null);
	const [open, setOpen] = useState<boolean>(false);
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchQRCode = async () => {
			const options: QRCodeOptions = {
				width: 1000,
				height: 1000,
				data: `https://gmon.link/${project.slug}`,
				image: "/assets/gmon-white.png",
				dotsOptions: {
					color: "#6D27D9",
					type: "rounded" as DotType,
				},
				cornersDotOptions: {
					color: "#6D27D9",
					type: "dot" as CornerDotType,
				},
				cornersSquareOptions: {
					color: "#6D27D9",
					type: "extra-rounded" as CornerSquareType,
				},
				backgroundOptions: {
					color: "#ffffff",
				},
				imageOptions: {
					crossOrigin: "anonymous",
					margin: 0,
					hideBackgroundDots: false,
				},
				qrOptions: {
					errorCorrectionLevel: "H" as "H",
				},
			};
			const qr = generateQRCode(options);
			const data = await qr.getRawData();
			setQrCode(data);
		};

		fetchQRCode();
	}, [project]);

	async function handleDownload() {
		if (qrCode && elementRef.current) {
			const canvas = await html2canvas(elementRef.current, {
				backgroundColor: "#030712",
				scale: 5,
				logging: false,
				allowTaint: true,
				useCORS: true,
			});
			const image = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.href = image;
			link.download = `${project.slug}-qr-code.png`;
			link.click();
		}
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" size="icon">
					<QrCode />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="space-y-3 w-[350px] rounded-xl">
				<div className="grid gap-4">
					{qrCode ? (
						<div>
							<div ref={elementRef} className="pt-16 pb-6 px-6 bg-background">
							<div className="relative bg-white p-4 rounded-3xl">
								<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
									<Image
										src={`${IMAGE_BASE_URL}${project.avatar_url}`}
										alt="Project Avatar"
										unoptimized
										width={80}
										height={80}
										className="rounded-full object-cover size-20"
									/>
								</div>
								<div className="pt-10 pb-4 px-8 rounded-2xl bg-white">
									<div className="aspect-square relative">
										<Image src={URL.createObjectURL(qrCode)} alt="QR Code" layout="fill" objectFit="contain" />
									</div>
									<p className="text-sm uppercase text-primary text-center font-bold mt-3">gmon.link/{project.slug}</p>
								</div>
							</div>
							</div>
							<Button onClick={handleDownload} variant="outline" className="w-full mt-4">
								<Download size={20} className="mr-1.5" /> Download QR Code
							</Button>
						</div>
					) : (
						<Loader className="size-6 animate-spin" />
					)}
				</div>
			</PopoverContent>
		</Popover>
	);
}