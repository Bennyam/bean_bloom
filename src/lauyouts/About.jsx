import Button from "../components/Button";
import Profile from "../components/Profile";
import { images } from "../js/images.js";

function About() {
  return (
    <section id="about" className="mt-12 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col space-y-12 lg:px-0">
        <h3>Over Bean & Bloom</h3>
        <div className="flex flex-col-reverse bg-taupe-700 rounded-xl overflow-hidden shadow-xl shadow-taupe-950/30 lg:flex-row">
          <div className="w-full flex flex-col justify-center p-6 space-y-6 text-taupe-50 lg:w-2/3 lg:p-12">
            <h5 className="text-xl font-bold">Hoe het allemaal begon.</h5>
            <p className="text-base text-taupe-400">
              Koffie branden is steeds mijn favoriete hobby geweest. Om de
              mensen van mijn heerlijke koffie te kunnen laten proeven kwam al
              gauw het idee een koffie bar te starten. Samen met mijn vrouw die
              heel houd van bakken en pattisserie zijn we op korte tijd
              uitgegroeid tot een gezellige en sfeervolle koffie bar waar we
              elke dag klaar staan met heerlijke koffie en verrukkelijke
              versnaperingen.
            </p>
            <div className="max-w-xl flex flex-col space-y-8 justify-between mt-3 md:flex-row md:space-y-0">
              <Profile
                image={images.profiles.profile1}
                name="Christian Verzele"
                info="Zaakvoerder Bean & Bloom"
              />

              <Profile
                image={images.profiles.profile2}
                name="Sabine Beekmans"
                info="Medezaakvoerder Bean & Bloom"
              />
            </div>
            <Button
              variant="solidDark"
              xtrClasses="w-full mt-5 py-3 text-center shadow-md shadow-taupe-950/50 hover:-translate-y-1 md:self-center md:px-10 md:w-auto md:py-1.5"
            >
              Ontdek Onze Locatie
            </Button>
          </div>
          <div className="w-full h-70 lg:w-1/3 lg:h-auto">
            <img
              src={images.about}
              alt=""
              className="object-cover object-center w-full h-full hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
