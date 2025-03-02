import Link from 'next/link';
import {cn} from '@/lib/utils';

import {ExternalLink} from 'lucide-react';

import {Card, CardContent} from '@/components/ui/card';

export const projects = [
  {
    title: 'Planetary Hours App',
    description:
      'A web application that calculates current planetary hours based on user location and time.',
    tech: 'Next.js',
    link: 'https://planetary-hours-one.vercel.app',
  },
  {
    title: 'Gibwork Example App',
    description:
      'A demonstration app showcasing interactions with blockchain APIs and decentralized rendering.',
    tech: 'Next.js',
    link: 'https://gib-bounty.vercel.app',
  },
  {
    title: 'Sigilizer App',
    description:
      'A cross-platform application for generating personalized sigils using procedural graphics.',
    tech: 'React',
    link: '#',
  },
  {
    title: 'Affirmator',
    description:
      'A mobile app that generates personalized affirmations using AI language models.',
    tech: 'React Native',
    link: '#',
  },
];

const techColors = {
  'Next.js': 'bg-black',
  React: 'bg-blue-500',
  'React Native': 'bg-blue-400',
  'Vue.js': 'bg-green-500',
  Python: 'bg-yellow-500',
};

export const Projects = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Featured Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className='pt-6 h-full'>
              <div className='flex flex-col h-full'>
                <Link
                  href={p.link}
                  className='font-semibold text-primary hover:underline'
                >
                  {p.title}
                </Link>
                <p className='text-sm text-muted-foreground mt-1 mb-4'>
                  {p.description}
                </p>
                <div className='mt-auto flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <div
                      className={cn(
                        'size-4 rounded-full',
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className='text-xs font-medium text-muted-foreground'>
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    href={p.link}
                    className='flex items-center gap-2 text-sm text-primary hover:underline'
                    target='_blank'
                  >
                    View Project
                    <ExternalLink className='inline-block size-3' />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
