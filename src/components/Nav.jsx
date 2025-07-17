import nikeLogo from "../assets/images/header-logo.svg";
import hamburgerMenu from "../assets/icons/hamburger.svg";
import { useState, useEffect } from "react";

export default function Nav() {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => setHamburger(prevState => !prevState);
  const closeHamburger = () => setHamburger(false);

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHamburger(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full absolute z-12 padding-x">
      <nav className="flex items-center justify-between gap-1.5 py-8 max-container">
        <div className="flex items-center">
          <img src={nikeLogo} alt="Nike logo" className="w-auto h-8" />
        </div>

        <ul className="flex list-none justify-between text-slate-700 font-normal space-x-10 text-lg max-md:hidden">
          <li><a href="#home" className="hover:text-orange-500">Home</a></li>
          <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
          <li><a href="#products" className="hover:text-orange-500">Products</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact Us</a></li>
        </ul>

        <div
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md md:hidden"
          onClick={toggleHamburger}
          aria-label="Toggle navigation menu"
        >
          <img src={hamburgerMenu} alt="Open navigation menu" className="w-7 h-7" />
        </div>

        {hamburger && (
          <div className="fixed inset-0 z-50 flex items-center bg-white justify-center px-8 py-6 h-dvh">
            <button
              onClick={closeHamburger}
              className="absolute top-2 right-4 text-4xl text-slate-500 hover:text-black cursor-pointer"
              aria-label="Close navigation menu"
            >
              &times;
            </button>
            <ul className="flex flex-col list-none justify-between text-slate-700 font-medium gap-10 text-xl">
              <li><a href="#home" className="hover:text-orange-500" onClick={closeHamburger}>Home</a></li>
              <li><a href="#about" className="hover:text-orange-500" onClick={closeHamburger}>About Us</a></li>
              <li><a href="#products" className="hover:text-orange-500" onClick={closeHamburger}>Products</a></li>
              <li><a href="#contact" className="hover:text-orange-500" onClick={closeHamburger}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
