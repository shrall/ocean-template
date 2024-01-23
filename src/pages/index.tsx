import { Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import useLocale from '@/hooks/useLocale';

import Layout from '@/components/layout/layout';
import Seo from '@/components/seo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const { text, changeLocale } = useLocale();

  return (
    <Layout>
      <Seo templateTitle='Home' siteName='Ocean Starter Template' />
      <section className='min-w-screen flex min-h-screen flex-col items-center justify-center gap-4 px-32 py-12'>
        <Card className='flex min-h-[70vh] w-3/4 flex-col items-center justify-center bg-ocean bg-cover'>
          <CardHeader className='flex flex-col items-center justify-center'>
            <CardTitle className='text-ocean-light-10'>
              <Image
                src='/images/logo-text.png'
                alt='Ocean Logo'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '200px', height: 'auto' }}
              />
            </CardTitle>
            <CardDescription className='ml-2 text-xl font-semibold text-ocean-light-10'>
              Starter Template
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center justify-center gap-y-4'>
            <Link href='/components'>
              <Button variant='outline'>
                <Eye className='mr-2' /> {text.see_component}
              </Button>
            </Link>
            <div className='flex items-center gap-x-2'>
              <Button
                onClick={() => changeLocale('id')}
                variant='default'
                color='secondary'
                size='icon'
                className='text-xl'
              >
                🇮🇩
              </Button>
              <Button
                onClick={() => changeLocale('en')}
                variant='default'
                color='secondary'
                size='icon'
                className='text-xl'
              >
                🇺🇸
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
