import { useState, useEffect } from "react";

export let selected = [];

function ListPizza() {
  const [pizzas, setPizzas] = useState([{}]);
  const [isCustomiseClicked, setisCustomiseClicked] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isClosedClicked, setisClosedClicked] = useState(false);

  


  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  const addItem = () => {
    setisCustomiseClicked(true);
  };

  const closePop = () =>{
    setisClosedClicked(true);
    setisCustomiseClicked(false);
  }

  const ItemsSelected = () =>{

     selected = [...selected, { id : selectedPizza.id , name : selectedPizza.name, description : selectedPizza.description , img_url : selectedPizza.img_url, isVeg : selectedPizza.isVeg, price : selectedPizza.price, rating : selectedPizza.rating, size: selectedSize, toppings : selectedToppings}]
    console.log(selected);
    // console.log(selectedPizza);
    // console.log(selectedSize);
    // console.log(selectedToppings);
  }

  return (
    <div class="flex justify-center">
      <section
        className=" text-gray-600  body-font gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
        id="pizza"
      >
        {pizzas.map((pizza) => (
          <div
            className="max-w-sm rounded-xl overflow-hidden shadow-lg "
            key={pizza.id}
          >
            <img className="w-full h-60" src={pizza.img_url} alt={pizza.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{pizza.name}</div>
              <p className="text-gray-700 text-base">{pizza.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                😃
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {pizza.isVeg ? "🌿 " : "🍖 "}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {pizza.rating} Rating
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {pizza.price} INR
              </span>
              <button
                class="flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg relative"
                onClick={() => {
                  
                  setSelectedPizza(pizza);
                  addItem();
                }}
              >
                <div class="flex items-center justify-center">
                  <span class="mr-2">Customise</span>
                  <span class="text-lg absolute top-0 right-0 mt-0 mr-2">
                    +
                  </span>
                </div>
              </button>
              {isCustomiseClicked && (
                <div className="fixed top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 sm:h-1/4 sm:w-1/4 md:h-2/4 md:w-1/4 bg-white">
                  <button
                    className="top-0 ml-10 text-3xl m-5 w-1.5"
                    onClick={closePop}
                  >
                    x
                  </button>
                  <div className="text-lg font-bold text-center pt-4">
                    {selectedPizza.name}
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="mr-4">
                      {selectedPizza.size.map((sizeOption) => (
                        <div key={sizeOption.title}>
                          <div className="mb-2 font-bold">
                            {sizeOption.title}
                          </div>
                          {sizeOption.items.map((size) => (
                            <div key={size.size}>
                              <input
                                type="radio"
                                id={`${pizza.id}-${size.size}`}
                                name={`${pizza.id}-size`}
                                value={size.size}
                                onChange={(e) => {
                                  setSelectedSize(e.target.value);
                                }}
                              />
                              <label htmlFor={`${pizza.id}-${size.size}`}>
                                {size.size}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div>
                      {selectedPizza.toppings.map((toppingOption) => (
                        <div key={toppingOption.title}>
                          <div className="mb-2 font-bold">
                            {toppingOption.title}
                          </div>
                          {toppingOption.items.map((topping) => (
                            <div key={topping.name}>
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
                              />
                              <label htmlFor={`${pizza.id}-${topping.name}`}>
                                {topping.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    ))
                  </div>
                  <button class="flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg relative" onClick={()=>ItemsSelected()}>
                    <div class="flex items-center justify-center">
                      <span class="mr-2">Add</span>
                      <span class="text-lg absolute top-0 right-0 mt-0 mr-2">
                        +
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        <div>{isCustomiseClicked && <a href="#cart"><button href="#cart" >View Cart</button></a>}</div>
      </section>
    </div>
  );
}

export default ListPizza;
