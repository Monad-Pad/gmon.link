import QRCodeStyling, { Gradient, DotType, CornerSquareType, CornerDotType } from "qr-code-styling";

export interface QRCodeOptions {
	width: number;
	height: number;
	data: string;
	image?: string;
	dotsOptions?: {
		color: string;
		type?: DotType;
		gradient?: Gradient | undefined;
	};
	cornersSquareOptions?: {
		color: string;
		type?: CornerSquareType;
		gradient?: Gradient | undefined;
	};
	cornersDotOptions?: {
		color: string;
		type?: CornerDotType;
		gradient?: Gradient | undefined;
	};
	backgroundOptions?: {
		color: string;
		gradient?: Gradient | undefined;
	};
	imageOptions?: {
		crossOrigin: string;
		margin: number;
		hideBackgroundDots?: boolean;
		imageSize?: number;
	};
	qrOptions?: {
		errorCorrectionLevel: "L" | "M" | "Q" | "H";
		margin?: number;
		maskPattern?: number;
	};
}

export default function generateQRCode({
	width,
	height,
	data,
	image,
	dotsOptions = { color: "#000000", type: "square" as DotType, gradient: undefined },
	cornersSquareOptions = { color: "#000000", type: "extra-rounded" as CornerSquareType, gradient: undefined },
	cornersDotOptions = { color: "#000000", type: "dot" as CornerDotType, gradient: undefined },
	backgroundOptions = { color: "#ffffff", gradient: undefined },
	imageOptions = { crossOrigin: "anonymous", margin: 20 },
	qrOptions = { errorCorrectionLevel: "H" }
}: QRCodeOptions): QRCodeStyling {
	return new QRCodeStyling({
		width,
		height,
		data,
		image,
		dotsOptions,
		cornersSquareOptions,
		cornersDotOptions,
		backgroundOptions,
		imageOptions,
		qrOptions,
	});
}
