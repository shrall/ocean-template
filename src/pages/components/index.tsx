import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import useLocale from '@/hooks/useLocale';

import Seo from '@/components/seo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Avatars from './avatars';
import Badges from './badges';
import Buttons from './buttons';
import Icons from './icons';
import Skeletons from './skeletons';
import Toast from './toast';
import Tours from './tours';

export default function Components() {
  const { text, changeLocale } = useLocale();
  return (
    <main className='min-w-screen flex min-h-screen flex-col gap-4 px-32 py-12'>
      <Seo templateTitle='Components' siteName='Ocean Starter Template' />
      <div className='flex items-center justify-between gap-x-2'>
        <Link href='/'>
          <Button variant='link' className='mr-auto'>
            <ArrowLeft className='mr-2 size-5' /> {text.go_back}
          </Button>
        </Link>
        <div id='i18n-buttons' className='flex items-center gap-x-2'>
          <Button
            onClick={() => changeLocale('id')}
            variant='default'
            color='secondary'
            size='icon'
            className='p-6 text-xl'
          >
            🇮🇩
          </Button>
          <Button
            onClick={() => changeLocale('en')}
            variant='default'
            color='secondary'
            size='icon'
            className='p-6 text-xl'
          >
            🇺🇸
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle id='component-title'>{text.components}</CardTitle>
          <CardDescription>{text.components_description}</CardDescription>
        </CardHeader>
      </Card>
      {/* //NOTE - Avatars */}
      <Avatars />
      {/* //NOTE - Badges */}
      <Badges />
      {/* //NOTE - Buttons */}
      <Buttons />
      {/* //NOTE - Icons */}
      <Icons />
      {/* //NOTE - Skeletons */}
      <Skeletons />
      {/* //NOTE - Toast */}
      <Toast />
      {/* //NOTE - Tours */}
      <Tours />
    </main>
  );
}
