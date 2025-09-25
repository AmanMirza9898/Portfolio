import { clsx, type ClassValue } from 'clsx'
const { twMerge } = require('tailwind-merge')

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}