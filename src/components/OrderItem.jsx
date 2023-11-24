import { Button, Image } from "antd";
import PropTypes from "prop-types";

const OrderItem = ({ data, setFn }) => {
  const { img, name, price, quantity } = data || {};

  return (
    <section className="my-4">
      <div
        style={{
          borderBottom: "1px solid gray",
        }}
        className="flex justify-between py-4"
      >
        <div className="w-[200px]">
          <Image className="w-[150px]" src={img} alt={name} />
          <p className="text-xl">{name}</p>
        </div>

        <div className="flex flex-col justify-around">
          <p className="text-2xl font-bold text-right">
            ₹{price * quantity}.00
          </p>
          <p className="text-gray-500 font-bold text-right">
            Quantity: {quantity}.00
          </p>
          <div>
            <Button
              onClick={() => setFn(data)}
              type="primary"
              danger
              className="w-full"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

OrderItem.propTypes = {
  data: PropTypes.object,
  setFn: PropTypes.func,
};

export default OrderItem;
