/**
 * Extracts the bare filename (without directory) from a path.
 */
export function basename(filePath: string): string {
  const parts = filePath.split('/');
  return parts[parts.length - 1];
}

/**
 * Sorts image paths using natural/numeric order by filename.
 * Handles both zero-padded names (001.jpg) and bare numbers (daniela_10.jpg),
 * and is case-insensitive.
 *
 * e.g. ['daniela_10.jpg', 'daniela_2.jpg'] → ['daniela_2.jpg', 'daniela_10.jpg']
 */
export function sortByFilename(paths: string[]): string[] {
  return [...paths].sort((a, b) =>
    basename(a).localeCompare(basename(b), undefined, {
      numeric: true,
      sensitivity: 'base',
    })
  );
}

/**
 * Returns BASE_URL with a guaranteed trailing slash.
 * import.meta.env.BASE_URL may or may not include one depending on the Astro
 * version and the configured base value (e.g. '/jamiegenovese' vs '/').
 */
export function baseUrl(): string {
  return import.meta.env.BASE_URL.replace(/\/?$/, '/');
}
