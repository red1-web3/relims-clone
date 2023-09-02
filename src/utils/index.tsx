import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cxm = (...args: ClassValue[]) => twMerge(clsx(args));
export const cx = clsx;
