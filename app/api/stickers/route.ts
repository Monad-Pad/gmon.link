import { supportedImages } from "@/lib/info/supported-images";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        supportedImages: supportedImages,
    });
}