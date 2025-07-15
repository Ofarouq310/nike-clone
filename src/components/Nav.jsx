import nikeLogo from "../assets/images/header-logo.svg";
import hamburgerMenu from "../assets/icons/hamburger.svg";

export default function Nav() {
  return (
    <header className="w-full absolute z-10 padding-x">
      <nav className="flex items-center justify-between gap-1.5 py-8 max-container">
        <div className="flex items-center">
          <img src={nikeLogo} alt="Nike logo" />
        </div>

        <ul className="flex list-none justify-between text-slate-700 font-normal space-x-10 text-lg max-md:hidden">
          <li><a href="#home" className="hover:text-orange-500">Home</a></li>
          <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
          <li><a href="#products" className="hover:text-orange-500">Products</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact Us</a></li>
        </ul>

        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md md:hidden">
          <img src={hamburgerMenu} alt="hamburger menu" className="w-7 h-7" />
        </div>
      </nav>
    </header>
  );
}
