import React, { useState } from 'react';
import styles from './styles.module.scss';

export const Calculator: React.FC = () => {

  const [ result, setResult ] = useState('0');

  const onDigitClick = (digit: string) => {
    const newResult = result === '0' ? digit.toString() : `${result}${digit}`;
    setResult(newResult);
  };

  const onEqualClick = () => {
    setResult(eval(result));
  };

  
  return (<div className={styles.calculator}>
    <div className={styles.resultSection}>{result}</div>
    <div className={styles.digitsGrid}>
        <button onClick={() => onDigitClick('1')} className={styles.digitButton}>1</button>
        <button onClick={() => onDigitClick('2')} className={styles.digitButton}>2</button>
        <button onClick={() => onDigitClick('3')} className={styles.digitButton}>3</button>      
        <button onClick={() => onDigitClick('4')} className={styles.digitButton}>4</button>
        <button onClick={() => onDigitClick('5')} className={styles.digitButton}>5</button>
        <button onClick={() => onDigitClick('6')} className={styles.digitButton}>6</button>      
        <button onClick={() => onDigitClick('7')} className={styles.digitButton}>7</button>
        <button onClick={() => onDigitClick('8')} className={styles.digitButton}>8</button>
        <button onClick={() => onDigitClick('9')} className={styles.digitButton}>9</button>
        <button onClick={() => onDigitClick('0')} className={styles.digitButton}>0</button>
        <button onClick={() => onDigitClick('+')} className={styles.digitButton}>+</button>
        <button onClick={onEqualClick} className={styles.digitButton}>=</button>
    </div>
  </div>);
};

export default Calculator;
