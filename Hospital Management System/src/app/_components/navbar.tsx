import Link from "next/link";

export default function NavBar() {

  return (
    <nav className="fixed backdrop-blur-md bg-white dark:bg-[#121212] bg-opacity-60 w-full flex flex-row justify-center z-20">
      <div className="flex flex-row justify-between items-center w-[72rem] p-4 ">
        <div className="flex dark:text-white">
          <img src="/images/logo.jpeg" alt="" className="w-20"/>
        </div>
        <div className="flex flex-row justify-end md:justify-between w-full md:w-auto gap-4 md:gap-10">
          <ul className="hidden md:flex flex-row items-center text-sm md:text-base gap-4 md:gap-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121212] dark:text-white rounded-full px-6 md:px-10 w-auto h-12 md:h-16">
            <li>
              <a href="/" rel="noopener noreferrer" className="hover:text-purple-600">Home</a>
            </li>
            <li>
              <a href="/about" rel="noopener noreferrer" className="hover:text-purple-600">About</a>
            </li>
            <li>
              <a href="/service" rel="noopener noreferrer" className="hover:text-purple-600">Services</a>
            </li>
            <li>
              <a href="/contact" rel="noopener noreferrer" className="hover:text-purple-600">Contact</a>
            </li>
          </ul>
          
          </div>
        </div>
    </nav>
  );
}
