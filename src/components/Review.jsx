import Profile from "./Profile";

function Review({ image, name, location, children }) {
  return (
    <div className="h-full flex flex-col space-y-6">
      <Profile name={name} info={location} image={image} />
      {children}
    </div>
  );
}

export default Review;
