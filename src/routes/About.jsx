import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">About Kaprekar's Constant</h1>
        <p className="mb-4">
          Kaprekar's constant is a mathematical curiosity. For any four-digit number with at least two different digits, repeating the following process results
          in 6174:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Arrange the digits in descending and ascending order</li>
          <li>Subtract the smaller number from the bigger number</li>
          <li>Repeat the process with the resulting number</li>
        </ol>
        <p className="mb-4">This process always reaches 6174 within 7 or fewer steps.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Back to Calculator
        </Link>
      </div>
    </div>
  );
};

export default About;
