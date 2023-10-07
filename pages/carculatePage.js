import RandomSumCalculator from '@/component/RandomSumCalculator';
import Link from 'next/link';
import React from 'react';


export default function CarculatePage() {
  return (
    <div>
      <RandomSumCalculator />
      <div className='home'>
        <Link href="/menuPage" className="">
            Ir al inicio
        </Link>
      </div>
    </div>
  );
}




