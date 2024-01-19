import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Dialogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dialogs</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-x-2 gap-y-4'>
        <div className='flex items-center gap-2'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='default'>Dialog</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className=''>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    defaultValue='Marshall Kurniawan'
                    className='col-span-3'
                  />
                </div>
                <div className=''>
                  <Label htmlFor='username' className='text-right'>
                    Username
                  </Label>
                  <Input
                    id='username'
                    defaultValue='@shrall'
                    className='col-span-3'
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}

export default Dialogs;
