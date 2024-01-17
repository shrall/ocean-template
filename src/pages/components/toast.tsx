import Link from 'next/link';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Toast() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex'>
          Toast/
          <Link
            href='https://ui.shadcn.com/docs/components/sonner'
            target='_blank'
            className='flex text-ocean-primary-10 hover:underline'
          >
            Sonner
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-x-2 gap-y-4'>
        <div className='flex items-center gap-2'>
          <Button variant='default' onClick={() => toast('Hello World!')}>
            Click me
          </Button>
          <Button
            variant='default'
            color='success'
            onClick={() => toast.success('Hello World!')}
          >
            Success
          </Button>
          <Button
            variant='default'
            color='warning'
            onClick={() => toast.warning('Hello World!')}
          >
            Warning
          </Button>
          <Button
            variant='default'
            color='danger'
            onClick={() => toast.error('Hello World!')}
          >
            Error
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Toast;
