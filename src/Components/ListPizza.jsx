import { useState, useEffect } from "react";
import { isCartOpen } from "./Navbar";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import CloseIcon from '@mui/icons-material/';
import React from "react";
import { toggleCart } from "./Navbar";
import { style } from "@mui/system";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PreLoader from "./PreLoader";

export let selected = [];

function ListPizza() {
  const [open, setOpen] = React.useState(false);
  const [pizzas, setPizzas] = useState([{}]);
  const [Newpizzas, setNewPizzas] = useState([{}]);
  const [isCustomiseClicked, setisCustomiseClicked] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isClosedClicked, setisClosedClicked] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [Qty, setQty] = useState(1);
  const [VegClicked, setVegClicked] = useState(false);
  const [NonVegClicked, setNonVegClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [alignment, setAlignment] = React.useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  // const [selectedQty, setSelectedQty] = useState("");

  //For Showing in Frontend
  useEffect(() => {

    setIsLoading(true)
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => response.json())
      .then((data) => {setPizzas(data)
      setIsLoading(false)});
  }, []);

  //For Sorting Purpose
  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => response.json())
      .then((data) => setNewPizzas(data));
  }, []);

  useEffect(() => {
    setSelectedSize("Regular");
  }, []);


  useEffect(() => {
    // This code block is executed when the component is mounted and
    // whenever the isCustomiseClicked state changes.

    if (isCustomiseClicked) {
      // If isCustomiseClicked is true, execute the following code:

      const elements = document.querySelectorAll(
        "header, hero, footer, customise,list"
      );
      // Get all elements with tags 'header', 'hero', 'footer', and 'list'
      // using the document.querySelectorAll method and store them in
      // the 'elements' constant.

      elements.forEach((i) => {
        i.style.pointerEvents = "none";
        i.style.filter = "blur(5px) brightness(0.5)";
      });
      // Set the CSS pointer-events property of each element in 'elements'
      // to 'none', which disables mouse events (click, hover, etc.).
    } else {
      const elements = document.querySelectorAll(
        "footer, header, customise, hero, list"
      );
      elements.forEach((el) => {
        el.style.pointerEvents = "auto";
        el.style.filter = "none";
      });
    }
  }, [isCustomiseClicked]);
  // The useEffect hook will only re-run if the value of isCustomiseClicked
  // changes. This is passed as a dependency to the hook.

  const addItem = () => {
    setisCustomiseClicked(true);
  };

  const closePop = () => {
    setisClosedClicked(true);
    setisCustomiseClicked(false);
  };

  const ItemsSelected = () => {
    if (!selectedSize) {
      alert("Please select the size of the pizza.");
    } else {
      setisCustomiseClicked(false);

      selected = [
        ...selected,
        {
          id: selectedPizza.id,
          name: selectedPizza.name,
          description: selectedPizza.description,
          img_url: selectedPizza.img_url,
          isVeg: selectedPizza.isVeg,
          price: selectedPizza.price,
          rating: selectedPizza.rating,
          size: selectedSize,
          toppings: selectedToppings,
          quantity: Qty,
        },
      ];
      // console.log(selected);
      // console.log(selectedPizza);
      // console.log(selectedSize);
      // console.log(selectedToppings);
      // qty = 1;
      // setQty(qty);
      setOpen(true);

      setQty(1);
    }
  };
  const handleDecreaseQty = () => {
    if(Qty > 1 ){
    setQty(Qty - 1);
  }
  };

  const handleIncreaseQty = () => {
    
    setQty(Qty + 1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const OpenCart = () => {
    toggleCart();
  };
  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={OpenCart}>
        VIEW CART
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        {/* <CloseIcon fontSize="small" /> */}
      </IconButton>
    </React.Fragment>
  );

  const Open = Boolean(anchorEl);

  const sortByPrice = () => {
    const sortedPizzas = [...pizzas];

    // Sort the array based on price
    sortedPizzas.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    // Update the state with the sorted array and toggle the sorting order
    setPizzas(sortedPizzas);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByRating = () => {
    setAnchorEl(null);
    const sortedPizzas = [...pizzas].sort((a, b) => b.rating - a.rating);
    setPizzas(sortedPizzas);
  };

  const handleclose = () => {
    setAnchorEl(null);
  };

  const handleclick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortByPrice = () => {
    sortByPrice();
    handleclose();
  };

  const toggleVeg = () => {
    if (VegClicked) {
      setPizzas(Newpizzas);
      setVegClicked(false);
    } else {
      const sortByVegPizzas = [...Newpizzas].filter((item) => {
        return item.isVeg == true;
      });

      setPizzas(sortByVegPizzas);
      setVegClicked(true);
    }
  };

  const toggleNonVeg = () => {
    if (NonVegClicked) {
      setPizzas(Newpizzas);
      setNonVegClicked(false);
    } else {
      const sortByVegPizzas = [...Newpizzas].filter((item) => {
        return item.isVeg == false;
      });

      setPizzas(sortByVegPizzas);
      setNonVegClicked(true);
    }
  };

  if (isLoading) {
    return <PreLoader load={true} />;
  }

  return (
    <>

      <div className="btns flex m-5 ml-28 gap-3">

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          className="gap-3"
        >
          <ToggleButton
            value="web"
            onClick={() => toggleVeg()}
            style={{ color: "black" }}
          >
            🌿 Veg
          </ToggleButton>
          <ToggleButton
            value="android"
            onClick={() => toggleNonVeg()}
            style={{ color: "black" }}
          >
            🍖 NonVeg
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="border-2 flex justify-center items-center">
          <Button
            id="basic-button"
            aria-controls={Open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Open ? "true" : undefined}
            onClick={handleclick}
            className=" border-2"
            style={{ color: "black" }}
          >
            Sort by
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Open}
            onClose={handleclose}
          >
            <MenuItem onClick={handleSortByPrice}>Sort by price</MenuItem>
            <MenuItem onClick={sortByRating}>Sort by rating</MenuItem>
          </Menu>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <section
          className=" text-gray-600  body-font gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
          id="pizza"
        >
          {pizzas.map((pizza, index) => (
            <div
              className="max-w-sm rounded-xl overflow-hidden shadow-lg "
              key={pizza.id}
            >
              <list>
                <img
                  className="w-full h-60"
                  src={pizza.img_url}
                  alt={pizza.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{pizza.name}</div>
                  <p className="text-gray-700 text-base">{pizza.description}</p>
                </div>
                <div className="px-6  pb-2 relative">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    😃
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {pizza.isVeg ? "🌿 " : "🍖 "}
                  </span>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={pizza.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <div className="mt-5 mb-5">
                    <CurrencyRupeeIcon /> {pizza.price}
                  </div>
                  <button
                    class="absolute bottom-0 right-0 mb-4 mr-4 flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={() => {
                      setSelectedPizza(pizza);
                      addItem();
                    }}
                    style={{ backgroundColor: "red", border: "1px" }}
                  >
                    <div class="flex items-center justify-center">
                      <span class="mr-2">Add</span>
                    </div>
                  </button>
                </div>
              </list>
              {isCustomiseClicked && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:h-1/4 sm:w-1/4 md:h-2/4 md:w-1/4 bg-white shadow-lg rounded-lg">
                  <button
                    className="absolute top-0 right-0 m-4 text-2xl font-bold text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={closePop}
                  >
                    &#10005;
                  </button>
                  <div className="text-lg font-bold text-center pt-4">
                    {selectedPizza.name}
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="mr-8">
                      {selectedPizza.size.map((sizeOption, index) => (
                        <div key={sizeOption.title}>
                          <div className="mb-2 font-bold">
                            {sizeOption.title}
                          </div>
                          {sizeOption.items.map((size, index) => (
                            <div key={size.size}>
                              <input
                                defaultChecked={size.size === "Regular"}
                                type="radio"
                                id={`${pizza.id}-${size.size}`}
                                name={`${pizza.id}-size`}
                                value={size.size}
                                onChange={(e) => {
                                  setSelectedSize(e.target.value);
                                }}
                                className="mr-2 appearance-none border border-gray-300 rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent focus:outline-none"
                                required
                              />
                              <label
                                htmlFor={`${pizza.id}-${size.size}`}
                                className="text-gray-700"
                              >
                                {size.size}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div>
                      {selectedPizza.toppings.map((toppingOption, index) => (
                        <div key={toppingOption.title}>
                          <div className="mb-2 font-bold">
                            {toppingOption.title}
                          </div>
                          {toppingOption.items.map((topping, index) => (
                            <div
                              key={topping.name}
                              className="flex items-center mb-2"
                            >
                              <input
                                type="checkbox"
                                id={`${pizza.id}-${topping.name}`}
                                name={`${pizza.id}-topping`}
                                value={topping.name}
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  const toppingName = e.target.value;
                                  setSelectedToppings((prevToppings) => {
                                    if (isChecked) {
                                      return [...prevToppings, toppingName];
                                    } else {
                                      return prevToppings.filter(
                                        (t) => t !== toppingName
                                      );
                                    }
                                  });
                                }}
                                className="mr-2 appearance-none border border-gray-300  w-4 h-4 checked:bg-red-500 checked:border-transparent focus:outline-none"
                              />
                              <label
                                htmlFor={`${pizza.id}-${topping.name}`}
                                className="text-gray-700"
                              >
                                {topping.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                      <div class="qty absolute flex items-center text-2xl py-1 p-3 m-5 ml-12  border rounded cursor-pointer">
                        <div
                          class="minusSign flex justify-center items-center w-8 h-8  hover:bg-gray-200 rounded-l focus:outline-none"
                          onClick={() => handleDecreaseQty()}
                        >
                          -
                        </div>
                        <div class="numberSign mx-2 font-medium">{Qty}</div>
                        <div
                          class="plusSign flex justify-center items-center w-8 h-8  hover:bg-gray-200 rounded-r focus:outline-none"
                          onClick={() => handleIncreaseQty()}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    ))
                  </div>
                  <button
                    className="flex items-center ml-5 mt-5   justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg relative"
                    onClick={() => ItemsSelected(index)}
                    style={{ backgroundColor: "red", border: "1px" }}
                  >
                    <div class="flex items-center pl-1 pr-1 justify-center">
                      <span class="mr-2">Add to Cart</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          ))}
        </section>
        <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Successfully added to Cart"
            action={action}
          />
        </div>
      </div>
    </>
  );
}

export default ListPizza;
