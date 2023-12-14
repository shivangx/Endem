// Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [dateTime, setDateTime] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        setDateTime(now.toLocaleString());
    };

    return (
        <div className="calculator">
            <h2>Calculator</h2>
            <input
                type="text"
                placeholder="Enter an expression"
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={calculateResult}>=</button>
            <span>{result}</span>
            <button onClick={getCurrentDateTime}>Get Date & Time</button>
            <span>{dateTime}</span>
        </div>
    );
};

export default Calculator;
