import { useState, useEffect } from "react";

export default function Speech() {
  const [showList, setShowList] = useState(false);

  // Cuando el componente se monta, activa la animación después de un retraso
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowList(true);
    }, 500); // Agrega un retraso de 500 milisegundos (0.5 segundos)
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <div className="">
      <div className="speech-bubble p-4 rounded-lg bg-blue-400 text-black">
        <ul className="">
          <li className={showList ? "show" : ""}>
            Explicación de las cifras: Comienza explicando qué son las cifras en un número. Por ejemplo, en el número "123", "1" es la cifra de las centenas, "2" es la cifra de las decenas y "3" es la cifra de las unidades.
          </li>
          
          {/* Agrega más elementos <li> aquí */}
        </ul>
      </div>
    
    </div>
  );
}
