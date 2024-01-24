import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { Step, TooltipRenderProps } from 'react-joyride';

import useLocale from '@/hooks/useLocale';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const JoyRideNoSSR = dynamic(() => import('react-joyride'), { ssr: false });

interface State {
  run: boolean;
  stepIndex: number;
  steps: Step[];
}

function Tours() {
  const { text } = useLocale();

  const [{ run, steps, stepIndex }, setState] = useState<State>({
    run: false,
    stepIndex: 0,
    steps: [
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
    ],
  });

  function Tooltip({
    index,
    isLastStep,
    size,
    step,
    tooltipProps,
  }: TooltipRenderProps) {
    const { text } = useLocale();
    return (
      <Card className='min-w-96 font-bca' {...tooltipProps}>
        <CardHeader className='space-y-1 px-4 py-3'>
          {step.title && (
            <CardTitle className='text-lg font-bold text-ocean-primary-30'>
              {step.title}
            </CardTitle>
          )}
          <CardDescription className='text-sm text-ocean-dark-10'>
            {step.content}
          </CardDescription>
        </CardHeader>
        <CardFooter className='flex justify-between px-4 py-3'>
          <div className='flex items-center gap-x-1'>
            {Array.from({ length: size }, (_, i) =>
              index === i ? (
                <div
                  key={i}
                  className='h-2 w-6 rounded-full bg-ocean-secondary-20'
                ></div>
              ) : (
                <div
                  key={i}
                  onClick={() => setState((s) => ({ ...s, stepIndex: i }))}
                  className='size-2 cursor-pointer rounded-full bg-ocean-secondary-10 transition-colors hover:bg-ocean-secondary-20'
                ></div>
              ),
            )}
          </div>
          <div className='flex items-center gap-x-2 font-semibold'>
            {!isLastStep && (
              <Button
                onClick={() =>
                  setState((s) => ({
                    ...s,
                    stepIndex: 0,
                    run: false,
                  }))
                }
                variant='outline'
              >
                {text.tour.skip}
              </Button>
            )}
            <Button
              onClick={() => {
                setState((s) => ({
                  ...s,
                  stepIndex: isLastStep ? 0 : s.stepIndex + 1,
                  run: isLastStep ? false : true,
                }));
              }}
              variant='default'
            >
              {!isLastStep ? text.tour.next : text.tour.close}
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <JoyRideNoSSR
        disableOverlayClose
        run={run}
        showSkipButton
        spotlightClicks
        stepIndex={stepIndex}
        steps={steps}
        tooltipComponent={Tooltip}
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
