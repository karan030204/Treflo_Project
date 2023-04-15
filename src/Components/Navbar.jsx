import React, { useState, useEffect } from "react";
import { selected } from "./ListPizza";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ChevronDownIcon } from "@heroicons/react/solid";

export let toggleCart = null;
export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSelected, setSelected] = useState([]);

  useEffect(()=>{
      setSelected(selected);
  },[selected])



  
  // const [select, setSelected] = useState();
  // const [selectedItem, setSelectedItem] = useState([]);
  toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleDelete = (itemId) => {
    const newSelected = selected.filter((item) => item.id !== itemId);
    setSelected(newSelected);
  };

  useEffect(() => {
    // Disable scrolling and apply blur effect to the listing pizza page when the cart is open
    if (isCartOpen) {
      document.body.classList.add("cart-open");
      document.querySelector("#root").classList.add("cart-open");

      // Disable click events on elements other than the cart
      const elementsToDisable = document.querySelectorAll(
        "header, hero, footer, list"
      );
      elementsToDisable.forEach((el) => {
        el.style.pointerEvents = "none";
      });
    } else {
      document.body.classList.remove("cart-open");
      document.querySelector("#root").classList.remove("cart-open");

      // Enable click events on elements
      const elementsToDisable = document.querySelectorAll(
        "header, hero, footer, list"
      );
      elementsToDisable.forEach((el) => {
        el.style.pointerEvents = "auto";
      });
    }
  }, [isCartOpen]);

  return (
    <>
      <header className="text-gray-600 body-font -mb-20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a href="/" className="mr-5 text-1xl hover:text-gray-900">
              Home
            </a>
            <a href="#ourServices " className="hover:text-gray-900 text-1xl mr-5">
              Bottom
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
        className={`Cart fixed top-0 right-0 h-full w-2/3 md:w-2/4 z-50 bg-white shadow-lg transition-transform duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="cart"
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
            <h1 className="text-lg sm:text-1xl md:text-3xl font-semibold">
              YOUR CART
            </h1>
          </div>
        </div>

        <div className="items-center justify-center m-5">
          {isSelected.map((item) => (
            <div className="max-w-md md:max-w-2xl px-2 m-1" key={item.id}>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                <div className="bg-cover bg-bottom h-56 md:h-auto md:w-56">
                  <img src={item.img_url} alt={item.name} />
                </div>
                <div>
                  <div className="p-4 md:p-5">
                    <p className="font-bold text-xl md:text-2xl">{item.name}</p>
                    <p className="text-gray-700 text-base md:text-lg">{`$${item.price}`}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <button
                          className="text-gray-500 focus:outline-none focus:text-gray-600"
                          onClick={() => {
                            item.quantity -= 1; // decrement quantity
                            setSelected([...selected]); // update selected array
                          }}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-gray-700 mx-2">
                          {item.quantity}
                        </span>
                        <button
                          className="text-gray-500 focus:outline-none focus:text-gray-600"
                          onClick={() => {
                            item.quantity += 1; // increment quantity
                            setSelected([...selected]); // update selected array
                          }}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </button>
                      </div>
                      <button
                        className="text-gray-500 focus:outline-none focus:text-gray-600"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-details ">
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className="text-gray-900 w-6 h-6" />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="bg-gray-200 py-4 px-6  border-b border-gray-400 flex justify-between items-center cursor-pointer hover:bg-gray-300 transition duration-300"
                    >
                      <Typography className="text-gray-900 font-semibold text-lg">
                        More Details...
                      </Typography>
                      <ChevronDownIcon className="text-gray-900 w-6 h-6" />
                    </AccordionSummary>
                    <AccordionDetails className="bg-white py-4 px-6  border border-gray-400">
                      <Typography className="text-gray-900 font-medium text-base mb-4">
                        Size: {item.size}
                      </Typography>
                      <Typography className="text-gray-700 font-light text-base">
                        Toppings Added: {item.toppings.join(", ")}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
          {isSelected.length === 0 && (
            <div className="mt-10">
              <p className="text-center text-gray-500 font-bold">
                Your cart is empty
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end items-center m-5">
          <p className="mr-5 text-lg md:text-xl font-semibold">
            {`Total : `}
            <CurrencyRupeeIcon />
            {`  ${isSelected.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}`}
          </p>
          <button
            className="text-white bg-green-600 py-2 px-4 md:py-3 md:px-6 rounded-full font-semibold text-lg md:text-xl focus:outline-none hover:bg-green-700"
            onClick={() => alert("Thank you for your purchase!")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
