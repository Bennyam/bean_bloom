import ProductCard from "../components/ProductCard";
import { images } from "../js/images.js";

const products = [
  {
    img: images.products.chococinno,
    name: "Chococinno",
    description:
      "Heerlijke Cappucinno met een vleugje ambachtelijke chocolade.",
    price: 3.99,
  },
  {
    img: images.products.appeltaart,
    name: "Appeltaart van het huis",
    description:
      "Huis gemaakte appeltaart met vers geplukte appel uit onze eigen boomgaard bereid met een vleugje kanneel.",
    price: 2.65,
  },
  {
    img: images.products.bananaSplit,
    name: "Banana Split",
    description:
      "Ambachtelijk bananenijs met heerlijke warme chocoladesaus en verse bananen.",
    price: 6.99,
  },
  {
    img: images.products.wafels,
    name: "Brusselse Wafel met ijs",
    description:
      "Vers gebakken Brusselse Wafel met poedersuiker en een bolletje vannile ijs.",
    price: 7.45,
  },
  {
    img: images.products.warmeChoco,
    name: "Warme Chocolademelk",
    description:
      "Heerlijke warme chocolademelk gemaakt met echte Belgische chocolade.",
    price: 3.55,
  },
  {
    img: images.products.koffieCake,
    name: "Koffie met gebak",
    description: "Huis gebrande koffie met gebak naar keuze.",
    price: 7.95,
  },
];

function ProductList() {
  return (
    <section id="products" className="mt-6 py-12 lg:mt-12">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        <h3>Populaire Producten</h3>
        <div className="grid gap-12 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <a
          href="#"
          className="text-2xl text-taupe-800 text-center font-semibold hover:text-taupe-400 hover:underline hover:scale-102 duration-300"
        >
          Bekijk volledig menu
        </a>
      </div>
    </section>
  );
}

export default ProductList;
