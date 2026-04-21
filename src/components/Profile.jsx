function Profile({ image, name, info }) {
  return (
    <div className="flex space-x-6">
      <img
        src={image}
        alt=""
        className="w-12 h-12 ring-2 ring-taupe-400 rounded-full object-cover object-top"
      />
      <div className="flex flex-col justify-center space-y-0.5">
        <h5 className="text-base font-bold">{name}</h5>
        <p className="text-xs opacity-60">{info}</p>
      </div>
    </div>
  );
}

export default Profile;
