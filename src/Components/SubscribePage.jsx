import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$5.99/month",
    features: ["720p Resolution", "Watch on 1 Screen", "Ads Supported"],
    button: "Get Basic",
    bgColor: "bg-gray-800",
    textColor: "text-gray-300",
    borderColor: "border-gray-600",
  },
  {
    name: "Standard",
    price: "$9.99/month",
    features: [
      "1080p Full HD",
      "Watch on 2 Screens",
      "No Ads",
      "Download Available",
    ],
    button: "Get Standard",
    bgColor: "bg-blue-800",
    textColor: "text-white",
    borderColor: "border-blue-500",
  },
  {
    name: "Premium",
    price: "$14.99/month",
    features: [
      "4K Ultra HD",
      "Watch on 4 Screens",
      "No Ads",
      "Download Available",
      "Dolby Atmos Sound",
    ],
    button: "Get Premium",
    bgColor: "bg-yellow-600",
    textColor: "text-white",
    borderColor: "border-yellow-400",
  },
];

const SubscribePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-10">Choose Your Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 ${plan.bgColor} ${plan.textColor} border-4 ${plan.borderColor}`}
          >
            <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
            <p className="text-center text-xl font-semibold mb-6">
              {plan.price}
            </p>

            <ul className="mb-6 space-y-3 text-center">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-lg">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-3 rounded-lg bg-gray-200 text-gray-900 font-semibold text-lg hover:bg-gray-300 transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribePage;
