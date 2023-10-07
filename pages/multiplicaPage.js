import React from 'react';
import Link from "next/link"; 
import RandomMultiplicationCalculator from '@/component/Multiplicacion';



const multiplicaPage = () => {
  return (
    <div>
      <RandomMultiplicationCalculator />
      <div className='home'>
      <Link href="/menuPage" className="">
            Ir al inicio
        </Link>
      </div>
    </div>
  );
};

export default multiplicaPage;
