import { useNavigate } from "react-router";

 export const HeaderDocs = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigate = useNavigate()



  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center">
            D
          </div>
          <h1 onClick={()=> navigate("/")} className="font-bold text-xl">DevSync Docs</h1>
        </div>

        {/* Navigation */}
        <ul className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-600">
          <li
            className="cursor-pointer hover:text-black"
            onClick={() => scrollToSection("features")}
          >
            Features
          </li>
          <li
            className="cursor-pointer hover:text-black"
            onClick={() => scrollToSection("usage")}
          >
            Usage Guide
          </li>
          <li
            className="cursor-pointer hover:text-black"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </li>
        </ul>

      </div>
    </header>
  );
};
