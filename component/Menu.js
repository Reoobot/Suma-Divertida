import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return(
    <div>
         <div>
      <h1 className="fuente text-3xl font-bold text-center text-indigo-600 animate__animated animate__bounce mt p-4">Juegos Divertidos</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-10 sm:p-2">
          <div className="grid justify-center text-center">
          <Link href="/carculatePage" className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
              <Image src="/mono-4.gif" alt="Segunda GIF" width={200} height={200} className="rounded-full" />
            </Link>
            <span className="block font-bold mt-5 mb-3">Suma</span>
          </div>
          <div className="grid justify-center text-center">
          <Link href="/sustracionPage" className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
              <Image src="/2.gif" alt="Segunda GIF" width={135} height={135} className="rounded-full" />
            </Link>
            <span className="block font-bold">Resta</span>
          </div>
          <div className="grid justify-center text-center">
          <Link href="/divisionPage" className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
              <Image src="/mono-1.gif" alt="Segunda GIF" width={135} height={200} className="rounded-full" />
            </Link>
            <span className="block font-bold">División</span>
          </div>
          <div className="grid justify-center text-center">
          <Link href="/multiplicaPage"  className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
              <Image src="/mono-2.gif" alt="Segunda GIF" width={200} height={200} className="rounded-full" />
            </Link>
            <span className="block font-bold mt-5 mb-3">Multiplicación</span>
          </div>
          <div className="grid justify-center text-center">
          <Link href="/multiplicaPage" className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
              <Image src="/mono-5.gif" alt="Segunda GIF" width={200} height={200} className="rounded-full" />
            </Link>
            <span className="block font-bold mt-5 mb-3">Suma</span>
          </div>
          <div className="grid justify-center text-center">
          <Link href="/" className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
              <Image src="/mono-6.gif" alt="Segunda GIF" width={200} height={200} className="rounded-full" />
            </Link>
            <span className="block font-bold mt-5 mb-3">Suma</span>
          </div>
         
        </div>
     <div className='text-center mt-6'>

        <Link href='/' className="sumar" >
                Regressar
        </Link>
     </div>
    </div>
    );
}