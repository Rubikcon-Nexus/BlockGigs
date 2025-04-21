import { FaSearchLocation, FaShieldAlt, FaGlobe } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoBriefcase } from "react-icons/io5";
import { WiMoonAltWaningCrescent3 } from "react-icons/wi";

export default function HowItWorks() {
  const how_it_works = [
    {
      icons: <FaSearchLocation />,
      heading: "Find Talents",
      description: "Search and hire skilled freelancers effortlessly.",
    },
    {
      icons: <FaShieldAlt />,
      heading: "Secure Contracts",
      description: "Securely make payments and manage contracts.",
    },
    {
      icons: <AiOutlineDollarCircle />,
      heading: "Get Paid",
      description: "Track progress and approve completed tasks.",
    },
  ];

  const key_features = [
    {
      icons: <IoBriefcase />,
      heading: "Secure Payments",
      description:
        "Blockchain escrow ensures funds are safe and released on milestone completion..",
    },
    {
      icons: <WiMoonAltWaningCrescent3 />,
      heading: "Transparent Hiring",
      description:
        "Pseudonymous profiles eliminate bias, focusing solely on verified skills and experience..",
    },
    {
      icons: <FaGlobe />,
      heading: "Global Connectivity",
      description:
        "Connect with top tech talents and clients worldwide, breaking through seamless blockchain integration.",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
      {/* How it Works Section */}
      <div className="text-center my-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold">How It Works</h1>
        <p className="text-sm md:text-lg text-gray-700 pt-4 w-[90%] md:w-2xl mx-auto">
          Understand how Blockgigs simplifies the hiring and payment process
          through a clear, step-by-step guide designed to make your experience
          seamless.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-10 w-full max-w-[90%]">
        {how_it_works.map((cardData, index) => (
          <div
            key={index}
            className={`bg-[#F3F3F3] p-6 rounded-lg shadow-lg text-center w-full sm:w-80 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl `}
          >
            {/* <div className="text-3xl text-blue-800">{cardData.icons}</div> */}
            <div className="flex justify-center items-center text-3xl text-blue-800">
              {cardData.icons}
            </div>

            <h3 className="text-lg md:text-xl font-semibold mt-3">
              {cardData.heading}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {cardData.description}
            </p>
          </div>
        ))}
      </div>

      {/* Our Key Features */}
      <div className="text-center my-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold">Our Key Features</h1>
        <p className="text-sm md:text-lg text-gray-700 w-[90%] md:w-2xl pt-4 mx-auto">
          Explore the powerful features that set Blockgigs apart, ensuring
          secure transactions, transparent hiring, and seamless global
          connectivity for both freelancers and clients.
        </p>
      </div>

      <div
        className="flex flex-wrap justify-center items-center gap-6 px-4 w-full max-w-[90%] p-8 rounded-2xl"
        style={{
          backgroundImage: 'url("/images/hero_banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {key_features.map((cardData, index) => (
          <div
            key={index}
            className={`bg-[#F3F3F3] p-6 rounded-lg shadow-lg text-center w-full sm:w-80 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl animate-card-zoom`}
            style={{ animationDelay: `${index * 1.5}s` }}
          >
            {/* <div className="text-3xl text-blue-800">{cardData.icons}</div> */}
            <div className="flex justify-center items-center text-3xl text-blue-800">
              {cardData.icons}
            </div>

            <h3 className="text-lg md:text-xl font-semibold mt-3">
              {cardData.heading}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {cardData.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
