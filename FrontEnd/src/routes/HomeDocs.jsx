import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { RiSlideshowView } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { useNavigate } from "react-router";

export const HomeDocs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-5">
        <h1 className="text-4xl font-bold text-gray-900">
          Getting Started with DevSync
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          DevSync is an online code editor that allows you to write and execute
          HTML, CSS, and JavaScript in real-time.
        </p>

        <ol className="space-y-2 text-gray-600">
          <li>1. Visit <span className="font-semibold text-gray-900">DevSync</span></li>
          <li>2. You’ll see editors for HTML, CSS, and JavaScript</li>
          <li>3. Start coding in any panel</li>
          <li>4. Preview updates automatically</li>
          <li>5. Use Run to refresh manually</li>
        </ol>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20" id="features" >
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

        <div className="grid sm:grid-cols-2 gap-8"  >
          {[
            {
              icon: (
                <>
                  <FaChevronLeft />
                  <FaChevronRight />
                </>
              ),
              title: "Multi-Language Support",
              desc: "Write and execute HTML, CSS, and JavaScript in one place",
            },
            {
              icon: <FiPlay />,
              title: "Instant Execution",
              desc: "Run code instantly and see results in real-time",
            },
            {
              icon: <RiSlideshowView />,
              title: "Responsive Preview",
              desc: "Test responsive layouts using the live preview",
            },
            {
              icon: <MdOutlineDarkMode />,
              title: "Dark Mode",
              desc: "Switch between light and dark themes easily",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center space-y-3"
            >
              <div className="text-3xl flex justify-center gap-1">{f.icon}</div>
              <h3 className="font-semibold text-xl">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guide */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8" id="usage" >
        <h2 className="text-4xl font-bold text-center mb-8">Usage Guide</h2>

        {[
          ["Writing Code", "Use the editor panels to write HTML, CSS, and JavaScript."],
          ["Previewing Code", "Preview updates automatically as you type."],
          ["External Resources", "Include external CSS or JS using link/script tags."],
          ["Themes", "Toggle light and dark mode anytime."],
        ].map(([title, desc], i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm space-y-2"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8" id="faq" >
        <h2 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        {[
          ["Can I save my projects?", "Saving projects is coming soon."],
          ["Can I collaborate?", "Collaboration features are under development."],
          ["Offline usage?", "DevSync requires an internet connection."],
          ["Keyboard shortcuts?", "More shortcuts will be added in future updates."],
        ].map(([q, a], i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm space-y-2"
          >
            <h3 className="font-semibold text-lg">Q: {q}</h3>
            <p className="text-gray-600">A: {a}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 DevSync. All rights reserved.</p>
        <div className="flex gap-6 mt-3 sm:mt-0">
          <button onClick={() => navigate("/")} className="hover:text-black">
            Visit DevSync
          </button>
          <button className="bg-black text-white px-4 py-1 rounded-sm">
            Feedback
          </button>
        </div>
      </footer>
    </div>
  );
};
