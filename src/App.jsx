import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authorPics, quotes, authors, fromColors, toColors } from './data/Data';

const AnimatedQuote = ({ children, key }) => (
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

const QuoteCard = ({ authorPic, quote, author }) => (
  <>
    <div className="w-[150px] h-[150px] overflow-hidden">
      <img src={authorPic} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="px-4 flex-grow flex items-center justify-center">
      <p className="font-medium">{quote}</p>
    </div>
    <div className="w-full text-right pr-5">
      <div>- {author}</div>
    </div>
  </>
);

const NextQuoteButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-gradient-to-r w-full p-3 rounded-full text-2xl font-medium text-white absolute bottom-14 left-0 border-2 border-white backdrop-blur-xl"
  >
    next quote
  </button>
);

const useQuoteState = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [firstColorIndex, setFirstColorIndex] = useState(0);
  const [secondColorIndex, setSecondColorIndex] = useState(0);

  const updateQuote = () => {
    setQuoteIndex(prevIndex => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      return newIndex === prevIndex ? (newIndex + 1) % quotes.length : newIndex;
    });
  };

  const updateColors = () => {
    setFirstColorIndex(prevIndex => (prevIndex + 1) % fromColors.length);
    setSecondColorIndex(prevIndex => (prevIndex + 1) % toColors.length);
  };

  return {
    quoteIndex,
    firstColorIndex,
    secondColorIndex,
    updateQuote,
    updateColors,
  };
};

function App() {
  const { quoteIndex, firstColorIndex, secondColorIndex, updateQuote, updateColors } = useQuoteState();

  const handleClick = () => {
    updateQuote();
    updateColors();
  };

  return (
    <div className={`bg-gradient-to-r ${fromColors[firstColorIndex]} ${toColors[secondColorIndex]} w-full flex justify-center items-center h-[100vh] text-center relative transition-[background] duration-1000`}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
        className="w-full max-w-md rounded-xl h-[400px] bg-white relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <AnimatedQuote key={quoteIndex}>
            <QuoteCard
              authorPic={authorPics[quoteIndex]}
              quote={quotes[quoteIndex]}
              author={authors[quoteIndex]}
            />
          </AnimatedQuote>
        </AnimatePresence>
      </motion.div>
      <NextQuoteButton onClick={handleClick} />
    </div>
  );
}

export default App;