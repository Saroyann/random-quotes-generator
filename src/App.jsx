import React from "react"
import {buddha, diogenes, kurt, karl, marcus, nietzsche, camus, confucius, plato, aristotle } from './assets/author/pic.js'

function App() {


  return (
    <>
      <div className="bg-gradient-to-r from-blue-300 to-violet-400 w-full flex justify-center items-center h-[100vh] text-center">

        {/* quotes box */}
        <div className="w-full rounded-xl h-[400px] bg-white">
          <div className="mx-auto overflow-hidden w-[150px] h-[150px] mt-2">
          <img src={buddha} alt="" />
          </div>
          <div className="text-center mx-auto w-[300px] mt-2">
          <p className="font-medium">However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?</p>
          </div>
          <div className="mt-5 text-right mr-5">
            <div>- Siddharta Gautama</div>
          </div>
            <button className="bg-gradient-to-r w-full p-3 mt-2 rounded-full text-2xl font-medium text-white ">next quote</button>
        </div>

      </div>
    </>
  )
}

export default App
