import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// category images
import foodImg from "../assets/dish1.jpg";
import drinkImg from "../assets/drink1.jpg";
import coffeeImg from "../assets/latte.jpg";

// food images
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.jpg";
import dish6 from "../assets/dish6.jpg";
import dish7 from "../assets/dish7.jpg";
import dish8 from "../assets/dish8.jpg";
import dish9 from "../assets/dish9.jpg";
import dish10 from "../assets/dish10.jpg";
import dish11 from "../assets/dish11.jpg";
import dish12 from "../assets/dish12.jpg";

// drink images
import drink1 from "../assets/drink1.jpg";
import drink2 from "../assets/drink2.jpg";
import drink3 from "../assets/drink3.jpg";
import drink4 from "../assets/drink4.jpg";
import drink5 from "../assets/drink5.jpg";
import drink6 from "../assets/drink6.jpg";

// coffee images
import mocha from "../assets/mocha.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/latte.jpg";
import coffee1 from "../assets/expreeso.jpg";
import choclatefrappe from "../assets/choclatefrappe.jpg";
import americano from "../assets/americano.jpg";

// MENU DATA
const menuItems = [
  { img: dish1, name: "Veg Salad", desc: "Fresh & Healthy", price: 180, category: "food" },
  { img: dish2, name: "Momos", desc: "Cheesy Delight", price: 220, category: "food" },
  { img: dish3, name: "Avocado Toast", desc: "Crispy & Tasty", price: 150, category: "food" },
  { img: dish4, name: "Veg Salad", desc: "Classic & Delicious", price: 170, category: "food" },
  { img: dish5, name: "South East Asian fried rice", desc: "Fresh & Flavorful", price: 200, category: "food" },
  { img: dish6, name: "Pasta", desc: "Tasty & Juicy", price: 190, category: "food" },
  { img: dish7, name: "kebabs", desc: "Healthy & Delicious", price: 160, category: "food" },
  { img: dish8, name: "Grilled Eggplant", desc: "Smoky & Tasty", price: 150, category: "food" },
  { img: dish9, name: "Noodles", desc: "Crispy & Savory", price: 140, category: "food" },
  { img: dish10, name: "Grilled Mushroom", desc: "Umami & Flavorful", price: 160, category: "food" },
  { img: dish11, name: "Grilled Zucchini", desc: "Crispy & Delicious", price: 150, category: "food" },
  { img: dish12, name: "Grilled Pineapple", desc: "Sweet & Juicy", price: 160, category: "food" },

  { img: drink1, name: "Cocktail", desc: "Freshly Squeezed", price: 120, category: "drinks" },
  { img: drink2, name: "Pineapple Juice", desc: "Sweet & Cool", price: 160, category: "drinks" },
  { img: drink3, name: "Strawberry Shake", desc: "Sweet & Creamy", price: 140, category: "drinks" },
  { img: drink4, name: "Mango Juice", desc: "Fresh & Juicy", price: 180, category: "drinks" },
  { img: drink5, name: "Berry Smoothie", desc: "Sweet & Tangy", price: 170, category: "drinks" },
  { img: drink6, name: "Mocktail", desc: "Sweet & Refreshing", price: 130, category: "drinks" },

  { img: mocha, name: "Mocha", desc: "Rich & Chocolatey", price: 140, category: "coffee" },
  { img: cappuccino, name: "Cappuccino", desc: "Creamy & Bold", price: 130, category: "coffee" },
  { img: latte, name: "Espresso", desc: "Rich & Smooth", price: 120, category: "coffee" },
  { img: coffee1, name: "Expresso", desc: "Strong & Bold", price: 110, category: "coffee" },
  { img: choclatefrappe, name: "Chocolate Frappe", desc: "Rich & Creamy", price: 150, category: "coffee" },
  { img: americano, name: "Americano", desc: "Classic & Refreshing", price: 140, category: "coffee" },
  
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("food");
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const [orderData, setOrderData] = useState({
    name: "",
    tableNo: "",
    quantity: 1,
    phone: "",
  });

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="bg-[#FFF7F0] min-h-screen">
      <Navbar />

      <section className="py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-coffee text-center mb-4">
          Our Menu
        </h1>
        <p className="text-center text-gray-600 mb-14">
          Explore our delicious handcrafted dishes
        </p>

        {/* CATEGORY CARDS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Food", img: foodImg, value: "food" },
            { title: "Drinks", img: drinkImg, value: "drinks" },
            { title: "Coffee", img: coffeeImg, value: "coffee" },
          ].map((cat) => (
            <div
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg border-4 transition ${
                activeCategory === cat.value
                  ? "border-coffee"
                  : "border-transparent"
              }`}
            >
              <img src={cat.img} className="w-full h-72 object-cover" />
              <div className="bg-white py-4 text-center">
                <h3 className="text-xl font-serif text-coffee">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* MENU CARDS */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center"
            >
              <img src={item.img} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coffee">{item.name}</h3>
                <p className="text-gray-500">{item.desc}</p>
                <p className="text-lg font-bold text-coffee my-3">
                  ₹{item.price}
                </p>
                <button
                  onClick={() => {
                    setSelectedItem(item.name);
                    setShowForm(true);
                  }}
                  className="bg-coffee text-white px-6 py-2 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORDER FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-serif text-coffee text-center mb-6">
              Book Your Order
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded-lg"
                onChange={(e) =>
                  setOrderData({ ...orderData, name: e.target.value })
                }
              />
              <input
                placeholder="Table No"
                className="w-full border px-4 py-2 rounded-lg"
                onChange={(e) =>
                  setOrderData({ ...orderData, tableNo: e.target.value })
                }
              />
              <input
                value={selectedItem}
                readOnly
                className="w-full border px-4 py-2 rounded-lg bg-gray-100"
              />
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="w-full border px-4 py-2 rounded-lg"
                onChange={(e) =>
                  setOrderData({ ...orderData, quantity: e.target.value })
                }
              />
              <input
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded-lg"
                onChange={(e) =>
                  setOrderData({ ...orderData, phone: e.target.value })
                }
              />
              <button
                onClick={() => {
                  alert("Order Booked Successfully!");
                  setShowForm(false);
                }}
                className="w-full bg-coffee text-white py-3 rounded-full"
              >
                Book Order
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Menu;
