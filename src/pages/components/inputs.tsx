import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Inputs() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inputs</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-x-2 gap-y-4'>
        <div className='flex items-center gap-2'>
          <div>
            <Label htmlFor='placeholder' className='text-right'>
              Placeholder
            </Label>
            <Input
              id='placeholder'
              placeholder='Placeholder'
              className='col-span-3'
            />
          </div>
          <div>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input
              id='username'
              defaultValue='@shrall'
              className='col-span-3'
            />
          </div>
          <div>
            <Label htmlFor='name' className='text-right'>
              Disabled
            </Label>
            <Input
              disabled
              id='name'
              defaultValue='@shrall'
              className='col-span-3'
            />
          </div>
          <div>
            <Label htmlFor='with-icon' className='text-right'>
              With Icon
            </Label>
            <Input
              leftIcon='search'
              id='with-icon'
              placeholder='Search'
              className='col-span-3'
            />
          </div>
          <div>
            <Label htmlFor='with-icon' className='text-right'>
              With Icon
            </Label>
            <Input
              inputStyle='underline'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              rightNode={
                <IoMdEye
                  onClick={() => setShowPassword(!showPassword)}
                  className='size-6 text-ocean-light-40'
                />
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Inputs;
