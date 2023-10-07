import React, { useState, useEffect, useRef } from 'react';
import ImageBuho from './ImageBuho';
import Link from 'next/link';

export default function RandomDivisionCalculator() {
  const initialDivisionState = {
    num1: 0,
    num2: 0,
    result: 0,
  };

  const [division, setDivision] = useState(initialDivisionState);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSadModal, setShowSadModal] = useState(false);
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [count, setCount] = useState(0);
  const [starCount, setStarCount] = useState(0);

  const timer = useRef(null);

  const generateRandomDivisions = () => {
    clearTimeout(timer.current);
    const randomNum1 = Math.floor(Math.random() * 10) + 1; // Avoid division by zero
    const randomNum2 = Math.floor(Math.random() * 10) + 1; // Avoid division by zero

    setDivision({
      num1: randomNum1,
      num2: randomNum2,
      result: 0,
    });

    setUserAnswer('');
    setIsCorrect(null);
    setShowSadModal(false);

    timer.current = setTimeout(() => {
      setShowTimeoutModal(true);
    }, 10000);

    setCount(count + 1);
  };

  useEffect(() => {
    generateRandomDivisions();
  }, []);

  const handleDivision = () => {
    clearTimeout(timer.current);
    const divisionResult = division.num1 / division.num2;

    setDivision({
      ...division,
      result: divisionResult,
    });

    if (parseFloat(userAnswer) === divisionResult) {
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
    generateRandomDivisions();
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
      <div className="count-left text-white ml-4">Divisiones: {count}</div>
      <div className="star-count text-white ml-4">Estrellas: {starCount} ⭐</div>
      <div className="speech-bubble p-4 rounded-lg bg-blue-400 text-black">
        <h1 className="calculadora">Calculadora de División Aleatoria</h1>
        <button className="basic2" onClick={generateRandomDivisions}>
          Generar Números Aleatorios
        </button>
        <div>
          <div className="numer1">
            <p className="numer2">
              {division.num1} ÷ {division.num2}
            </p>
          </div>
          <div className="">
            <input
              className="ingrese"
              type="number"
              placeholder="respuesta"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            {isCorrect === true && <p style={{ color: 'green' }}>¡Respuesta Correcta!</p>}
            {isCorrect === false && <p style={{ color: 'red' }}>Respuesta Incorrecta, Intente de Nuevo.</p>}
          </div>
          <button className="dividir" onClick={handleDivision}>
            Dividir
          </button>
          <p>Resultado: {division.result.toFixed(2)}</p>
        </div>
      </div>
      <div>
        <ImageBuho />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-2xl">¡Has superado el desafío!</h2>
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
            <button className="estudiar" onClick={closeSadModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {showTimeoutModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>¡Se agotó el tiempo! ⌛</h2>
            <p>No respondiste a tiempo.</p>
            <button className="time" onClick={closeTimeoutModal}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
