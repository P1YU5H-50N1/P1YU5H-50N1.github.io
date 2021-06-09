import React from "react";

const AboutPageCTA = () => {
  return (
    <div className="grid pt-8 text-center lg:text-left text-xl lg:pt-16 gap-6 lg:grid-cols-2">
      <div className="lg:mx-0 mx-auto space-y-2">
        Let's Create Your
        <br />
        Next Website
        <br />
        <button className="bg-white max-w-sm focus:outline-none hover:shadow-xl text-xl hover:bg-black text-black hover:text-white py-2 px-6 border-2 border-black hover:border-transparent rounded-lg">
          Reach Out
        </button>
      </div>
      <div className="lg:mx-0 mx-auto space-y-2">
        Discover Entire <br />
        Skill Set
        <br />
        <button className="bg-black focus:outline-none text-xl hover:shadow-xl hover:bg-white text-white hover:text-black py-2 px-6 border-2 border-black hover:border-black rounded-lg">
          Resume
        </button>
      </div>
    </div>
  );
};

export default AboutPageCTA;
