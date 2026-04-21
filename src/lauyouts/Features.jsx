import FeatureCard from "../components/FeatureCard";

function Features() {
  return (
    <section id="features" className="mt-24 py-12 bg-taupe-300">
      <div className="max-w-6xl mx-auto flex flex-col text-taupe-800">
        <h3>Onze Troeven</h3>
        <div className="flex flex-col items-center px-6 space-y-24 lg:flex-row lg:px-0 lg:space-x-12 lg:space-y-0 mt-20">
          <FeatureCard icon="./bootstrap-icons.svg#cup-hot">
            <h5 className="text-lg mt-10">Huisgebrande Koffie</h5>
            <p className="text-left text-taupe-500">
              Ambachtelijk gebrand voor een volle en rijke smaak.
            </p>
          </FeatureCard>

          <FeatureCard icon="./bootstrap-icons.svg#cake">
            <h5 className="text-lg mt-10">Heerlijke Desserts</h5>
            <p className="text-left text-taupe-500">
              Dagvers bereid met de beste ingrediënten.
            </p>
          </FeatureCard>

          <FeatureCard icon="./bootstrap-icons.svg#lamp">
            <h5 className="text-lg mt-10">Gezelligheid</h5>
            <p className="text-left text-taupe-500">
              Geniet van rust en warmte in een sfeervolle omgeving.
            </p>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

export default Features;
