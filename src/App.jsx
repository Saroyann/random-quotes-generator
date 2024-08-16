import React, { useState } from "react"
import { buddha, diogenes, kurt, karl, marcus, nietzsche, camus, confucius, plato, aristotle } from './assets/author/pic.js'
import { motion } from "framer-motion";

function App() {

  const [click, setClick] = useState(0);

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
  ]

  const author = ['Buddha', 'Diogenes', 'Kurt Cobain', 'Karl Marx', 'Marcus Aurelius', 'Friedrich Nietzsche', 'Albert Camus', 'Confucius', 'Plato', 'Aristoteles']

  const clickHandler = () => {
    setClick(prevClick => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      return newIndex === prevClick ? (newIndex + 1) % quotes.length : newIndex;
    });
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-300 to-violet-400 w-full flex justify-center items-center h-[100vh] text-center">

        {/* quotes box */}
        <motion.div
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 }
        }}
        initial = 'hidden'
        animate = 'visible'
        transition = {{duration: 1, delay: 0.2, ease: 'easeInOut'}}
        className="w-full rounded-xl h-[400px] bg-white relative">
          <div className="mx-auto overflow-hidden w-[150px] h-[150px] mt-2">
            <img src={authorPic[click]} alt="" />
          </div>
          <div className="text-center mx-auto w-[300px] absolute bottom-[8rem] left-7">
            <p className="font-medium">{quotes[click]}</p>
          </div>
          <div className="mt-5 text-right mr-5 absolute bottom-24 right-0">
            <div>- {author[click]}</div>
          </div>
          <button onClick={() => clickHandler()} className="bg-gradient-to-r w-full p-3 rounded-full text-2xl font-medium text-white absolute bottom-5 left-0">next quote</button>
        </motion.div>

      </div>
    </>
  )
}

export default App
