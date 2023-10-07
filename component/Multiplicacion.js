import React, { useState, useEffect, useRef } from 'react';
import ImageBuho from './ImageBuho';
import Link from 'next/link';

export default function RandomMultiplicationCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSadModal, setShowSadModal] = useState(false);
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [count, setCount] = useState(0);
  const [starCount, setStarCount] = useState(0);

  const timer = useRef(null);

  useEffect(() => {
    generateRandomMultiplications();
  }, []);

  const generateRandomMultiplications = () => {
    clearTimeout(timer.current);
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 10);
    setNum1(randomNum1);
    setNum2(randomNum2);
    setResult(0);
    setUserAnswer('');
    setIsCorrect(null);
    setShowSadModal(false);

    timer.current = setTimeout(() => {
      setShowTimeoutModal(true);
    }, 10000);

    setCount(count + 1);
  };

  const handleMultiplication = () => {
    clearTimeout(timer.current);
    const multiplicationResult = num1 * num2;
    setResult(multiplicationResult);

    if (parseInt(userAnswer) === multiplicationResult) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
      if (correctCount + 1 >= 3) {
        setShowModal(true);
      }
      setStarCount(starCount + 1);
    } else {
      setIsCorrect(false);
      setShowSadModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCorrectCount(0);
  };

  const closeSadModal = () => {
    setShowSadModal(false);
  };

  const closeTimeoutModal = () => {
    setShowTimeoutModal(false);
    generateRandomMultiplications();
  };

  const resetStarCount = () => {
    setStarCount(0);
  };

  useEffect(() => {
    return () => {
      resetStarCount();
    };
  }, []);

  return (
    <div>
      <div className="count-left text-white ml-4">Multiplicaciones: {count}</div>
      <div className="star-count text-white ml-4">Estrellas: {starCount} ⭐</div>
      <div className="speech-bubble p-4 rounded-lg bg-blue-400 text-black">
        <h1 className='calculadora'>Multiplicación Aleatoria</h1>
          <button className='basic2' onClick={generateRandomMultiplications}>Generar Números Aleatorios</button>
        <div>
          <div className='numer1'>
            <p className='numer2'>{num1}</p>
            <p>x {num2}</p>
          </div>
          <div className=''>
            <input
              className='ingrese'
              type="number"
              placeholder="respuesta"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              />
            {isCorrect === true && <p style={{ color: 'green' }}>¡Respuesta Correcta!</p>}
            {isCorrect === false && <p style={{ color: 'red' }}>Respuesta Incorrecta, Intente de Nuevo.</p>}
          </div>
            <button className='sumar' onClick={handleMultiplication}>Multiplicar</button>
              <p>Resultado: {result}</p>
        </div>
      </div>
      <div>
        <ImageBuho />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className='text-2xl'>¡Has superado el desafío!</h2>
            <div>
                <p>Has respondido correctamente a 3 preguntas.</p>
                <div className="basic">
                    <button className="continuar rounded-lg" onClick={closeModal}>
                      Continuar
                    </button>
                      <Link href="/" className="inicio">
                        Ir al inicio
                      </Link>
                </div>
            </div>
          </div>
        </div>
      )}

      {showSadModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>¡Tienes que estudiar más! 😢</h2>
            <p>Has respondido incorrectamente.</p>
            <button className='estudiar' onClick={closeSadModal}>Cerrar</button>
          </div>
        </div>
      )}

      {showTimeoutModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>¡Se agotó el tiempo! ⌛</h2>
            <p>No respondiste a tiempo.</p>
            <button className='time' onClick={closeTimeoutModal}>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}
