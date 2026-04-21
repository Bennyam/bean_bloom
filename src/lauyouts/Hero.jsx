import Button from "../components/Button";
import { images } from "../js/images.js";

function Hero() {
  return (
    <section id="hero" className="mt-16">
      <div className="max-w-6xl mx-auto flex px-6 flex-col md:flex-row md:px-6 xl:px-0">
        <div className="h-60 rounded-xl shadow-xl shadow-black/30 overflow-hidden hover:scale-102 duration-200 md:w-1/3 md:h-auto">
          <img
            src={images.hero.hero}
            alt=""
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="flex items-center justify-center mt-6 p-6 md:w-2/3 md:mt-0">
          <div className="flex flex-col text-center space-y-6">
            <div className="mx-auto">
              <img src={images.hero.logo} alt="" className="h-50" />
            </div>
            <p className="max-w-xl mx-auto text-2xl text-taupe-500">
              Geniet van verse koffie en huisgemaakte lekkernijen in een rustige
              sfeer.
            </p>
            <div className="flex flex-col space-y-6 space-x-4 mt-6 md:flex-row md:mx-auto md:space-y-0">
              <Button
                href="#"
                variant="outlineDark"
                xtrClasses="w-full py-3 shadow-md shadow-black/20 hover:-translate-y-0.5 md:w-auto md:py-1.5"
              >
                Bekijk Onze Producten
              </Button>
              <Button
                href="#"
                variant="solidDark"
                xtrClasses="w-full py-3 shadow-md shadow-black/20 hover:-translate-y-0.5 md:w-auto md:py-1.5"
              >
                Kom Eens Langs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
