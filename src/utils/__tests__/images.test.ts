import { describe, it, expect } from 'vitest';
import { extractImageIndex, sortImagePaths, basename, sortByFilename } from '../images';

describe('extractImageIndex', () => {
  it('extracts the number from a standard daniela_N.jpg path', () => {
    expect(extractImageIndex('../assets/daniela_1.jpg')).toBe(1);
    expect(extractImageIndex('../assets/daniela_39.jpg')).toBe(39);
  });

  it('handles paths with directory segments', () => {
    expect(extractImageIndex('/src/assets/daniela_12.jpg')).toBe(12);
  });

  it('returns 0 when no number is found', () => {
    expect(extractImageIndex('logo.png')).toBe(0);
    expect(extractImageIndex('')).toBe(0);
  });

  it('is case-insensitive on the extension', () => {
    expect(extractImageIndex('daniela_7.JPG')).toBe(7);
  });
});

describe('sortImagePaths', () => {
  it('sorts paths numerically, not lexicographically', () => {
    const input = [
      '../assets/daniela_10.jpg',
      '../assets/daniela_2.jpg',
      '../assets/daniela_1.jpg',
      '../assets/daniela_9.jpg',
    ];
    const expected = [
      '../assets/daniela_1.jpg',
      '../assets/daniela_2.jpg',
      '../assets/daniela_9.jpg',
      '../assets/daniela_10.jpg',
    ];
    expect(sortImagePaths(input)).toEqual(expected);
  });

  it('handles a fully ordered sequence of 39 images correctly', () => {
    const sorted = Array.from({ length: 39 }, (_, i) => `daniela_${i + 1}.jpg`);
    const shuffled = [...sorted].reverse();
    expect(sortImagePaths(shuffled)).toEqual(sorted);
  });

  it('does not mutate the original array', () => {
    const input = ['daniela_3.jpg', 'daniela_1.jpg'];
    const original = [...input];
    sortImagePaths(input);
    expect(input).toEqual(original);
  });

  it('returns an empty array unchanged', () => {
    expect(sortImagePaths([])).toEqual([]);
  });
});

describe('basename', () => {
  it('returns the filename from a path with directories', () => {
    expect(basename('src/assets/galleries/portraits/photo.jpg')).toBe('photo.jpg');
  });

  it('returns the input unchanged when there is no slash', () => {
    expect(basename('photo.jpg')).toBe('photo.jpg');
  });

  it('handles empty string', () => {
    expect(basename('')).toBe('');
  });
});

describe('sortByFilename', () => {
  it('sorts alphabetically by filename, ignoring directory', () => {
    const input = [
      'galleries/portraits/DSC_003.jpg',
      'galleries/portraits/DSC_001.jpg',
      'galleries/portraits/DSC_002.jpg',
    ];
    const expected = [
      'galleries/portraits/DSC_001.jpg',
      'galleries/portraits/DSC_002.jpg',
      'galleries/portraits/DSC_003.jpg',
    ];
    expect(sortByFilename(input)).toEqual(expected);
  });

  it('is case-insensitive', () => {
    const input = ['b.jpg', 'A.jpg', 'c.jpg'];
    expect(sortByFilename(input)).toEqual(['A.jpg', 'b.jpg', 'c.jpg']);
  });

  it('does not mutate the original array', () => {
    const input = ['z.jpg', 'a.jpg'];
    const original = [...input];
    sortByFilename(input);
    expect(input).toEqual(original);
  });

  it('returns an empty array unchanged', () => {
    expect(sortByFilename([])).toEqual([]);
  });
});
