
import Speech from "@/component/Speech";
import ImageBuho from "@/component/ImageBuho";
import Link from "next/link"; 

export default function Instrucciones() {
  return (
    <div>
       <div className="text-center mt-4">
        {/* <Link href='/DecimalPage' className="bg-blue-900 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"> */}
        <Link href='/menuPage' className="inicio">
          Jugar
        </Link>
        <Link href="/"> {/* Agrega el enlace a la página de inicio */}
          <a className="bg-gray-400 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out ml-4">
            Regresar a Home
          </a>
        </Link>
      </div>
      <div className="h-screen flex justify-center items-center mb-0">
        <div className="gap-3 text-2xl">
          <div className="">
            <Speech />
          </div>
          <div className="">
            <ImageBuho />
          </div>
        </div>
      </div>
     
    </div>
  );
}
