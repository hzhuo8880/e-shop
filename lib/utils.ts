import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { COLOR_MAP } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: string | number, currencyCode: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(Number(amount));
}

export function createUrl(pathname: string, params: URLSearchParams | string) {
  const paramsString = params?.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
}

export function getColorHex(colorName: string): string | [string, string] {
  const lowerColorName = colorName.toLowerCase();

  // Check for exact match first
  if (COLOR_MAP[lowerColorName]) {
    return COLOR_MAP[lowerColorName];
  }

  // Check for partial matches (for cases where color name might have extra text)
  for (const [key, value] of Object.entries(COLOR_MAP)) {
    if (lowerColorName.includes(key) || key.includes(lowerColorName)) {
      return value;
    }
  }

  // Return a default color if no match found
  return '#666666';
}

export const getLabelPosition = (
  index: number
): 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' => {
  const positions = [
    'top-left',
    'bottom-right',
    'top-right',
    'bottom-left',
  ] as const;
  return positions[index % positions.length];
};

// try catch wrapper
// Types for the result object with discriminated union
type Success<T> = [data: T, error: null];

type Failure<E> = [data: null, error: E];

type Result<T, E = Error> = Success<T> | Failure<E>;

// Main wrapper function
export async function tryCatch<T, E = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as E];
  }
}
