import React from 'react'

export default function AboutProfile() {
  return (
    <section className="w-full py-20 px-6 md:px-4" id="about">
                <h1 className="text-4xl font-semibold">About Us</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Our Hospital Management System is designed to streamline medical processes and provide reliable healthcare management.
          We are committed to delivering the best patient care experience with the help of modern technology.
        </p>
        <div className="flex justify-center">
          <img
            src="/images/about.webp"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
  )
}
