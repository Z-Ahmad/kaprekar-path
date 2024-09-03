import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [steps, setSteps] = useState([]);

  const kaprekarProcess = (num) => {
    const results = [];
    let current = num;

    while (current !== 6174) {
      if (current === 0) {
        return ['Please enter a number with at least two different digits.'];
      }

      const digits = current.toString().padStart(4, '0').split('').map(Number);
      const ascending = digits.sort((a, b) => a - b).join('');
      const descending = digits.sort((a, b) => b - a).join('');
      
      current = parseInt(descending) - parseInt(ascending);
      results.push(`${descending} - ${ascending} = ${current}`);

      if (results.length > 7) {
        results.push('Process exceeded 7 steps. Please check your input.');
        break;
      }
    }

    return results;
  };

  const handleStart = () => {
    const num = parseInt(input);
    if (isNaN(num) || num < 1 || num > 9999) {
      setSteps(['Please enter a valid four-digit number.']);
    } else {
      setSteps(kaprekarProcess(num));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a four-digit number"
          maxLength={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleStart}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Start
        </button>
        <div className="mt-6 text-left">
          {steps.map((step, index) => (
            <p key={index} className="mb-1">{step}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
