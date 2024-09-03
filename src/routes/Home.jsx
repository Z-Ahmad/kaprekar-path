import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedStep from "../components/AnimatedStep";

const Home = () => {
  const [input, setInput] = useState("");
  const [steps, setSteps] = useState([]);

  const kaprekarProcess = (num) => {
    const results = [];
    let current = num;

    while (current !== 6174 && results.length < 7) {
      const digits = current.toString().padStart(4, '0').split('').map(Number);
      const ascending = digits.sort((a, b) => a - b).join('');
      const descending = digits.sort((a, b) => b - a).join('');
      
      current = parseInt(descending) - parseInt(ascending);
      results.push({
        descending,
        ascending,
        result: current.toString().padStart(4, '0'),
        isLast: current === 6174
      });
    }

    return results;
  };

  const handleStart = () => {
    const num = parseInt(input);
    if (isNaN(num) || num < 1 || num > 9999) {
      setSteps(["Please enter a valid four-digit number."]);
    } else {
      setSteps([]); // Reset steps before starting new calculation
      setTimeout(() => {
        setSteps(kaprekarProcess(num));
      }, 100); // Small delay to allow reset animation
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
        layout
        transition={{ duration: 0.3, type: "tween" }}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Kaprekar's Constant Calculator</h1>
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
        <motion.div 
          className="mt-6 text-left flex flex-col items-center"
          layout
        >
          <AnimatePresence>
            {steps.map((step, index) => (
              <AnimatedStep key={index} step={step} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
