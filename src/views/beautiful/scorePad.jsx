import React, { useState, useEffect } from 'react';

const ScorePad = ({ number }) => {
    const [previousNumber, setPreviousNumber] = useState(null);
    const [currentNumber, setCurrentNumber] = useState(number);

    useEffect(() => {
        setPreviousNumber(currentNumber);
        setTimeout(() => {
            setCurrentNumber(number);
        }, 1000)
    }, [number]);

    return (
        <div className="flipping-number">
            <div className="flipper">
                <span className={`flip ${previousNumber !== null ? 'flip-out' : ''}`}>{previousNumber}</span>
                <span className={`flip ${previousNumber !== null ? 'flip-in' : ''}`}>{currentNumber}</span>
            </div>
        </div>
    );
};

export default ScorePad;