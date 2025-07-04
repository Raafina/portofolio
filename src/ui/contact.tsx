export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-16 md:pt-24 pb-16 md:pb-32  dark:bg-dark lg:h-fit flex items-center justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-4">
              Contact Me
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300">
              For questions, suggestions, or criticism, please message me.
            </p>
          </div>
        </div>
        <form id="contactForm">
          <div className="w-full lg:w-2/3 mx-auto">
            <div className="w-full px-4 mb-6">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="w-full px-4 mb-6">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary h-32"></textarea>
            </div>

            <div className="w-full px-4">
              <button
                type="submit"
                className="w-full text-base font-semibold rounded-full text-white bg-primary py-3 px-8 hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">
                Send Message
              </button>
            </div>

            <div
              id="formMessage"
              className="text-center mt-4 text-base font-semibold dark:text-white text-dark"></div>
          </div>
        </form>
      </div>
    </section>
  );
}
