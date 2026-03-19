function App() {
  return (
    /* 1 parent div */
    <div className="w-full bg-[#0a0a0c] selection:bg-red-500 selection:text-white overflow-x-hidden">
      
      {/* 2 Main div*/}
      <div className="relative w-full">
        
        {/* the plain bg image */}
        <img 
          src="/Plain bg of Hypothesis V2 OG.jpg" 
          className="w-full h-auto block" 
          alt="Background"
        />

        {/* 3 the battle img  */}
        <div className="absolute top-[2.5%] left-1/2 -translate-x-1/2 w-[110%] flex justify-center z-10">
          <img 
            src="/Battle of Hypothesis V2 OG.png" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
            alt="The Battle"
          />
          </div>

        {/* 3 The notebook/ ysws sectection */}
        <div className="absolute top-[24%] left-1/2 -translate-x-1/2 w-[90%] z-20">
          <div className="relative w-full h-full">
    
            {/* 4 the stickynotes/arrows img */}
            <img 
              src="/Scraps of Hypothesis V2 OG.png" 
              className="w-[100%] object-cover h-auto drop-shadow-2xl" 
              alt="Notebook"
            />

            {/* 4 da text */}
            <div className="absolute top-[22%] left-[15%] w-[34%]">
              <h2 className="font-['Indie_Flower'] text-[4vw] md:text-[2.5vw] text-blue-900 mb-[2%]">
                YOU SHIP
              </h2>
                <p className="font-['Space_Mono'] text-[2.5vw] md:text-[1.2vw] text-gray-800 leading-tight">
                  Design and complete a research project, and write a concise 1–2 page paper explaining your hypothesis, method, and results.
                </p>
            </div>

          </div>
        </div>
  </div>

      {/* 5. fillout fourm button */}
      <div className="fixed bottom-10 right-10 z-50">
        <button className="bg-red-600 border-2 border-black px-8 py-4 font-black uppercase shadow-[6px_6px_0px_black] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all">
          Initiate RSVP
        </button>
      </div>

    </div>
  );
}

export default App;