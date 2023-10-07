import Menu from '@/component/Menu';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-primary h-screen w-screen">
          <div className='flex justify-center items-center'>
      {/* <Menu/> */}
      <div className='m-6 mt-30'>
        <h1 className="fuente text-3xl font-bold text-center text-indigo-600 animate__animated animate__bounce">Juegos Divertidos</h1>
        <Image src="/10.png" alt="Segunda GIF" width={700} height={500} />
        </div>
     </div>
     <div className='text-center'>

        <Link href='/name' className="sumar" >
                Ir a Menu
        </Link>
     </div>
    </div>
  );
}
