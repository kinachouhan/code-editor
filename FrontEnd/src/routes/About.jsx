import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaLightbulb, FaUserAstronaut } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router";

export const About = () => {

  const navigate = useNavigate()
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <div className="bg-gray-100 flex flex-col justify-center items-center p-40 gap-5
                      max-md:p-10">
        <h1 className="font-bold text-7xl max-md:text-4xl">About DevSync</h1>
        <p className="text-gray-600 text-2xl text-center max-w-[700px]
                      max-md:text-base">
          Empowering developers to write, share, and collaborate on code seamlessly.
          Our platform brings teams together in real-time.
        </p>
      </div>

      {/* MISSION */}
      <div className="bg-gray-100 flex justify-center items-center py-40 px-10
                      max-md:flex-col max-md:py-20 gap-10">

        {/* ARROW — ABOVE ON MOBILE */}
        <div className="bg-white p-10 rounded-xl transition-transform duration-300 hover:scale-105
                        max-md:order-1">
          <FaRegArrowAltCircleRight className="text-blue-600 text-[600px]
                                              max-md:text-7xl" />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-4 text-xl text-gray-500
                        max-md:text-base max-md:text-center max-md:order-2">
          <h1 className="font-bold text-5xl text-black max-md:text-3xl">
            Our Mission
          </h1>
          <p>
            Our mission is to create a powerful, user-friendly coding platform
            that fosters collaboration and innovation.
          </p>
          <p>
            We believe that great ideas come from collaboration, and DevSync is
            here to facilitate that.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div className="py-30 flex justify-center items-center flex-col">
        <h1 className="p-10 font-bold text-5xl max-md:text-3xl">
          Our Values
        </h1>

        <div className="flex gap-10 max-md:flex-col max-md:px-6">
          <div className="p-8 bg-gray-100 flex flex-col gap-4 rounded-sm items-center">
            <RiTeamFill className="text-purple-700 text-4xl" />
            <p className="font-semibold text-xl">Collaboration</p>
            <p className="text-gray-500 text-center">
              We value teamwork and the collective effort of our users.
            </p>
          </div>

          <div className="p-8 bg-gray-100 flex flex-col gap-4 rounded-sm items-center">
            <FaLightbulb className="text-yellow-700 text-4xl" />
            <p className="font-semibold text-xl">Innovation</p>
            <p className="text-gray-500 text-center">
              We are dedicated to continuous improvement and innovation.
            </p>
          </div>

          <div className="p-8 bg-gray-100 flex flex-col gap-4 rounded-sm items-center">
            <FaUserAstronaut className="text-red-700 text-4xl" />
            <p className="font-semibold text-xl">User-Centric</p>
            <p className="text-gray-500 text-center">
              Our platform is designed with the user in mind.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN */}
      <div className="bg-gray-100 p-40 flex flex-col items-center gap-8
                      max-md:p-10">
        <h1 className="font-bold text-5xl max-md:text-3xl">Join Us</h1>
        <p className="text-xl text-gray-500 text-center max-md:text-base">
          Ready to join a community of passionate developers?
        </p>
        <button onClick={()=>navigate("/")} className="bg-black text-white p-2 px-6 rounded-sm hover:bg-white hover:text-black border">
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
};
