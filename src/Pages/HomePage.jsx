import { Button, Spin } from "antd";
import { useState } from "react";
import DisplayItems from "../components/DisplayItems";
import OrderItem from "../components/OrderItem";
import PaymentSummary from "../components/PaymentSummary";
import useFetch from "../utils/FetchData";
// import Razorpay from "razorpay";

const HomePage = () => {
  const [showItems, setShowItems] = useState(false);
  const [ordersItems, setOrderItems] = useState([]);

  const { data, loading, error } = useFetch("../data.json");

  const subTotal = ordersItems?.reduce((total, item) => {
    return total + item?.price * item?.quantity;
  }, 0);

  const discount = (subTotal / 100) * 20;
  const deliveryCharge = 50;
  const taxes = (subTotal / 100) * 4;
  const payableAmount = (
    subTotal +
    deliveryCharge -
    (discount + taxes)
  ).toFixed(2);

  const paymentInfo = {
    subTotal,
    discount,
    deliveryCharge,
    taxes,
    payableAmount,
  };

  const itemAddHandelar = (data) => {
    setOrderItems([...ordersItems, data]);
    setShowItems(!showItems);
  };

  const itemRemoveHandelar = (data) => {
    const remainItems = ordersItems?.filter((item) => item?.id !== data?.id);
    setOrderItems(remainItems);
  };

  const placeOrderHandler = () => {};

  return (
    <>
      <section className="">
        <div className="px-4  md:px-10 py-2">
          {!showItems ? (
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Your Order</p>
              <Button
                onClick={() => setShowItems(!showItems)}
                className="text-[#E92F48] my-2 cursor-pointer font-bold bg-white border-none"
              >
                Add Items +
              </Button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Items List</p>
              <Button
                onClick={() => setShowItems(!showItems)}
                className="text-[#E92F48] my-2 cursor-pointer font-bold bg-white border-none"
              >
                My Orders
              </Button>
            </div>
          )}

          <div className="custom-scrollbar h-[68vh]  md:h-[500px]">
            {loading && (
              <div className="p-3 text-center my-10 ">
                <Spin size="large" />
              </div>
            )}

            {error && (
              <div className="p-3 text-center my-10 font-semibold ">
                <p>{error}</p>
              </div>
            )}

            {!ordersItems?.length && !showItems && (
              <div className="p-3 text-center my-10 font-semibold ">
                <p>No Order Item Found! Please Add Items.</p>
              </div>
            )}

            {showItems
              ? data?.map((item, i) => (
                  <DisplayItems setFn={itemAddHandelar} key={i} data={item} />
                ))
              : ordersItems?.map((item, i) => (
                  <OrderItem key={i} data={item} setFn={itemRemoveHandelar} />
                ))}

            {!showItems && ordersItems?.length > 0 && (
              <PaymentSummary paymentInfo={paymentInfo} />
            )}
          </div>
        </div>
        <div className="bg-black p-2 rounded-b-3xl">
          <Button
            onClick={placeOrderHandler}
            className="w-full bg-black text-white uppercase border-none"
          >
            place order
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
