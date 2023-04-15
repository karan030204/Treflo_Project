import React from "react";

const OurServices = () => {
  return (
    <>
    <service className="">
      <h1
        id="ourServices"
        className="flex justify-center items-center text-4xl sm:text-5xl md:text-6xl  font-bold "
      >
        Our Services
      </h1>

      <div className="" >
        <div class="flex justify-left items-left">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6 border-2 rounded-lg border-orange-100 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="pizza1.png"
              />
            </div>
            <h2 class="text-3xl font-medium title-font text-gray-900 mt-5 text-center">
              Shooting Stars
            </h2>
            <p class="text-lg leading-relaxed mt-2 text-center">
              Description goes here
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6 border-2 rounded-lg border-orange-100 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="pizza2.png"
              />
            </div>
            <h2 class="text-3xl font-medium title-font text-gray-900 mt-5 text-center">
              Shooting Stars
            </h2>
            <p class="text-lg leading-relaxed mt-2 text-center">
              Description goes here
            </p>
          </div>
        </div>

        </div>

        <div class="flex justify-end items-end">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6 border-2 rounded-lg border-orange-100 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="pizza3.png"
              />
            </div>
            <h2 class="text-3xl font-medium title-font text-gray-900 mt-5 text-center">
              Shooting Stars
            </h2>
            <p class="text-lg leading-relaxed mt-2 text-center">
              Description goes here
            </p>
          </div>
        </div>
        

      <section class="text-gray-600 body-font gap-5">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap sm:-m-4  -mx-4 -mb-10 -mt-4  "></div>
        </div>
      </section>
      </service>
    </>
  );
};

export default OurServices;
