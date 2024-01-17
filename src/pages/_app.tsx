import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { Toaster } from '@/components/ui/sonner';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='font-bca'>
      <Toaster richColors position='top-center' />
      <Component {...pageProps} />
    </main>
  );
}
