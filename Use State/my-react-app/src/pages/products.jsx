import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/button";
import { React, useState } from "react";

//this data is for testing, education only, for professional project use real data from API
const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 1500000,
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 2,
    name: "Adidas Shoes",
    price: 2500000,
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 3,
    name: "Ventella Shoes",
    price: 250000,
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 4,
    name: "Puma Shoes",
    price: 1000000,
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 5,
    name: "Puma Shoes",
    price: 1000000,
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const handleAddToCart = (id) => {
    // setCart([...cart, { id: id, qty: 1 }]);
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-16 bg-gray-800 text-white items-center px-10 gap-5">
        {email}
        <Button variant="bg-blue-600" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 flex-wrap">
        <div className="w-4/6 flex  flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header images={product.image} />
              <CardProduct.Body title={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-3 mb-5">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>{item.id}</li>
            ))}
          </ul> */}
          <table className="text-left table-auto border-separate border-spacing-x-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
