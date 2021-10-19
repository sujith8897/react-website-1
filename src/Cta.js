export default function Cta(){
    return(
        <div className="flex flex-wrap md:flex-nowrap px-6 md:px-14 bg-indigo-600 text-white p-28">
            <div>
                <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-6">Start Pilot today</h2>
                <p className="mb-10 md:mb-0 w-full text-lg md:w-4/5">Signing up for Pilot is easy. We think once you experience truly stress-free financial processes, you won’t want to go back.</p>
            </div>
            <div className="w-full md:w-3/4">
                <input placeholder="Email" className="w-full md:w-4/5 h-12 rounded border border-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-0 focus:border-transparent "/>
                <br/><br/>
                <button className="bg-gray-900 hover:bg-gray-800 text-white w-full md:w-auto rounded px-10 py-3 text-xl md:text-lg font-semibold md:px-8 md:py-2">Get Started</button>
            </div>
        </div>
    )
}