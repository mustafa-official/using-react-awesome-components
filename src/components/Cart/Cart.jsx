import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  return (
    <div className="space-y-2 bg-green-700 text-white p-5 rounded-md flex flex-col justify-center items-center">
      <h2 className="text-xl">
        <span className="text-5xl font-bold">{cart.price}</span>/month
      </h2>
      <h3 className="text-3xl font-bold">{cart.name}</h3>
      <div className="flex-grow">
        {cart.features.map((feature, idx) => (
          <h2 className="text-xl" key={idx}>
            {feature}
          </h2>
        ))}
      </div>
      <button className="bg-purple-600 px-4 rounded-lg py-2">Buy Now</button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object,
};

export default Cart;
