import Link from "next/link";

export default function HeroPage() {
  return (
    <div>
     <section className="flex flex-col w-full h-auto min-h-screen justify-center relative px-6 md:px-4">
            
            <div className="flex flex-col-reverse md:flex-row flex-wrap gap-10 md:gap-0">
                <div className="w-full md:w-3/5 flex flex-col justify-center items-start dark:text-white">
                    <h1 id="typewriter" className="text-4xl font-bold"> Our Hospital Management System</h1>
                    <h2 className="text-lg md:text-2xl my-2 md:my-6">"Efficient, Secure, and Scalable Software to Manage Every Aspect of Your Hospital"</h2>
                    <p className="text-sm md:text-base dark:text-neutral-300 text-neutral-600">From patient registration to billing and reporting, our software optimizes workflows, improves patient care, and reduces administrative burden.</p>
                    <a href="https://www.linkedin.com/in/mmoeedrana/" target="_blank"></a>
                    <button aria-label="download"
                        className="mt-10 flex flex-row items-center gap-2 border border-gray-400 dark:border-gray-600 py-4 px-8 hover:border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all ease-in-out duration-300 text-2xl">
                        Appointment Now
                        <i className="ri-arrow-right-up-line ri-xl"></i>

                    </button>
                </div>
                <div className="w-full md:w-2/5 flex flex-row justify-center items-center">
                    <img className="w-2/4 md:w-3/4 rounded-full mr-20"
                        src="/images/about.webp"/>
                
                    </div>
            </div>
        
        
        </section>

{/* {/* <section id="hero-color" className=" text-white text-center py-20 mt-16" >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Hospital Management System</h1>
          <p className="text-lg mb-6">Efficient, Reliable, and Comprehensive Healthcare Solutions</p>
          <a href="#contact" className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200">
            Contact Us
          </a>
        </div>
      </section> */}
    </div>
  )
}
