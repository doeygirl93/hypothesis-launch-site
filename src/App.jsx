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
        {/* 0. HERO TITLE (Curved & Cartoonish) */}
<div className="absolute top-[13%] left-1/2 -translate-x-1/2 z-30 w-full max-w-[95vw] pointer-events-none">
  <svg viewBox="0 0 600 200" className="w-full h-auto drop-shadow-[0_8px_0px_rgba(0,0,0,1)]">
    <defs>
      {/* Widened the path from 50-450 to 20-580 so the 'H' and 's' fit */}
      <path id="curve" d="M 20,120 Q 300,60 580,120" fill="transparent" />
    </defs>
    <text className="font-['Permanent_Marker'] uppercase" style={{ letterSpacing: '2px' }}>
      {/* Layer 1: The Thick Black Outline */}
      <textPath 
        href="#curve" 
        startOffset="50%" 
        textAnchor="middle" 
        fill="white" 
        stroke="black" 
        strokeWidth="16" 
        style={{ fontSize: '90px', paintOrder: 'stroke' }}
      >
        Hypothesis
      </textPath>
      {/* Layer 2: The Main White Text */}
      <textPath 
        href="#curve" 
        startOffset="50%" 
        textAnchor="middle" 
        fill="white"
        style={{ fontSize: '90px' }}
      >
        Hypothesis
      </textPath>
    </text>
  </svg>
</div>

        {/* 3 the battle img  */}
        <div className="absolute top-[2.5%] left-1/2 -translate-x-1/2 w-[110%] flex justify-center z-10 ">
          <img 
            src="/Battle of Hypothesis V2 OG.png" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-crosshair" 
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

            {/* 4 da ys text */}
            <div className="absolute top-[22%] left-[15%] w-[34%]">
              <h2 className="font-['Space_Mono'] text-[4.5vw] md:text-[5vw] text-blue-900 mb-[2%]">
                YOU SHIP
              </h2>
                <p className="font-['Indie_Flower'] text-[2.5vm] md:text-[3.3vw] text-gray-800 leading-tight">
                   DESIGN AnD COMPLeTe A ResearCh PrOject, WriTe A 1–2 Page Paper Explaining Your Experiement .
                </p>
            </div>

            {/* 4 ws text */}
            <div className="absolute top-[56%] left-[62%] w-[34%]">
              <h2 className=" font-['Space_Mono'] text-[4.5vw] md:text-[5vw] text-blue-900 mb-[2%]">
                WE SHIP
              </h2>
                <p className="font-['Indie_Flower'] text-[2.5vm] md:text-[3.3vw] text-gray-800 leading-tight">
                  PrizEs LikE NVIDIA Jetson Nano, Raspberry Pi, computing hardware and Online subscriptions ^_^
                </p>
            </div>

          </div>
        </div>
        {/*2 FAQ SECETION*/}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[90%] md:w-[75%] lg:w-[65%] z-20">
          <div className="relative w-full">
            {/* CONTENT */}
            <div className="absolute inset-0 p-[10%] flex flex-col space-y-[4%]">
            <h2 className="font-['Permanent_Marker'] text-4xl md:text-4xl lg:text-6xl text-black text-center">
              FAQ
            </h2>
      
            {/* Ques 1 */}
            <div className="rotate-[-1deg]">
              <p className="font-['Space_Mono'] font-bold text-green-400 text-[3vw] md:text-[2.8vw]">
                When is this starting?
              </p>
              <p className="font-['Space_Mono'] text-white [-webkit-text-stroke-width:0.6px] [-webkit-text-stroke-color:black] text-[2.4vw] md:text-[2.3vw]">
                As soon as possible! We are currently building the website, advertising, and looking for a sponsor. Rsvp to help us start sooner!

              </p>
              </div>

            {/* Ques 2 */}
            <div className="rotate-[1deg]">
              <p className="font-['Space_Mono'] font-bold text-green-400 text-[3vw] md:text-[2.8vw]">
              What if i'm a beginer??
            </p>
            <p className="font-['Space_Mono'] text-white [-webkit-text-stroke-width:0.6px] [-webkit-text-stroke-color:black]  text-[2.4vw] md:text-[2.3vw]">
              We will have Mentors experienced in research and starter guides to help! They're will be plenty of lock in calls to help you start.
            </p>
          </div>
          </div>
        </div>
        </div>

        {/* 2 prizes */}
<div className="absolute top-[82%] left-1/2 -translate-x-1/2 w-full z-20 flex flex-col items-center">
  
  <button className="font-['Permanent_Marker'] text-[4vw] md:text-[3vw] bg-purple-400 border-2 border-black p-1.5 font-black uppercase shadow-[4px_4px_0px_black] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
    Future prizes..
  </button>

  {/* THE STICKERS */}
  <div className="flex flex-row justify-center items-center gap-3 mt-4">
    
    {/* Jetson */}
    <div className="w-[80px] md:w-[200px]  transition-transform hover:scale-110">
      <img 
        src="/JETSONNANO prize sticker.png" 
        className="w-full h-auto drop-shadow-md" 
        alt="Jetson Nano" 
      />
    </div>

    {/* Pi 5 */}
    <div className="w-[80px] md:w-[200px] transition-transform hover:scale-110">
      <img 
        src="/PI5 prize sticker.png" 
        className="w-full h-auto drop-shadow-md" 
        alt="Raspberry Pi 5" 
      />
    </div>

  </div>

</div>
  </div>

      {/* 5. fillout fourm button */}
      <div className="fixed bottom-10 right-10 z-50">
        <button className="bg-red-600 border-2 border-black px-8 py-4 font-black uppercase shadow-[6px_6px_0px_black] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all cursor-pointer">
          Initiate RSVP
        </button>
      </div>

    </div>
  );
}

export default App;