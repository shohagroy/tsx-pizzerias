import { Button, Flex, Image, Input } from "antd";
import PropTypes from "prop-types";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const DisplayItems = ({ data, setFn }) => {
  const [quantity, setQuantity] = useState(1);
  const { description, img, name, price } = data || {};

  const orderHandelar = () => {
    setFn({ ...data, price: price * 78, quantity });
  };

  return (
    <section className="my-4">
      <div
        style={{
          borderBottom: "1px solid #7E8389",
        }}
        className="flex justify-between py-4"
      >
        <div className="w-[200px]">
          <Image className="w-[150px]" src={img} alt={name} />
          <p className="text-xl">{name}</p>
          <small className="text-gray-500">{description}</small>
        </div>

        <div>
          <p className="text-2xl font-bold text-right">₹{price * 78}.00</p>
          <div>
            <Flex className="w-[150px] bg-gray-100 p-2 rounded-md my-4">
              <Button
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
                type="link"
              >
                <MinusOutlined />
              </Button>

              <Input value={quantity} className="text-center" />
              <Button onClick={() => setQuantity(quantity + 1)} type="link">
                <PlusOutlined />
              </Button>
            </Flex>
            <Button onClick={orderHandelar} type="primary" className="w-full">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

DisplayItems.propTypes = {
  data: PropTypes.object,
  setFn: PropTypes.func,
};

export default DisplayItems;
