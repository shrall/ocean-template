import { MdHelp } from 'react-icons/md';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

function Tooltips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tooltips</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-x-2 gap-y-4'>
        <div className='flex items-center gap-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <MdHelp className='size-6 cursor-help text-ocean-light-40' />
              </TooltipTrigger>
              <TooltipContent>
                <span className='text-xs font-normal'>
                  Tooltip content goes here
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <MdHelp className='size-6 cursor-help text-ocean-light-40' />
              </TooltipTrigger>
              <TooltipContent side='right'>
                <span className='text-xs font-normal'>
                  Tooltip content goes here
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}

export default Tooltips;
