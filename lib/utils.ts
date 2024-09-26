import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || "production";
export const PLATFORM_URL = environment === "development" ? "http://localhost:3000" : "https://www.gmon.link";

export const IMAGE_BASE_URL = `${
  environment === "development" ? process.env.NEXT_PUBLIC_SUPABASE_URL : "https://api.monadpad.com"
}/storage/v1/object/public/`;
