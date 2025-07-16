import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { slugify, truncate, generateId } from "@repo/lib";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
