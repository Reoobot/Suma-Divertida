import DecimalOperations from '@/component/DecimalOperations';
import React from 'react';
import Link from "next/link"; 


const DecimalPage = () => {
  return (
    <div>
      <h1>Página de Operaciones con Números Decimales</h1>
      <DecimalOperations />
      <div className="text-center mt-4">
        <Link href='/DecimalPage' className="bg-blue-900 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          Jugar
        </Link>
        <Link href="/"> 
          <a className="bg-gray-400 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out ml-4">
            Regresar a Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DecimalPage;
