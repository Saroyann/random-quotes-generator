import React from "react"

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-blue-300 to-violet-400 w-full flex justify-center items-center h-[100vh] text-center">

        {/* quotes box */}
        <div className="w-full rounded-xl h-[350px] bg-white">
          <div className="text-center mx-auto w-[300px] mt-20">
          <p className="font-medium">However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?</p>
          </div>
          <div className="mt-16 text-right mr-5">
            <div>- Siddharta Gautama</div>
          </div>
            <button className="bg-gradient-to-r w-full p-3 mt-3 rounded-full text-2xl font-medium text-white ">next quote</button>
        </div>

      </div>
    </>
  )
}

export default App
