import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PLATFORM_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.gmon.link";

export const IMAGE_BASE_URL = "https://api.monadpad.com/storage/v1/object/public/";