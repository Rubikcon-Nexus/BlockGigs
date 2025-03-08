import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/3dcube.png";
import client from "../../assets/client.png";
import talent from "../../assets/talent.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Persona = () => {
  const navigate = useNavigate();
  const [selectedPersona, setSelectedPersona] = useState("");

  // Handle selection for the user
  const handleSelect = (persona) => {
    setSelectedPersona(persona);
    localStorage.setItem("persona", persona);
  };

  // Handle navigation within pages
  const handleNext = () => {
    if (selectedPersona) {
      navigate(`/${selectedPersona}form`); // Dynamically navigate to the selected page
    }
  };

  return (
    <div className="w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center">
      <div className="w-[103px] h-[37px] flex justify-between items-center gap-2">
        <img src={logo} alt="Blockgigs logo" />
        <h1 className="font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo">
          Blockgigs
        </h1>
      </div>

      <div className="flex items-center justify-center mt-[6rem]">
        <form className="w-[300px] h-[400px] lg:w-[409px] lg:h-[458px] rounded-xl bg-[#ffffff] flex flex-col items-center">
          <div className="w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem]">
            <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
              Persona
            </h2>
            <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
              Are you signing up as a Client or Talent?
            </p>
          </div>

          {/* Selection Buttons */}
          <div className="w-[270px] h-[90px] lg:w-[334px] lg:h-[190px] gap-[22px] flex flex-col items-center mt-[1.5rem]">
            {/* Client Button */}
            <button
              onClick={() => handleSelect("client")}
              type="button"
              className={`w-[280px] h-[68px] lg:w-[334px] lg:h-[84px] rounded-[12px] gap-[16px] border border-[#D3D3D3] pt-[12px] pb-[12px] pl-[16px] flex justify-between items-center cursor-pointer transition-colors
                                ${
                                  selectedPersona === "client"
                                    ? "bg-[#deecff]"
                                    : "hover:bg-[#f2f7ff]"
                                }`}
            >
              <div className="w-[24px] h-[24px] rounded-[6px] bg-[#b7e8ff] flex items-center justify-center mt-[-1.7rem]">
                <img src={client} alt="client logo" />
              </div>
              <div className="w-[238px] h-[60px] flex flex-col items-start mr-[2rem]">
                <h5 className="font-montserrat font-medium text-[14px] leading-[24px] text-[#272954]">
                  Client
                </h5>
                <span className="font-montserrat font-normal text-[12px] leading-3 lg:leading-[18px] text-[#605f62] text-nowrap">
                  Looking to procure talents to get
                </span>
                <span className="font-montserrat font-normal text-[12px] leading-3 lg:leading-[18px] text-[#605f62]">
                  projects done efficiently
                </span>
              </div>
            </button>

            {/* Talent Button */}
            <button
              onClick={() => handleSelect("talent")}
              type="button"
              className={`w-[280px] h-[68px] lg:w-[334px] lg:h-[84px] rounded-[12px] gap-[16px] border border-[#D3D3D3] pt-[12px] pb-[12px] pl-[16px] flex justify-between items-center cursor-pointer transition-colors
                                ${
                                  selectedPersona === "talent"
                                    ? "bg-[#deecff]"
                                    : "hover:bg-[#f2f7ff]"
                                }`}
            >
              <div className="w-[24px] h-[24px] rounded-[6px] bg-[#b7e8ff] flex items-center justify-center mt-[-1.7rem]">
                <img src={talent} alt="talent logo" />
              </div>
              <div className="w-[238px] h-[60px] flex flex-col items-start mr-[2rem]">
                <h5 className="font-montserrat font-medium text-[14px] leading-[24px] text-[#272954]">
                  Talent
                </h5>
                <span className="font-montserrat font-normal text-[12px] leading-[18px] text-[#605f62] text-nowrap">
                  Seeking to secure gigs/job to deliver
                </span>
                <span className="font-montserrat font-normal text-[12px] leading-[18px] text-[#605f62]">
                  {" "}
                  specialized services
                </span>
              </div>
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!selectedPersona} // Disable button if no selection
            type="button"
            className={`relative w-[250px] lg:w-[334px] h-[48px] rounded-[8px] gap-[12px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] cursor-pointer font-montserrat font-medium text-base leading-6 text-white mt-[6rem] lg:mt-[2rem]
                            ${
                              selectedPersona
                                ? "bg-[#2F66F6] hover:bg-[#1e4bbd]"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
          >
            Next{" "}
            <FaArrowRightLong className="absolute right-0.5 lg:right-2 mr-[5.3rem] lg:mr-[7.5rem] mt-[-1.1rem]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Persona;
