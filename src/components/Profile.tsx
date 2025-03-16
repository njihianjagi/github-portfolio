'use client';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@/hook/useMediaQuery';

import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';

import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

const socials = [
  {
    name: 'Email',
    link: 'mailto:timothy.njagi@gmail.com',
    icon: <FaEnvelope className='size-4' />,
  },
  {
    name: 'Github',
    link: 'https://github.com/timonjagi',
    icon: <FaGithub className='size-4' />,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/timothy-njagi',
    icon: <FaLinkedin className='size-4' />,
  },

  // TODO: Add more socials here
];

export const Profile = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)');

  return (
    <Card>
      <CardContent className='pt-6'>
        <div className='flex flex-col items-start gap-2 '>
          <div className='w-full flex flex-row justify-between items-top '>
            <div className='flex flex-row md:flex-col items-center md:items-start w-full gap-4'>
              <Image
                width={150}
                height={150}
                quality={100}
                src='/avatar.svg'
                alt='Profile Picture'
                className='rounded-full size-12 md:w-full h-auto object-cover border-2'
              />
              <div className='flex flex-col items-start justify-center'>
                <h1 className='font-bold md:mt-4 text-xl md:text-2xl'>
                  Tim Njagi
                </h1>
                <p className='text-sm md:text-base text-muted-foreground'>
                  Full-stack Engineer
                </p>
              </div>
            </div>
            {!isDesktopOrLaptop && <ThemeSwitcher />}
          </div>

          <p className='mt-2 text-start text-sm text-muted-foreground'>
            I am a software engineer with a passion for building products that
            help people live better lives.
          </p>
          <Button className='mt-4 w-full' asChild>
            <Link
              href='/resume.pdf'
              target='_blank'
              className='font-semibold uppercase flex items-center justify-center'
            >
              RESUME / CV
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='ml-2 h-4 w-4'
              >
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                <polyline points='7 10 12 15 17 10' />
                <line x1='12' y1='15' x2='12' y2='3' />
              </svg>
            </Link>
          </Button>
          <div className='mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full'>
            {socials.map((s, i) => {
              const username =
                s.link
                  .replace(/^mailto:/, '')
                  .split('/')
                  .pop()
                  ?.replace(/^\//, '') || '';

              return (
                <Link
                  key={i}
                  href={s.link}
                  target='_blank'
                  className='cursor-pointer flex items-center gap-2 group'
                >
                  {s.icon}
                  <span className='text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear'>
                    {username}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
