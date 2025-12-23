import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiSteamdb } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { MdCloudQueue } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";

export const Home = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <div className="bg-gray-100 flex flex-col justify-center items-center w-full min-h-[40rem] gap-5 px-6 text-center">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
          Welcome to DevSync
        </h1>
        <p className="text-gray-400 text-base md:text-xl max-w-3xl">
          Your powerful, collaborative code editor in the cloud. Write, share, and execute code in real time.
        </p>
        <div className="flex  sm:flex-row gap-4">
          <button
            onClick={isAuthenticated ? () => navigate("/code") : () => navigate("/signup")}
            className="bg-black border border-black text-white p-3 rounded-sm hover:bg-white hover:text-black"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/docs")}
            className="bg-white border border-black p-3 rounded-sm hover:bg-black hover:text-white"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="p-5 mx-auto my-16 flex flex-col">
        <div className="flex items-center justify-center p-10">
          <h1 className="text-4xl md:text-5xl font-bold">Key Features</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: <><FaChevronLeft /><FaChevronRight /></>, title: "Multiple Languages", desc: "Support for various programming languages and syntax highlighting." },
            { icon: <SiSteamdb />, title: "Real-time Collaboration", desc: "Work together with your team in real-time, see live changes." },
            { icon: <TbBrandGithub />, title: "Version Control", desc: "Integrated version control to track changes and manage your code." },
            { icon: <AiOutlineThunderbolt />, title: "Fast Execution", desc: "Run your code quickly with our optimized execution engine." },
            { icon: <RiTeamLine />, title: "Team Management", desc: "Easily manage permissions and collaborate with your team." },
            { icon: <MdCloudQueue />, title: "Cloud Based", desc: "Access your projects anywhere with cloud storage." }
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 p-5 flex flex-col gap-3 rounded-lg items-center transition-transform duration-300 hover:scale-105 text-center">
              <div className="text-3xl">{item.icon}</div>
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-gray-100 px-6 py-20">
        <div className="flex justify-center pb-10">
          <h1 className="text-4xl md:text-5xl font-bold">How It Works</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center text-center">
          {["Create a Project", "Write Your Code", "Collaborate and Execute"].map((title, i) => (
            <div key={i} className="flex flex-col gap-3 items-center max-w-xs">
              <h1 className="font-bold text-xl">{i + 1}</h1>
              <h1 className="font-bold text-xl">{title}</h1>
              <p className="text-gray-400">
                {i === 0 && "Start by creating a new project or importing an existing one."}
                {i === 1 && "Use our powerful editor to write and edit your code with ease."}
                {i === 2 && "Invite team members, collaborate in real-time, and run your code."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[700px] mx-auto my-20 flex flex-col gap-3 items-center text-center px-6">
        <h1 className="font-bold text-4xl md:text-5xl">Ready to start coding?</h1>
        <p className="text-gray-400 text-base md:text-xl">
          Join thousands of developers who trust DevSync for their coding needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-5 w-full justify-center">
          <input className="border border-gray-300 p-2 w-full sm:w-80 rounded-sm" placeholder="Enter your email" />
          <button className="bg-black border border-black text-white p-2 px-4 rounded-sm hover:bg-white hover:text-black">
            Sign Up
          </button>
        </div>
        <p className="text-sm text-gray-400">
          By signing up, you agree to our <span className="underline">Terms & Conditions</span>
        </p>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-gray-100 px-6 py-20">
        <div className="flex justify-center pb-10">
          <h1 className="font-bold text-4xl md:text-5xl">What Our Users Say</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center">
          {[
            ["Payal Verma", "Full Stack Developer"],
            ["Khushi Nagar", "Data Scientist"],
            ["Kina Chouhan", "Student"]
          ].map((user, i) => (
            <div key={i} className="flex flex-col items-center border border-gray-200 p-4 gap-2 rounded-lg hover:scale-105 transition text-center max-w-sm">
              <p className="text-gray-400">
                "DevSync has completely improved the way I work with teams."
              </p>
              <h1 className="font-bold text-xl">{user[0]}</h1>
              <h1 className="text-gray-400">{user[1]}</h1>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
