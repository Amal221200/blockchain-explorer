import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from "moment"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringShortner(string: string, length: number = 16) {
  return `${string.slice(0, length)}...`
}

export function relativeTimeInSeconds(date: Date) {
  return moment(date).startOf('second').fromNow()
}