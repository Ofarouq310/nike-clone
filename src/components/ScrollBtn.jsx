import { useState, useEffect } from "react";
import { cheveronRight } from "../assets/icons/index";

export default function ScrollBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`bg-coral-red rounded-full p-1 fixed z-[100] right-10 bottom-10 cursor-pointer transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img
        src={cheveronRight}
        alt="arrow icon"
        className="-rotate-90"
        role="presentation"
      />
    </button>
  );
}
