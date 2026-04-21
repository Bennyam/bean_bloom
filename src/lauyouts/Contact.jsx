import Button from "../components/Button";

function Contact() {
  return (
    <div id="contact" className="py-12 pb-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col space-y-12 lg:px-0">
        <div className="flex flex-col space-y-3">
          <h3>Stuur een bericht</h3>
          <p className="text-xl text-center opacity-70">
            Heb je vragen of ideëen, we horen het graag.
          </p>
        </div>
        <div className="bg-image flex text-taupe-50 rounded-xl shadow-xl shadow-taupe-950/40">
          <form
            action=""
            className="w-full lg:w-2/3 ml-auto lg:max-w-xl flex flex-col p-6 space-y-4 md:p-8"
          >
            <label htmlFor="">Naam</label>
            <input
              type="text"
              className="py-2 px-4 bg-taupe-100/85 focus:outline-none focus:ring-5 focus:ring-taupe-400 text-taupe-800 rounded-lg"
              placeholder="Jan Smitd"
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="py-2 px-4 bg-taupe-100/85 focus:outline-none focus:ring-5 focus:ring-taupe-400 text-taupe-800 rounded-lg"
              placeholder="jan.smidt@voorbeeld.com"
            />
            <label htmlFor="">Bericht</label>
            <textarea
              name=""
              id=""
              className="h-40 py-2 px-4 bg-taupe-100/85 focus:outline-none focus:ring-5 focus:ring-taupe-400 text-taupe-800 rounded-lg"
              placeholder="Type je bericht..."
            ></textarea>
            <Button
              type="submit"
              btnType="button"
              variant="solidDark"
              xtrClasses="w-full mt-8 self-center px-10 shadow-md shadow-taupe-950/50 hover:-translate-y-1 md:w-auto"
            >
              Verstuur bericht
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
