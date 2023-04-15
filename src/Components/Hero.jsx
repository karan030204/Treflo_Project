import React from "react";

const Hero = () => {
  return (
    <>
      <hero className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="heading-title title-font sm:text-5xl text-5xl mb-4 font-extrabold text-gray-900">
              Smokeys : Taste the difference!
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-600">
              "Don't settle for ordinary when you can have extraordinary. Our
              pizzas are made with love, care, and the freshest ingredients to
              provide you with a dining experience unlike any other."
            </p>
            <div className="flex justify-center">
              <a href="#pizza"><button  className="inline-flex text-black bg-transparent border-0 py-2 px-6 focus:outline-none bg-gray-200 shadow-lg rounded text-lg">
                Our Pizzas
              </button></a>
              <a  href="#footer"><button  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none shadow-lg hover:bg-gray-200 rounded text-lg">
                To Bottom
              </button></a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="Group1.png"
            />
          </div>
        </div>
      </hero>
    </>
  );
};

export default Hero;
