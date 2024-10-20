import React from 'react'

export default function footer() {
  return (
    <div>
      {/* <footer className="flex flex-col-reverse md:gap-0 gap-4 md:flex-row justify-between items-center w-full max-w-6xl border-t border-t-gray-300 py-10">
                <p>
                    &#169; 2023 M Moeed Rana
                </p>
                <div className="flex flex-row gap-2 text-xl">
                    <a href="http://" target="_blank" rel="noopener noreferrer" 
                    className="flex flex-row justify-center items-center w-12 h-12 border-[1px] border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2
                        transition-all ease-in-out duration-300 ">
                        <i className="ri-facebook-line"></i>
                    </a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="flex flex-row justify-center items-center w-12 h-12 border-[1px] border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2
                                        transition-all ease-in-out duration-300 ">
                                              <i className="ri-twitter-line"></i>
                    </a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="flex flex-row justify-center items-center w-12 h-12 border-[1px] border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2
                                        transition-all ease-in-out duration-300 ">     <i className="ri-instagram-line"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mmoeedrana/" target="_blank" rel="noopener noreferrer" className="flex flex-row justify-center items-center w-12 h-12 border-[1px] border-gray-300 dark:border-gray-600 hover:bg-purple-600 bg-gray-200 dark:bg-[#222] rounded-full hover:text-white hover:-translate-y-2
                                            transition-all ease-in-out duration-300 ">    <i className="ri-linkedin-line"></i>
                    </a>
                </div>
            </footer> */}

<footer className=" text-black py-10  border-t border-t-gray-500 " id='footer-color'>
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2024 Hospital Management System. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-black hover:text-gray-400 px-4">Privacy Policy</a>
            <a href="#" className="text-black hover:text-gray-400 px-4">Terms of Service</a>
            <a href="#" className="text-black hover:text-gray-400 px-4">Contact Support</a>
          </div>
          <div className="mt-4">
            <a href="https://www.facebook.com" target="_blank" className="text-black hover:text-gray-400 mx-2">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" className="text-black hover:text-gray-400 mx-2">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" className="text-black hover:text-gray-400 mx-2">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
