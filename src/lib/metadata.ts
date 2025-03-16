import {Metadata} from 'next';

// TODO: Update metadata

export function constructMetadata({
  title = 'Njihia Njagi - Software Engineer', // TODO: Add a custom title
  description = 'Experienced software engineer specialized in creating robust, scalable web solutions with a focus on performance and user experience.',
  image = '/og-image.png', // Open Graph image for social sharing
  icons = '/avatar.svg', // TODO: Add a custom icon
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@njihianjagi',
    },
    icons,
    metadataBase: new URL('https://www.njihianjagi.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
