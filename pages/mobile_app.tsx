import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import ProjectImage from '../public/uiuxapp.jpg';

const MobileApp: NextPage = () => {
  return (
    <div>
      <Image src={ProjectImage} />
      <div className="mt-4">Something about my Mobile App here..</div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-rose-500">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileApp;
