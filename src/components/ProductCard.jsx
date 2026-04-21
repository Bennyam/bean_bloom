function ProductCard({ product }) {
  return (
    <div className="max-w-sm flex flex-col bg-taupe-300 rounded-xl overflow-hidden shadow-xl shadow-taupe-950/30">
      <div>
        <img
          src={product.img}
          alt=""
          className="w-full h-65 object-cover object-bottom hover:scale-105 duration-300"
        />
      </div>
      <div className="p-8 h-full flex flex-col space-y-4">
        <h5 className="text-lg font-bold text-taupe-800">{product.name}</h5>
        <p className="text-sm text-taupe-500">{product.description}</p>
        <p className="text-2xl font-semibold mt-auto">{`€ ${product.price.toFixed(2)}`}</p>
      </div>
    </div>
  );
}

export default ProductCard;
