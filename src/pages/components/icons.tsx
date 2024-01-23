import Link from 'next/link';
import { HiUserGroup } from 'react-icons/hi';
import { IoMdEye } from 'react-icons/io';
import { IoDocumentText, IoLockClosed } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { MdInfoOutline } from 'react-icons/md';
import { MdAddLink } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { MdChevronRight } from 'react-icons/md';
import { MdChevronLeft } from 'react-icons/md';
import { MdHomeFilled } from 'react-icons/md';
import { TbArrowsSort } from 'react-icons/tb';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Icons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex'>
          Icons/
          <Link
            href='https://react-icons.github.io/react-icons/'
            target='_blank'
            className='flex text-ocean-primary-10 hover:underline'
          >
            react-icons
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-x-2 gap-y-4 overflow-auto'>
        <div className='flex items-center gap-2'>
          <MdHomeFilled className='size-6 text-ocean-primary-10' />
          <MdHomeFilled className='size-6 text-ocean-primary-10' />
          <MdHomeFilled className='size-6 text-ocean-primary-20' />
          <MdHomeFilled className='size-6 text-ocean-primary-30' />
          <MdHomeFilled className='size-6 text-ocean-danger-10' />
          <MdHomeFilled className='size-6 text-ocean-danger-20' />
          <MdHomeFilled className='size-6 text-ocean-success-10' />
          <MdHomeFilled className='size-6 text-ocean-success-20' />
          <MdHomeFilled className='size-6 text-ocean-warning-10' />
          <MdHomeFilled className='size-6 text-ocean-warning-20' />
          <MdHomeFilled className='size-6 text-ocean-orange' />
          <MdHomeFilled className='size-6 text-ocean-yellow' />
        </div>
        <div className='flex items-center gap-2'>
          <MdHomeFilled className='size-8 text-ocean-primary-10' />
          <IoDocumentText className='size-8 text-ocean-primary-10' />
          <MdChevronLeft className='size-8 text-ocean-primary-20' />
          <MdChevronRight className='size-8 text-ocean-primary-30' />
          <TbArrowsSort className='size-8 text-ocean-danger-10' />
          <IoLockClosed className='size-8 text-ocean-danger-20' />
          <IoMdEye className='size-8 text-ocean-success-10' />
          <MdNotifications className='size-8 text-ocean-success-20' />
          <MdAddLink className='size-8 text-ocean-warning-10' />
          <MdInfoOutline className='size-8 text-ocean-warning-20' />
          <HiUserGroup className='size-8 text-ocean-orange' />
          <MdDashboard className='size-8 text-ocean-yellow' />
        </div>
      </CardContent>
    </Card>
  );
}

export default Icons;
