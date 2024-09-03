# Kaprekar's Path

This React application demonstrates the Kaprekar's Constant process, a mathematical curiosity involving four-digit numbers.

## What is Kaprekar's Constant?

Kaprekar's constant (6174) is reached when you repeat the following process on any four-digit number with at least two different digits:

1. Arrange the digits in descending and then in ascending order to get two four-digit numbers
2. Subtract the smaller number from the bigger number
3. Go to step 1 and repeat

This process always reaches 6174 within 7 steps for any four-digit number except repdigits (e.g., 1111).

## Features

- Input any four-digit number
- Step-by-step visualization of the Kaprekar process
- Animated display of each step
- Information page explaining Kaprekar's Constant

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Technologies Used

- React
- React Router
- Framer Motion for animations
- Tailwind CSS for styling

## Learn More

To learn more about Kaprekar's Constant, visit the About page in the application or check out [Wikipedia's article on Kaprekar's constant](https://en.wikipedia.org/wiki/6174_(number)).