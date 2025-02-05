import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
// TODO: Update skills
const skills = [
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'TailwindCSS',
  'Ionic',
  'Angular',
  'NextJS',
  'ReactJS',
  'NodeJS',
  'ExpressJS',
  'NestJS',
  'Prisma',
  'MongoDB',
  'PostgreSQL',
  'SQL',
  'Git',
  'Docker',
  'Kubernetes',
  'Linux',
  'Windows',
  'MacOS',
];

export const Skills = () => {
  return (
    <Card className='mt-6'>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap gap-2'>
          {skills.map((s, i) => (
            <Badge key={i} variant='secondary'>
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
