function FeatureCard({ icon, children }) {
  return (
    <div className="relative w-full flex flex-col p-6 pb-12 space-y-6 rounded-xl text-center bg-taupe-50 shadow-xl shadow-taupe-950/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-taupe-950/60 duration-300 md:w-sm lg:w-1/3">
      <div className="absolute -top-8 left-1/2 -translate-x-8 h-16 w-16 flex items-center justify-center rounded-full bg-taupe-700">
        <svg
          className="bi text-taupe-50"
          width="32"
          height="32"
          fill="currentColor"
        >
          <use href={icon}></use>
        </svg>
      </div>
      {children}
    </div>
  );
}

export default FeatureCard;
