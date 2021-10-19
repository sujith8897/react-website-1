export default function Footer(){
    return(
        <div className="bg-gray-100 p-10">
            <div className="text-xl font-semibold text-gray-700">
                <a className="text-2xl font-bold text-gray-800 dark:text-white  hover:text-gray-700 dark:hover:text-gray-300" href="#">
                    <img src="logo.svg" className="w-30" />
                </a>
            </div>
            <div className="flex flex-wrap md:justify-evenly">
                <div className="p-4">
                    <p className="font-bold text-xl pb-2">Products</p>
                    <p>Bookkeeping</p>
                    <p>CFO Services</p>
                    <p>Tax</p>
                    <p>R&D Credit</p>
                    <p>Pricing</p>
                </div>
                <div className="p-4">
                    <p className="font-bold text-xl pb-2">Solutions</p>
                    <p>Startups</p>
                    <p>Cosnumer Goods & Retail</p>
                    <p>Professional Services</p>
                </div>
                <div className="p-4">
                    <p className="font-bold text-xl pb-2">Company</p>
                    <p>About</p>
                    <p>Careers</p>
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>Media Kit</p>
                </div>
            </div>
            <hr/>
            <div className="py-2 flex flex-col justify-center items-center">
                <h2 className="italic font-semibold">Created By Sujith</h2>
                <div className="flex">
                    <a  href="https://twitter.com/sujithdusa" target="_blank" className="hover:text-white pointer">
                        <img src="twitter.svg" className="mr-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/dusa-sujith/" target="_blank" className="hover:text-white pointer">
                        <img src="linkedin.svg" />
                    </a>
                    


                </div>
            </div>
        </div>
    )
}