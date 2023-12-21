import CardProduct from "../components/Fragments/CardProduct";

//this data is for testing, education only, for professional project use real data from API
const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: "Rp. 1.500.000",
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 2,
    name: "Adidas Shoes",
    price: "Rp. 2.500.000",
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 3,
    name: "Ventella Shoes",
    price: "Rp. 250.000",
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 4,
    name: "Puma Shoes",
    price: "Rp. 1.000.000",
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
  {
    id: 5,
    name: "Puma Shoes",
    price: "Rp. 1.000.000",
    image: "/assets/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
    reprehenderit similique harum ad dolorum!`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5 flex-wrap">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header images={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
