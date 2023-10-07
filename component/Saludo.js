import { useState } from "react";
import { useRouter } from "next/router"; // Importamos useRouter

export default function Saludo() {
  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);
  const router = useRouter(); // Obtenemos el objeto router

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const saludar = () => {
    setMostrarSaludo(true);
    setTimeout(() => {
      // Después de 2 segundos, redirigir a la página de instrucciones
      router.push("/instrucciones");
    }, 1300); // Espera 2000 milisegundos (2 segundos)
  };

  return (
    <div className=" grid items-center h-full">
      <div className="speech-bubble p-4 rounded-lg bg-blue-400 relative">
        {!mostrarSaludo ? (
          <>
            <input
              className="w-full p-2 bg-transparent border-b border-white"
              type="text"
              placeholder="Hola! Ingresa tu nombre"
              value={nombre}
              onChange={handleInputChange}
            />
            <button
              className="clase"
              onClick={saludar}
            >
              Saludar
            </button>
          </>
        ) : (
          <p className="text-black">Hola, {nombre}</p>
        )}
      </div>
    </div>
  );
}
