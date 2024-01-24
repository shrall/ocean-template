import { useState } from 'react';
import { Step, TooltipRenderProps } from 'react-joyride'; // replace with your actual import path

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import useLocale from './useLocale';

interface State {
  run: boolean;
  stepIndex: number;
  steps: Step[];
}

export function useTourTooltip(tourSteps: Step[]) {
  const [{ run, steps, stepIndex }, setState] = useState<State>({
    run: false,
    stepIndex: 0,
    steps: tourSteps,
  });

  function TourTooltip({
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

  return { run, steps, stepIndex, TourTooltip, setState };
}
