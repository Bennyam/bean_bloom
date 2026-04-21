function Button({ href, variant, xtrClasses, children, btnType, onClick }) {
  const style = {
    solidDark:
      "py-1.5 px-3 rounded-full text-taupe-50 bg-taupe-900 border-2 border-taupe-900 font-bold hover:bg-taupe-400 hover:border-taupe-400 hover:text-taupe-800 duration-200 cursor-pointer",
    solidLight:
      "py-1.5 px-3 rounded-full text-taupe-800 bg-taupe-400 border-2 border-taupe-400 font-bold hover:bg-taupe-900 hover:border-taupe-900 hover:text-taupe-50 duration-200 cursor-pointer",
    outlineLight:
      "py-1.5 px-3 rounded-full text-taupe-50 border-2 border-taupe-50 font-bold hover:border-taupe-400 hover:text-taupe-400 duration-200 cursor-pointer",
    outlineDark:
      "py-1.5 px-3 rounded-full text-taupe-900 border-2 border-taupe-900 font-bold hover:border-taupe-500 hover:text-taupe-500 duration-200 cursor-pointer",
  };

  if (btnType === "button") {
    return (
      <button onClick={onClick} className={`${style[variant]} ${xtrClasses}`}>
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      className={`${style[variant]} ${xtrClasses}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Button;
