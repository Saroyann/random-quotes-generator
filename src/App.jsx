import React, { useState } from "react";
import { buddha, diogenes, kurt, karl, marcus, nietzsche, camus, confucius, plato, aristotle } from './assets/author/pic.js';
import { motion, AnimatePresence } from "framer-motion";

const Animated = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex flex-col items-center justify-between pt-2 pb-16"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [click, setClick] = useState(0);
  const [firstColor, setFirstColor] = useState(0)
  const [secondColor, setSecondColor] = useState(0)

  const firstColorHandler = () => {
    setFirstColor((prevColor) => (prevColor + 1) % fromColor.length);
  }
  const secondColorHandler = () => {
    setSecondColor((prevColor) => (prevColor + 1) % toColor.length);
  }

  const authorPic = [buddha, diogenes, kurt, karl, marcus, nietzsche, camus, confucius, plato, aristotle];

  const quotes = [
    'However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?',
    "Simplicity is the ultimate wealth.",
    "Music is the mirror of a fractured soul.",
    "Change begins when workers realize their own worth.",
    "Inner peace is the strongest fortress against life's storms.",
    "Challenges are nourishment for the soul that thirsts for greatness.",
    "In life's absurdity, we find the freedom to create meaning.",
    "True wisdom begins with knowing oneself.",
    "Truth hides behind the shadows of our perception.",
    "Happiness is the result of actions in harmony with virtue."
  ];

  const author = ['Buddha', 'Diogenes', 'Kurt Cobain', 'Karl Marx', 'Marcus Aurelius', 'Friedrich Nietzsche', 'Albert Camus', 'Confucius', 'Plato', 'Aristoteles'];

  const fromColor = [
    'from-[#FF6B6B]',
    'from-[#F7DC6F]',
    'from-[#E74C3C]',
    'from-[#9B59B6]',
    'from-[#34495E]',
    'from-[#1ABC9C]',
    'from-[#D35400]',
    'from-[#8E44AD]',
    'from-[#2C3E50]',
    'from-[#16A085]'
  ]
  const toColor = [
    'to-[#4ECDC4]',
    'to-[#3498DB]',
    'to-[#2ECC71]',
    'to-[#F1C40F]',
    'to-[#ECF0F1]',
    'to-[#E67E22]',
    'to-[#3498DB]',
    'to-[#2ECC71]',
    'to-[#F39C12]',
    'to-[#E74C3C]'
  ]

  const clickHandler = () => {
    setClick(prevClick => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      return newIndex === prevClick ? (newIndex + 1) % quotes.length : newIndex;
    });
  };

  const handleClick = () => {
    clickHandler();
    firstColorHandler();
    secondColorHandler();
  };

  return (
    <div className={`bg-gradient-to-r ${fromColor[firstColor]} ${toColor[secondColor]} w-full flex justify-center items-center h-[100vh] text-center relative`}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
        className="w-full max-w-md rounded-xl h-[400px] bg-white relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <Animated key={click}>
            <div className="w-[150px] h-[150px] overflow-hidden">
              <img src={authorPic[click]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="px-4 flex-grow flex items-center justify-center">
              <p className="font-medium">{quotes[click]}</p>
            </div>
            <div className="w-full text-right pr-5">
              <div>- {author[click]}</div>
            </div>
          </Animated>
        </AnimatePresence>
      </motion.div>
      <button
        onClick={handleClick}
        className="bg-gradient-to-r w-full p-3 rounded-full text-2xl font-medium text-white absolute bottom-14 left-0 border-2 border-white backdrop-blur-xl"
      >
        next quote {firstColor}
      </button>
    </div>
  );
}

export default App;