import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/theme-switcher";

export const metadata: Metadata = {
	title: "gmon.link - create your own mini landing page",
	description: "gmon.link is a free tool to create your own mini landing page. powered by Telegram, built by Monad Pad.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body className="relative">
				<ThemeProvider attribute="class" defaultTheme="system">
					<div className="fixed top-4 right-4">
						<ModeToggle />
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
