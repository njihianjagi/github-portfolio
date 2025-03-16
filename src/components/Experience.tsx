import Image from 'next/image';

import {CalendarDays} from 'lucide-react';

import {Card, CardContent} from '@/components/ui/card';

import {JobImages} from '@/components/JobImages';

const jobs = [
  {
    role: 'Senior Software Engineer',
    company: 'Bingwa Services',
    logo: '/bingwa.svg',
    duration: '2024 - Present',
    description:
      'Lead engineer for multiple high-impact projects, mentoring junior developers, and implementing best practices.',
    link: 'https://linkedin.com/company/bingwa/',
    images: ['/bingwa-desktop.png'],
  },
  {
    role: 'Software Engineer',
    company: 'Bingwa Services',
    logo: '/bingwa.svg',
    duration: '2021 - 2023',
    description:
      'Developed and maintained enterprise applications, focusing on performance optimization and automated testing.',
    link: 'https://linkedin.com/company/bingwa/',
    images: ['/bingwa-desktop.png'],
  },
  {
    role: 'Freelance Developer',
    company: 'Self-employed',
    logo: '/company.svg',
    duration: '2019 - Present',
    description:
      'Designed and developed various client projects, focusing on responsive design and performance optimization.',
    link: '',
    images: [
      '/essajeecreations-desktop.webp',
      '/thrivingsupermama-desktop.webp',
      '/presentfatherhood-desktop.webp',
      '/jublak-desktop.png',
    ],
  },
  // {
  //   role: 'Intern',
  //   company: 'Radio Africa Group Ltd.',
  //   logo: '/rag.svg',
  //   duration: '2016/01 - 2016/04',
  //   description:
  //     'Supported IT operations and developed internal tools to improve department efficiency.',
  //   link: 'https://radioafricagroup.co.ke',
  //   images: ['/rag-desktop.png'],
  // },
];

export const Experience = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4 text-black dark:text-white'>
        Work Experience
      </h2>
      <Card>
        <CardContent className='pt-6'>
          <ul className='space-y-8'>
            {jobs.map((j, i) => (
              <li key={i} className='border-b last:border-b-0 pb-8 last:pb-0'>
                {/* Job Details */}
                <div className='flex items-center space-x-4'>
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className='rounded-md border shadow-md object-cover text-gray-900 dark:text-white'
                  />
                  <div>
                    <h3 className='font-semibold'>{j.role}</h3>
                    <p className='text-sm text-muted-foreground'>{j.company}</p>
                  </div>
                </div>
                <p className='text-xs text-muted-foreground mt-2 flex items-center'>
                  <CalendarDays className='size-3 mr-2' />
                  {j.duration}
                </p>
                <p className='text-sm mt-2'>{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
