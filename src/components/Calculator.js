import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const response = calculate({ total, next, operation }, e.target.innerText);
    setTotal(response.total);
    setNext(response.next);
    setOperation(response.operation);
  };

  return (
    <>
      <div className="display">
        {' '}
        {total}
        {' '}
        {operation}
        {' '}
        {next}
        {' '}
      </div>

      <div className="buttonContainer">
        <div>
          <button type="button" onClick={handleClick}>AC</button>
          <button type="button" onClick={handleClick}>+/-</button>
          <button type="button" onClick={handleClick}>%</button>
          <button type="button" onClick={handleClick}>+</button>
        </div>
        <div>
          <button type="button" onClick={handleClick}>7</button>
          <button type="button" onClick={handleClick}>8</button>
          <button type="button" onClick={handleClick}>9</button>
          <button type="button" onClick={handleClick}>x</button>
        </div>
        <div>
          <button type="button" onClick={handleClick}>4</button>
          <button type="button" onClick={handleClick}>5</button>
          <button type="button" onClick={handleClick}>6</button>
          <button type="button" onClick={handleClick}>-</button>
        </div>
        <div>
          <button type="button" onClick={handleClick}>1</button>
          <button type="button" onClick={handleClick}>2</button>
          <button type="button" onClick={handleClick}>3</button>
          <button type="button" onClick={handleClick}>+</button>
        </div>
        <div>
          <button type="button" className="zero" onClick={handleClick}>0</button>
          <button type="button" onClick={handleClick}>.</button>
          <button type="button" onClick={handleClick}>=</button>
        </div>
      </div>

    </>
  );
};

export default Calculator;
