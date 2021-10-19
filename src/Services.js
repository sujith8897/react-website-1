export default function Services(){

    const services = [
        {
          "heading" : "Seamless tax service",
          "descp" : "Stay compliant with Pilot Tax. Built on your books, we’ll prepare and file your federal, state, and local income taxes, as well as your 1099s. Plus, get live reminders and status updates of your filings at your fingertips.",
          "link" : "Get taxes handled →",
          "img" : "tax.svg",
          "idx" : 0
        },
        {
          "heading" : "R&D credit that saves you thousands",
          "descp" : "Worth up to $250,000 per year, the R&D credit could save your business thousands. Claiming it can be complicated and tedious—but we make it simple. We assess your expenses to maximize your credit, prepare documentation to back up your claim with the IRS, and ensure it’s applied correctly.",
          "link" : "Claim your credit →",
          "img" : "money.svg",
          "idx" : 1
        },
        {
          "heading" : "Expert CFO services, customized for you",
          "descp" : "Grow your business with the advanced finance support you need, when you need it. Our extensive CFO Services include annual budgeting, ongoing financial support, pitch assessment, fundraising strategy, and more.",
          "link" : "Get CFO support →",
          "img" : "person.svg",
          "idx" : 2
        }
      ];

    return(
        <div >
        {
            services.map(service => {
              return (
                <div className={ service.idx%2==0 ? "flex flex-wrap md:flex-nowrap py-2" : "flex flex-wrap md:flex-nowrap py-2 flex-row-reverse" }>
                    <div className="md:w-1/2 px-6 md:px-20 flex flex-col  justify-center">
                        <h1 className="text-2xl md:text-4xl tracking-tight font-bold pb-6">{ service.heading }</h1>
                        <p className="">{ service.descp }</p>
                        <a src={ service.link } className="py-10 text-lg text-lg font-semibold italic text-indigo-900">{ service.link }</a>
                    </div>
                    <div className="hidden md:block">
                        <img src={ service.img } style={{ width:"500px" }} />
                    </div>
                </div>
              )
            })
        }
        </div>

    )
}