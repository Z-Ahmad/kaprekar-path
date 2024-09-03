import React from "react";
import { motion } from "framer-motion";

const AnimatedStep = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.5 }} // Delay for each step
      className="mb-2 text-center" // Center the text
    >
      {step.descending} - {step.ascending} ={' '}
      {step.isLast ? <strong>{step.result}</strong> : step.result}
    </motion.div>
  );
};

export default AnimatedStep;