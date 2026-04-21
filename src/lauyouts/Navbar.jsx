import { useState } from "react";
import Button from "../components/Button.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function openHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="sticky z-40 top-0 bg-taupe-800/80 backdrop-blur-sm text-taupe-50 shadow-md shadow-taupe-950/30">
        <div className="container mx-auto py-3 px-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Bean & Bloom</h1>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#features" className="hover:text-taupe-300 font-semibold">
              Onze Troeven
            </a>
            <a href="#about" className="hover:text-taupe-300 font-semibold">
              Over Ons
            </a>
            <a href="#products" className="hover:text-taupe-300 font-semibold">
              Poppulaire Producten
            </a>
            <a href="#reviews" className="hover:text-taupe-300 font-semibold">
              Recenties
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Button href="#contact" variant="outlineLight">
              Contact
            </Button>
            <Button href="#footer" variant="solidDark">
              Kom langs
            </Button>
          </div>

          <button
            className={`${isOpen ? "open" : ""} hamburger lg:hidden`}
            onClick={openHandler}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-0 z-20 bg-taupe-800/80 backdrop-blur-lg h-screen duration-500 lg:hidden`}
      >
        <div className="max-w-sm mx-auto px-20 mt-40 flex flex-col space-y-4 text-taupe-50 text-center text-xl">
          <a
            href="#features"
            className="hover:text-taupe-400"
            onClick={openHandler}
          >
            Onze Troeven
          </a>
          <a
            href="#about"
            className="hover:text-taupe-400"
            onClick={openHandler}
          >
            Over ons
          </a>
          <a
            href="#products"
            className="hover:text-taupe-400"
            onClick={openHandler}
          >
            Populaire Producten
          </a>
          <a
            href="#reviews"
            className="hover:text-taupe-400"
            onClick={openHandler}
          >
            Recenties
          </a>
          <div className="h-1 bg-taupe-400 mt-2"></div>
          <div className="flex flex-col space-y-3 mt-2">
            <Button
              href="#contact"
              variant="outlineLight"
              onClick={openHandler}
            >
              Contact
            </Button>
            <Button href="#footer" variant="solidDark" onClick={openHandler}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
