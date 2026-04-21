function Footer() {
  return (
    <section id="footer" className="bg-taupe-700 lg:mt-6">
      <div className="container mx-auto py-12 px-6 flex flex-col items-center justify-between space-y-10 text-taupe-50 md:flex-row md:items-start lg:px-0">
        <div className="flex-flex-col space-y-4">
          <div className="flex space-x-2">
            <svg className="bi" width="24" height="24" fill="currentColor">
              <use href="./bootstrap-icons.svg#phone"></use>
            </svg>
            <p>+32 (0) 9 468 299 546</p>
          </div>
          <div className="flex space-x-3">
            <svg className="bi" width="24" height="24" fill="currentColor">
              <use href="./bootstrap-icons.svg#envelope"></use>
            </svg>
            <p>bean-bloom@mail.com</p>
          </div>
          <div className="flex space-x-3">
            <svg className="bi" width="24" height="24" fill="currentColor">
              <use href="./bootstrap-icons.svg#house"></use>
            </svg>
            <div className="flex flex-col space-y-1">
              <p>Beekstraat 47</p>
              <p>9047 Drogenbergh</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <a href="#features" className="hover:text-taupe-400">
            Onze Troeven
          </a>
          <a href="#about" className="hover:text-taupe-400">
            Over Ons
          </a>
          <a href="#products" className="hover:text-taupe-400">
            Populaire Producten
          </a>
          <a href="#reviews" className="hover:text-taupe-400">
            Recenties
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-6">
            <svg
              className="bi hover:scale-120 duration-300 cursor-pointer"
              width="32"
              height="32"
              fill="currentColor"
            >
              <use href="./bootstrap-icons.svg#facebook"></use>
            </svg>
            <svg
              className="bi hover:scale-120 duration-300 cursor-pointer"
              width="32"
              height="32"
              fill="currentColor"
            >
              <use href="./bootstrap-icons.svg#twitter"></use>
            </svg>
            <svg
              className="bi hover:scale-120 duration-300 cursor-pointer"
              width="32"
              height="32"
              fill="currentColor"
            >
              <use href="./bootstrap-icons.svg#instagram"></use>
            </svg>
          </div>
          <p>&copy; Bean & Bloom 2026</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
