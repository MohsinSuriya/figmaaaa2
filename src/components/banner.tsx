import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-gray-200 py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="max-w-md text-left space-y-4">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Welcome to Chairy
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="mt-6 px-8 py-3 bg-teal-500 text-white font-medium rounded-md shadow-md hover:bg-teal-600 transition-all">
            Shop Now <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="/banner.png"
            alt="Chair"
            className="w-full max-w-[400px] md:max-w-[584px] h-auto object-contain mx-auto md:mx-0"
          />
        </div>
      </section>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-8">
            <img src="/zapier.png" alt="Zapier" className="h-12 object-contain" />
            <img
              src="/pipedrive.png"
              alt="Pipedrive"
              className="h-12 object-contain"
            />
            <img src="/cib.png" alt="CIB Bank" className="h-12 object-contain" />
            <img src="/zlogo.png" alt="Z" className="h-12 object-contain" />
            <img
              src="/burnt.png"
              alt="Burnt Toast"
              className="h-12 object-contain"
            />
            <img
              src="/panda.png"
              alt="PandaDoc"
              className="h-12 object-contain"
            />
            <img src="/moz.png" alt="Moz" className="h-12 object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
