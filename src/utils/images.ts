/**
 * Extracts the numeric index from a daniela_N.jpg style filename path.
 * Returns 0 if no number is found.
 */
export function extractImageIndex(filePath: string): number {
  return parseInt(filePath.match(/daniela_(\d+)\.[a-z]+$/i)?.[1] ?? '0', 10);
}

/**
 * Sorts an array of image file paths numerically by their embedded index.
 * e.g. ['daniela_10.jpg', 'daniela_2.jpg'] → ['daniela_2.jpg', 'daniela_10.jpg']
 */
export function sortImagePaths(paths: string[]): string[] {
  return [...paths].sort((a, b) => extractImageIndex(a) - extractImageIndex(b));
}
