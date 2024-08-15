import React from "react"
import quote from './assets/quote.png'

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-blue-300 border-t-violet-400 w-full flex justify-center items-center h-[100vh] text-center">

        {/* quotes box */}
        <div className="w-full rounded-xl h-[300px] bg-white">
          <div className="text-center mx-auto w-[300px] mt-20">
          <p className="font-medium">However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?</p>
          </div>
          <div className="mt-16 text-right mr-5">
            <div>- Siddharta Gautama</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
