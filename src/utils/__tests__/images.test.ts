import { describe, it, expect, vi, beforeEach } from 'vitest';
import { basename, sortByFilename, baseUrl } from '../images';

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
  it('sorts numerically — daniela_10 comes after daniela_2, not before', () => {
    const input = [
      'galleries/portraits/daniela_10.jpg',
      'galleries/portraits/daniela_2.jpg',
      'galleries/portraits/daniela_1.jpg',
    ];
    const expected = [
      'galleries/portraits/daniela_1.jpg',
      'galleries/portraits/daniela_2.jpg',
      'galleries/portraits/daniela_10.jpg',
    ];
    expect(sortByFilename(input)).toEqual(expected);
  });

  it('sorts zero-padded names correctly', () => {
    const input = ['003_shoot.jpg', '001_studio.jpg', '002_outdoor.jpg'];
    const expected = ['001_studio.jpg', '002_outdoor.jpg', '003_shoot.jpg'];
    expect(sortByFilename(input)).toEqual(expected);
  });

  it('handles the full 39-image daniela sequence', () => {
    const sorted = Array.from({ length: 39 }, (_, i) => `daniela_${i + 1}.jpg`);
    const shuffled = [...sorted].sort(() => Math.random() - 0.5);
    expect(sortByFilename(shuffled)).toEqual(sorted);
  });

  it('is case-insensitive', () => {
    const input = ['B.jpg', 'a.jpg', 'C.jpg'];
    expect(sortByFilename(input)).toEqual(['a.jpg', 'B.jpg', 'C.jpg']);
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

describe('baseUrl', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it('returns "/" when BASE_URL is "/"', () => {
    vi.stubEnv('BASE_URL', '/');
    expect(baseUrl()).toBe('/');
  });

  it('appends trailing slash when BASE_URL has no trailing slash', () => {
    vi.stubEnv('BASE_URL', '/jamiegenovese');
    expect(baseUrl()).toBe('/jamiegenovese/');
  });

  it('does not double the trailing slash when BASE_URL already ends with "/"', () => {
    vi.stubEnv('BASE_URL', '/jamiegenovese/');
    expect(baseUrl()).toBe('/jamiegenovese/');
  });
});

