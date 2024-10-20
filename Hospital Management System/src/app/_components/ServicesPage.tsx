import React from 'react'

export default function Service() {
  return (
    <div>
      <section className="w-full py-20" id="blogs">
                <div className="p-6 md:p-4 mb-5">
                    <h1 className="text-4xl font-semibold mb-5">Our Services</h1>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col items-start w-full md:w-1/3 p-6 md:p-4 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-[#222]  rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                        <img
                            src="/images/about-image.webp" loading="lazy"  alt="service-image"   className="rounded-lg" />
                        <h1 className="text-xl font-medium mt-4">Emergency Care</h1>
                        <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">We provide 24/7 emergency care services to ensure timely medical attention for all patients in critical conditions.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 border border-gray-200 dark:border-gray-600 flex flex-row items-center text-sm gap-2 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out">
                            Read more
                            <i className="ri-arrow-right-up-line ri-lg"></i>

                        </a>
                    </div>
            
                    <div
                        className="flex flex-col items-start w-full md:w-1/3 p-6 md:p-4 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-[#222]  rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                        <img
                            src="/images/surgery.webp" loading="lazy"  alt="service-image"   className="rounded-lg"  />
                        <h1 className="text-xl font-medium mt-4">Surgery</h1>
                        <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">Our state-of-the-art surgery facilities and experienced surgeons offer a wide range of surgical procedures.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 border border-gray-200 dark:border-gray-600 flex flex-row items-center text-sm gap-2 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out">
                            Read more
                            <i className="ri-arrow-right-up-line ri-lg"></i>

                        </a>

                    </div>
            
                    <div
                        className="flex flex-col items-start w-full md:w-1/3 p-6 md:p-4 hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-[#222] rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                        <img
                            src="/images/cardiology.webp" loading="lazy"  alt="service-image"  className="rounded-lg"  />
                        <h1 className="text-xl font-medium mt-4">Cardiology</h1>
                        <p className="text-sm mt-2 dark:text-neutral-300 text-neutral-600">Minimally invasive procedures to treat conditions such as coronary artery disease and heart valve disorders.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 border border-gray-200 dark:border-gray-600 flex flex-row items-center text-sm gap-2 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out">
                            Read more
                            <i className="ri-arrow-right-up-line ri-lg"></i>
                        </a>
                    </div>
                </div> 
            </section>
    </div>
  )
}
