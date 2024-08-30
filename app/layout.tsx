import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
