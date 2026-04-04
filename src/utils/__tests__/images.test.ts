import { describe, it, expect } from 'vitest';
import { extractImageIndex, sortImagePaths } from '../images';

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
    // Shuffle then sort and verify order is restored
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
