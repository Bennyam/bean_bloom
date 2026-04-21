import Review from "../components/Review";
import { images } from "../js/images.js";

function Testimonials() {
  return (
    <section id="reviews" className="py-12 pb-24 bg-taupe-200">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        <h3>Tevreden Klanten</h3>
        <div className="grid gap-6 px-6 lg:grid-cols-4 lg:grid-rows-2 lg:px-0">
          <div className="lg:col-span-2 bg-taupe-600 p-6 text-taupe-50 rounded-xl shadow-lg shadow-taupe-950/50 hover:scale-102 duration-300">
            <Review
              image={images.profiles.profile4}
              name="Ben Claeys"
              location="Gent (Oost-Vlaanderen)"
            >
              <div className="flex flex-col space-y-3">
                <h5 className="text-lg">Super gezellig</h5>
                <p className="text-sm opacity-60 italic">
                  "De sfeer hier is echt super gezellig. Ik kom hier nu
                  weekelijks voor een heerlijk kopje koffie."
                </p>
              </div>
              <p className="text-lg mt-auto">⭐️⭐️⭐️⭐️⭐️</p>
            </Review>
          </div>
          <div className=" bg-taupe-300 p-6 rounded-xl shadow-lg shadow-taupe-950/40 hover:scale-102 duration-300">
            <Review
              image={images.profiles.profile3}
              name="Lucy Van Daele"
              location="Brugge (Oost-Vlaanderen)"
            >
              <div className="flex flex-col space-y-3">
                <h5 className="text-lg">Zalige Appeltaart</h5>
                <p className="text-sm opacity-60 italic">
                  "Ik ben verzot op de zelfgemaakte appeltaart, echt heerlijk."
                </p>
              </div>
              <p className="text-lg mt-auto">⭐️⭐️⭐️⭐️</p>
            </Review>
          </div>
          <div className="lg:row-span-2 bg-taupe-500 text-taupe-50 p-6 rounded-xl shadow-lg shadow-taupe-950/50 hover:scale-102 duration-300">
            <Review
              image={images.profiles.profile5}
              name="Ines Geers"
              location="Hasselt (Limburg)"
            >
              <div className="flex-col space-y-3">
                <h5 className="text-lg">Beste koffie ooit</h5>
                <p className="text-sm opacity-60 italic">
                  "Ik dacht dat ik al de beste koffie van het land gedronken
                  had, tot ik hier kwam. De huisgebrande koffie is echt top en
                  de zelfgemaakte taarten zijn ook overheerlijk. Ik kom hier nu
                  2 jaar en de kwaliteit is nog steeds van de bovenste plank. De
                  beste koffie en gebak ooit."
                </p>
              </div>
              <p className="text-lg mt-auto">⭐️⭐️⭐️⭐️⭐️</p>
            </Review>
          </div>
          <div className=" bg-taupe-300 p-6 rounded-xl shadow-lg shadow-taupe-950/40 hover:scale-102 duration-300">
            <Review
              image={images.profiles.profile6}
              name="Lindsey Bral"
              location="Gent (Oost-Vlaanderen)"
            >
              <div className="flex flex-col space-y-3">
                <h5 className="text-lg">Vriendelijke mensen</h5>
                <p className="text-sm opacity-60 italic">
                  "Als je echt klantvriendelijkheid wil dan moet je zeker hier
                  zijn. Super vriendelijke mensen en top bediening."
                </p>
              </div>
              <p className="text-lg mt-auto">⭐️⭐️⭐️⭐️</p>
            </Review>
          </div>
          <div className="lg:col-span-2 bg-taupe-700 text-taupe-50 p-6 rounded-xl shadow-lg shadow-taupe-950/50 hover:scale-102 duration-300">
            <Review
              image={images.profiles.profile7}
              name="Chris De Vent"
              location="Hamme (Oost-Vlaanderen)"
            >
              <div className="flex flex-col space-y-3">
                <h5 className="text-lg">Prachtige Omgeving</h5>
                <p className="text-sm opacity-60 italic">
                  "Van een toplocatie gesproken, de omgeving hier is echt
                  geweldig. Je kan hier zalig wandelen of fietsen en nadien
                  genieten van een heerlijke kop koffie."
                </p>
              </div>
              <p className="text-lg mt-auto">⭐️⭐️⭐️⭐️</p>
            </Review>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
