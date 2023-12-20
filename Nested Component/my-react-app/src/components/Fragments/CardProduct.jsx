import Button from "../Elements/Button/button";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow overflow-hidden">
      {children}
    </div>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="mt-5 text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

const Header = (props) => {
  const { images } = props;
  return (
    <a href="">
      <img src={images} alt="product" />
    </a>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between mt-8 px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button variant="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
