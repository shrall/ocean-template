import { useRouter } from 'next/router';
import { useCallback } from 'react';

import enLocale from '@/locales/en';
import idLocale from '@/locales/id';

const useLocale = () => {
  const router = useRouter();
  const { locale } = router;
  const text = locale === 'id' ? idLocale : enLocale;

  const changeLocale = useCallback(
    (locale: string) => {
      router.push(router.pathname, router.asPath, { locale });
    },
    [router],
  );

  return { text, changeLocale };
};

export default useLocale;
