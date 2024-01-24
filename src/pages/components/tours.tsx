import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Step } from 'react-joyride';

import useLocale from '@/hooks/useLocale';
import { useTourTooltip } from '@/hooks/useTourTooltip';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const JoyRideNoSSR = dynamic(() => import('react-joyride'), { ssr: false });

function Tours() {
  const { text } = useLocale();

  const tourSteps: Step[] = [
    {
      title: text.tours[0].title,
      content: text.tours[0].content,
      placement: 'center',
      target: 'body',
      disableBeacon: true,
    },
    {
      title: text.tours[1].title,
      content: text.tours[1].content,
      placement: 'bottom',
      target: '#component-title',
      disableBeacon: true,
    },
    {
      title: text.tours[2].title,
      content: text.tours[2].content,
      placement: 'right',
      target: '#component-title',
      disableBeacon: true,
    },
    {
      title: text.tours[3].title,
      content: text.tours[3].content,
      placement: 'left',
      target: '#i18n-buttons',
      disableBeacon: true,
    },
    {
      title: text.tours[4].title,
      content: text.tours[4].content,
      placement: 'right-start',
      target: '#tour-title',
      disableBeacon: true,
    },
    {
      title: text.tours[5].title,
      content: text.tours[5].content,
      placement: 'right-start',
      target: '#joyride-link',
      disableBeacon: true,
    },
  ];

  const { run, steps, stepIndex, TourTooltip, setState } =
    useTourTooltip(tourSteps);

  return (
    <Card>
      <JoyRideNoSSR
        disableOverlayClose
        run={run}
        showSkipButton
        spotlightClicks
        stepIndex={stepIndex}
        steps={steps}
        tooltipComponent={TourTooltip}
      />
      <CardHeader>
        <CardTitle id='tour-title' className='flex'>
          Tours/
          <Link
            id='joyride-link'
            href='https://github.com/gilbarbara/react-joyride'
            target='_blank'
            className='flex text-ocean-primary-10 hover:underline'
          >
            react-joyride
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-x-2 gap-y-4'>
        <div className='flex items-center gap-2'>
          <Button
            onClick={() => setState((s) => ({ ...s, run: true, stepIndex: 0 }))}
            variant='default'
          >
            Start Tour
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Tours;
