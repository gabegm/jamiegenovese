export interface GallerySection {
  slug: string;
  label: string;
  description: string;
}

export const gallerySections: GallerySection[] = [
  {
    slug: 'portraits',
    label: 'Portraits',
    description: 'A collection of portrait photography by Jamie Ian Genovese.',
  },
  {
    slug: 'fashion',
    label: 'Fashion',
    description: 'Fashion photography by Jamie Ian Genovese.',
  },
  {
    slug: 'landscape',
    label: 'Landscape',
    description: 'Landscape photography by Jamie Ian Genovese.',
  },
  {
    slug: 'street',
    label: 'Street',
    description: 'Street photography by Jamie Ian Genovese.',
  },
  {
    slug: 'abstract',
    label: 'Abstract',
    description: 'Abstract photography by Jamie Ian Genovese.',
  },
  {
    slug: 'editorial',
    label: 'Editorial',
    description: 'Editorial photography by Jamie Ian Genovese.',
  },
  {
    slug: 'events',
    label: 'Events',
    description: 'Event photography by Jamie Ian Genovese.',
  },
  {
    slug: 'projects',
    label: 'Projects',
    description: 'Photography projects by Jamie Ian Genovese.',
  },
];
