import React from 'react';
import Link from "next/link"; 
import RandomSubtractionCalculator from '@/component/Sustracion';




const sustracionPage = () => {
  return (
    <div>
      <RandomSubtractionCalculator/>
      <div className='home'>
      <Link href="/menuPage" className="">
            Ir al inicio
        </Link>
      </div>
    </div>
  );
};

export default sustracionPage;
