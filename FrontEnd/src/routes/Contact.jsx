import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <div className="flex bg-gray-100 p-10 md:p-40 justify-center items-center flex-col gap-5">
        <h1 className="font-bold text-3xl md:text-5xl">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-[700px] text-center">
          We Would love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us.
        </p>
      </div>

      {/* FORM */}
      <div className="my-10">
        <div className="flex justify-center items-center p-6">
          <h1 className="font-bold text-3xl md:text-5xl">Contact Form</h1>
        </div>

        <div className="flex justify-center items-center px-4">
          <form className="flex flex-col gap-5 w-full max-w-xl">
            <input className="border border-gray-200 p-3 rounded-lg w-full" placeholder="Your Name" />
            <input className="border border-gray-200 p-3 rounded-lg w-full" placeholder="Your Email" />
            <textarea className="border border-gray-200 p-3 rounded-lg w-full" placeholder="Your Message" />
            <button className="bg-black rounded-lg p-2 text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* INFO */}
      <div className="bg-gray-100 p-10 md:p-40 flex gap-4 justify-center items-center flex-col text-center">
        <h1 className="font-bold text-3xl md:text-5xl">Contact Information</h1>
        <h1 className="text-lg md:text-xl">Email: <span className="underline">support@devsync.com</span></h1>
        <h1 className="text-lg md:text-xl">Phone: <span className="underline">+919755997066</span></h1>
        <h1 className="text-lg md:text-xl">Address: Noida Sector-126, Uttar-Pradesh, 23000</h1>
      </div>

      <Footer />
    </div>
  );
};
