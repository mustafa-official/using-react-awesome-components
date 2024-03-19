import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneUpdateData = phoneData.map((data) => {
          const myObj = {
            name: data.phone_name,
            price: parseInt(data.slug.split("-")[1]),
          };
          return myObj;
        });
        setPhones(phoneUpdateData);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      {!loading && (
        <div className="flex justify-center items-center">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      <div>
        <h2 className="text-3xl font-bold">Phones: {phones.length}</h2>
        <BarChart width={700} height={300} data={phones}>
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="price"></YAxis>
          <Bar stroke="red" dataKey="price"></Bar>
          <Bar dataKey="name"></Bar>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

Phones.propTypes = {
  Phones: PropTypes.func,
};

export default Phones;
