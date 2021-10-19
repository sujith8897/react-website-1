export default function Testimonials(){

    const logos = [
        "logo-1.svg","logo-2.svg","logo-3.svg","logo-4.svg","logo-5.svg","logo-6.svg","logo-7.svg",
        "logo-8.svg","logo-9.svg"
    ];

    return(
        <div className="flex flex-col items-center justify-center my-20 px-6">
            <h4 className="text-2xl md:text-3xl tracking-tight font-bold mb-6">Working with the best financial tools in the business</h4>
            <p className="mb-6">Your favorite tools integrate with Pilot so that everything is kept effortlessly up to date.</p>
            <div className="flex flex-wrap  justify-evenly">
                {
                    logos.map(logo =>{
                        return(
                            <div className=" p-8 ">
                                <img src={logo}/>
                            </div>  
                        )
                    })
                }
              

            </div>
        </div>
    )
}