import React from 'react';
import Link from "next/link"; 
import RandomDivisionCalculator from '@/component/Division';




const multiplicaPage = () => {
  return (
    <div>
      <RandomDivisionCalculator/>
      <div className='home'>
      <Link href="/menuPage" className="">
            Ir al inicio
        </Link>
      </div>
    </div>
  );
};

export default multiplicaPage;
