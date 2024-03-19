import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

const Carts = () => {
  const allCart = [
    {
      id: 1,
      name: "Fitness Plus",
      features: [
        "Cardio Machines",
        "Weightlifting Area",
        "Group Classes",
        "Sauna",
        "CrossFit Area",
        "Personal Training",
        "Steam Room",
      ],
      price: "$50",
    },
    {
      id: 2,
      name: "GymMaster",
      features: [
        "Cardio Equipment",
        "Strength Machines",
        "Yoga Studio",
        "Pool",
      ],
      price: "$60",
    },
    {
      id: 3,
      name: "IronWorks Fitness",
      features: [
        "Free Weights",
        "CrossFit Area",
        "Personal Training",
        "Steam Room",
      ],
      price: "$70",
    },
    {
      id: 4,
      name: "FitFusion",
      features: [
        "Treadmills",
        "Elliptical Machines",
        "Spin Bikes",
        "Strength Machines",
        "Yoga Studio",
        "Pilates Studio",
      ],
      price: "$55",
    },
  ];

  return (
    <div>
      <h3 className="text-5xl font-bold">All Carts</h3>
      <div className="grid mt-8 md:grid-cols-2 grid-cols-1 gap-8">
        {allCart.map((cart) => (
          <Cart cart={cart} key={cart.id}></Cart>
        ))}
      </div>
    </div>
  );
};

Carts.propTypes = {
  Carts: PropTypes.func,
};

export default Carts;
