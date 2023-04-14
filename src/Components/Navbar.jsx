import React, { useState, useEffect } from "react";
import { selected } from "./ListPizza";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    // Disable scrolling and apply blur effect to the listing pizza page when the cart is open
    if (isCartOpen) {
      document.body.classList.add("cart-open");
      document.querySelector("#root").classList.add("cart-open");

      // Disable click events on elements other than the cart
      const elementsToDisable = document.querySelectorAll(
        "header, hero, footer"
      );
      elementsToDisable.forEach((el) => {
        el.style.pointerEvents = "none";
      });
    } else {
      document.body.classList.remove("cart-open");
      document.querySelector("#root").classList.remove("cart-open");

      // Enable click events on elements
      const elementsToDisable = document.querySelectorAll(
        "header, hero, footer"
      );
      elementsToDisable.forEach((el) => {
        el.style.pointerEvents = "auto";
      });
    }
  }, [isCartOpen]);

  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a href="/" className="mr-5 text-1xl hover:text-gray-900">
              Home
            </a>
            <a href="#pizza" className="mr-5 text-1xl hover:text-gray-900">
              Pizzas
            </a>
            <button
              onClick={toggleCart}
              className="mr-5 hover:text-gray-900 text-1xl"
            >
              Cart
            </button>
            <a href="#footer" className="hover:text-gray-900 text-1xl">
              Bottom
            </a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src="smokeys.png" className="w-32 max-w-200" alt="" />
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={toggleCart}
            >
              Cart
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        className={` Cart fixed top-0 right-0 h-full w-2/3 md:w-2/4 z-50 bg-white shadow-lg transition-transform duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }` } id="cart"
        style={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="border-b-2 m-5 flex gap-48">
          <button
            className="top-0 ml-10 text-3xl m-5 w-1.5"
            onClick={toggleCart}
          >
            x
          </button>

          <div className="heading flex justify-center items-center  ">
            <h1 className=" text-lg sm:text-1xl md:text-3xl font-semibold">
              YOUR CART
            </h1>
          </div>
        </div>

        {/* //card */}
        <div class=" items-center justify-center m-5">
          {selected.map((item)=>(
          <div class="max-w-md md:max-w-2xl px-2 m-1">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
              <div
                class="bg-cover bg-bottom h-56 md:h-auto md:w-56"
                
              ><img src={item.img_url} alt="" /></div>
              <div>
                <div class="p-4 md:p-5">
                  <p class="font-bold text-xl md:text-2xl">
                  </p>
                  <p class="text-gray-700 md:text-lg">
                    {item.name}
                  </p>
                </div>
                <div class="p-4 md:p-5 bg-gray-100">
                  <div class="sm:flex sm:justify-between sm:items-center">
                    <div>
                      <div class="text-lg text-gray-700">
                        <span class="text-gray-900 font-bold"></span> {item.description}
                      </div>
                      <div class="flex items-center">
                        <div class="flex inline-flex -mx-px">
                          <svg
                            class="w-4 h-4 mx-px fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                          >
                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                          </svg>
                          <svg
                            class="w-4 h-4 mx-px fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                          >
                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                          </svg>
                          <svg
                            class="w-4 h-4 mx-px fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                          >
                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                          </svg>
                          <svg
                            class="w-4 h-4 mx-px fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                          >
                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                          </svg>
                          <svg
                            class="w-4 h-4 mx-px fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                          >
                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                          </svg>
                        </div>
                        <div class="text-gray-600 ml-2 text-sm md:text-base mt-1">
                          {item.rating}
                        </div>
                      </div>
                    </div>
                    <div>{item.price}</div>
                    <div>{item.size}</div>
                    <div>{item.toppings}</div>
                    <div>{item.isVeg}</div>
                    <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                      Book now
                    </button>
                  </div>
                  <div class="mt-3 text-gray-600 text-sm md:text-base">
                    *Prices may vary depending on selected date.
                  </div>
                </div>
              </div>
            </div>
          </div>
            ))}
        </div>


      </div>
    </>
  );
};

export default Navbar;
