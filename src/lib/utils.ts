import { clsx, type ClassValue } from 'clsx'

// Safe way - koi import error nahi ayega
const { twMerge } = require('tailwind-merge')

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}