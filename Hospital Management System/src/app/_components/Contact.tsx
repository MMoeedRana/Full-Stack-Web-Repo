import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="w-full py-20" id="contact">
                <div className="p-6 md:p-4">
                    <h1 className="text-4xl font-semibold mb-5">Contact</h1>
                    <p className="dark:text-neutral-300 text-neutral-600">
                        I would love to hear from you. Whether you have a question about my services, want to discuss a potential project, or simply want to say hello, don't hesitate to get in touch. I am here to help and excited to start a conversation.
                    </p>
                </div>
                <div className="flex flex-col-reverse md:flex-row flex-wrap">
                    <div className="w-full md:w-1/2 flex flex-col flex-wrap justify-center gap-4">
                        <div className="w-full md:w-2/3 rounded-xl p-6 flex flex-col bg- gap-4">
                            <i className="ri-mail-line ri-xl text-purple-600"></i>
                            <p>example01@email.com</p>
                        </div>
                        <div className="w-full md:w-2/3 rounded-xl p-6 flex flex-col bg- gap-4">
                            <i className="ri-phone-line ri-xl text-purple-600"></i>
                            <p>+92-3226788129</p>
                        </div>
                        <div className="w-full md:w-2/3 rounded-xl p-6 flex flex-col bg- gap-4">
                            <i className="ri-map-pin-line ri-xl text-purple-600"></i>
                            <p>Lahore - Pakistan.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4 w-full md:w-1/2 p-6 md:p-10">
                        <h2 className="font-medium text-xl">Send me a Message</h2>
                        <input type="email" name="name" id="email" 
                        className="cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6 text-gray-900 
                                        placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Your Name" />
                        <input type="email" name="email" id="email"      className="cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6 text-gray-900 
                                        placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
                   
                            placeholder="Your Email" />
            
                       <textarea 
                         rows = '3'
                         name="message" 
                         id="message"
                         className="cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6 text-gray-900 
                         placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
                         placeholder="Your Message">
                       </textarea>

                     <button className="flex flex-row items-center gap-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-lg" aria-label="Send">
                            Send
                            <i className="ri-send-plane-2-line"></i>
                        </button>
                    </div>
                </div>
            
            </section>
    </div>
  )
}
