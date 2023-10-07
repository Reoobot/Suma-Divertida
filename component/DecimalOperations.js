import React, { useState } from 'react';

export default function DecimalCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setResult(result.toFixed(2)); // Limita el resultado a 2 decimales
  };

  const handleSubtract = () => {
    const result = parseFloat(num1) - parseFloat(num2);
    setResult(result.toFixed(2));
  };

  const handleMultiply = () => {
    const result = parseFloat(num1) * parseFloat(num2);
    setResult(result.toFixed(2));
  };

  const handleDivide = () => {
    if (parseFloat(num2) !== 0) {
      const result = parseFloat(num1) / parseFloat(num2);
      setResult(result.toFixed(2));
    } else {
      setResult('No se puede dividir por 0');
    }
  };

  return (
    <div>
      <div className="speech-bubble p-4 rounded-lg bg-blue-400 text-black">
        <h1 className='text-white'>Calculadora de Números Decimales</h1>
        <label>Ingrese número</label>   
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="bg-gray-300 rounded p-2"
        />
        <label>Ingrese número</label>
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="bg-gray-900 rounded p-2"
        />
        <button onClick={handleSum}>Sumar</button>
        <button onClick={handleSubtract}>Restar</button>
        <button onClick={handleMultiply}>Multiplicar</button>
        <button onClick={handleDivide}>Dividir</button>
        <p>Resultado: {result}</p>
      </div>
    </div>
  );
}
