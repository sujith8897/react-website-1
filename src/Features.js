export default function Features(){
    return(
        <div className=" mt-32 md:mt-16 px-6 py-10">
            <div className="text-center md:flex md:flex-col md:justify-center md:items-center">
                <h2 className="text-3xl md:text-4xl font-bold leading-8">Bookkeeping with unmatched accuracy</h2>
                <p className="py-6 text-lg md:w-3/5">Run your business with a clear picture of your finances. With Pilot, you get accurate books delivered monthly, on the dot. Our expert team is assisted by powerful software that automatically eliminates common errors.</p>
                <img src="buss1.svg"  style={{width:"700px"}} className="hidden md:block" />
            </div>
            <div className="text-center py-10 md:py-16">
                <h3 className="text-2xl md:text-3xl text-indigo-900 font-bold">Why businesses choose Pilot</h3>
            </div>
            <div className="flex flex-wrap md:flex-nowrap">
                <div className="p-6">
                    <img src="support.svg" className="w-32 py-6"/>
                    <h5 className="text-xl font-semibold">Personal, expert support</h5>
                    <p className="">Get fast, responsive service. Your dedicated finance expert knows your business and books from the ground up.</p>
                </div>
                <div className="p-6">
                    <img src="folder.svg" className="w-40 py-6"/>
                    <h5 className="text-xl font-semibold">Industry-specific reporting</h5>
                    <p>Your monthly statements include custom statements for your industry, like burn reports for startups or inventory management for ecommerce.</p>
                </div>
                <div className="p-6">
                    <img src="business.svg" className="w-32 py-6"/>
                    <h5 className="text-xl font-semibold">Expertise in growing businesses</h5>
                    <p>With accrual basis bookkeeping and advanced financial CFO support when you need it, we’re built to scale with you.</p>
                </div>

            </div>
            <div className="text-center my-10">
                <a href="/" className="text-lg text-lg font-semibold italic text-indigo-900">See Pilot in Action →</a>
            </div>
        </div>
    )
}