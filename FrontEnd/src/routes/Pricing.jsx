import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: "$9.99",
      yearlyPrice: "$99.99",
      features: [
        "Up to 5 projects",
        "Basic collaboration tools",
        "10GB storage",
        "Email support",
      ],
      btn: "Get Started",
    },
    {
      name: "Pro",
      monthlyPrice: "$24.99",
      yearlyPrice: "$249.99",
      features: [
        "Unlimited projects",
        "Advance collaboration tools",
        "50GB storage",
        "Priority email & chat support",
        "API access",
      ],
      btn: "Go Pro",
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: [
        "Unlimited everything",
        "24/7 phone support",
        "Dedicated account manager",
        "Customer Integration",
        "On-premise deployment option",
      ],
      btn: "Contact Sales",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-100">
      {/* HERO */}
      <div className="bg-black text-white px-6 py-20 md:px-12 lg:p-40 flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-[700px]">
          Choose the plan that's right for you and start building amazing projects
          with DevSync.
        </p>
      </div>

      {/* TOGGLE */}
      <div className="flex justify-center py-10">
        <label className="inline-flex items-center cursor-pointer gap-4">
          <span className={`text-lg ${!isYearly ? "font-bold" : ""}`}>
            Monthly
          </span>

          <div
            onClick={() => setIsYearly((prev) => !prev)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
              isYearly ? "bg-black" : "bg-gray-400"
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                isYearly ? "translate-x-8" : ""
              }`}
            />
          </div>

          <span className={`text-lg ${isYearly ? "font-bold" : ""}`}>
            Yearly
          </span>
        </label>
      </div>

      {/* PRICING CARDS */}
      <div className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`flex flex-col gap-5 p-6 rounded-xl bg-white shadow-2xl cursor-pointer transition
                ${
                  selectedPlan === plan.name
                    ? "border border-black"
                    : ""
                }
              `}
            >
              <h1 className="text-2xl font-bold text-center">{plan.name}</h1>

              <h1 className="text-3xl font-bold text-center">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-lg text-gray-400 font-normal">
                  {plan.monthlyPrice !== "Custom"
                    ? isYearly
                      ? "/year"
                      : "/month"
                    : ""}
                </span>
              </h1>

              <ul className="flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto py-2 rounded-sm transition ${
                  selectedPlan === plan.name
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {plan.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="px-6 md:px-12 lg:m-40 flex flex-col items-center gap-5 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          Can't find the answer you're looking for? Reach out to our customer
          support team.
        </p>
        <button
          className="bg-black text-white px-6 py-2 rounded-sm"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>

      <Footer />
    </div>
  );
};
