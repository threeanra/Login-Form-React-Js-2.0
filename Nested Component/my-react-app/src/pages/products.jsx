import CardProduct from "../components/Fragments/CardProduct";
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header images="/assets/images/shoes.jpg" />
        <CardProduct.Body title="Adidas Shoes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
          reprehenderit similique harum ad dolorum!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.500.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
