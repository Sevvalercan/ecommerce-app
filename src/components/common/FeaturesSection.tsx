import { FaTruck, FaHeadset, FaDollarSign } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
      icon: FaTruck,
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
      icon: FaHeadset,
    },
    {
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
      icon: FaDollarSign,
    },
  ];

  return (
    <section className="py-24 mb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center md:space-x-6 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-3"
            >
              {/* Icon with double circle */}
              <div className="relative flex items-center justify-center w-20 h-20">
                <div className="absolute w-20 h-20 rounded-full bg-gray-300"></div>{" "}
                {/* Outer circle */}
                <div className="absolute w-14 h-14 rounded-full bg-black flex items-center justify-center text-white text-2xl">
                  <Icon />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-black">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
