import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="bg-blue-500 p-6 rounded-md shadow-md"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-lg font-semibold">Animated Card</h2>
      <p className="text-white mt-2">This card is animated using Framer Motion.</p>
    </motion.div>
  );
};

function App() {
  return (
    <div className="App flex items-center justify-center h-screen bg-gray-100">
      <AnimatedCard />
    </div>
  );
}

export default App;

