export default function HeroSection(){
    return(
        <div className="md:flex md:pt-10 mt-16 justify-around">
            <div className="pt-20 flex  flex-col items-center">
                <div className="px-6 md:px-20">
                    <h1 className="text-5xl  md:text-6xl tracking-tight  font-bold">Get your finances right with <span className=" italic text-indigo-800">Pilot</span></h1>
                    <br/>
                    <p className="text-xl md:w-96 tracking-tight leading-6">Pilot offers the best bookkeeping, tax, and CFO services for growing businesses.</p>
                    <br/>
                    <input placeholder="Email" className="w-full md:w-80 h-12 rounded border border-black focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-0 focus:border-transparent "/>
                    <br/><br/>
                    <button className="bg-indigo-800 hover:bg-indigo-900 text-white w-full md:w-auto rounded px-10 py-3 text-xl md:text-lg font-semibold md:px-8 md:py-2">Get Started</button>
                </div>
            </div>
            <div className="hidden md:block  lg:mr-40 md:bottom-0 flex items-center justify-center ">
                <img src="hero.svg" style={{width:"780px"}} />
            </div>
        </div>

    )
}