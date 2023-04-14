import { useState, useEffect } from "react";

function ListPizza() {
  const [pizzas, setPizzas] = useState([{}]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  const addItem = () => {
    fetch('https://api.example.com/toppings')
      .then((response) => response.json())
      .then((data) => {
        const toppings = data.toppings;
  
        let toppingsHTML = '';
        toppings.forEach((topping) => {
          toppingsHTML += `
            <div>
              <input type="checkbox" id="${topping.id}" name="toppings[]" value="${topping.id}">
              <label for="${topping.id}">${topping.name}</label>
            </div>
          `;
        });
  
        const popupHTML = `
          <div class="popup">
            <h2>Select size and toppings</h2>
            <label for="size">Size:</label>
            <select name="size" id="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <br><br>
            <label for="toppings">Toppings:</label><br>
            ${toppingsHTML}
            <br><br>
            <button id="submit">Submit</button>
          </div>
        `;
  
        const popup = $(popupHTML);
        $('body').append(popup);
  
        const submitBtn = popup.find('#submit');
        submitBtn.on('click', () => {
          const size = popup.find('#size').val();
          const selectedToppings = [];
          popup.find('input[type="checkbox"]:checked').each(function () {
            selectedToppings.push($(this).val());
          });
  
          // Do something with the selected size and toppings here
          console.log('Selected size:', size);
          console.log('Selected toppings:', selectedToppings);
  
          // Close the popup
          popup.remove();
        });
      });
  };

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
                onClick={() => {addItem()}}
              >
                <div class="flex items-center justify-center">
                  <span class="mr-2">Add</span>
                  <span class="text-lg absolute top-0 right-0 mt-0 mr-2">
                    +
                  </span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ListPizza;
