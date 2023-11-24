import { Flex } from "antd";
import PropTypes from "prop-types";

const PaymentSummary = ({ paymentInfo }) => {
  const { subTotal, discount, deliveryCharge, taxes, payableAmount } =
    paymentInfo || {};

  return (
    <div className="my-10">
      <h3
        style={{
          borderBottom: "2px solid #E92F48",
          width: "100px",
          font: "bold",
          fontSize: "1.5rem",
        }}
      >
        Summary
      </h3>

      <div className="my-3 text-gray-500">
        <Flex
          style={{
            fontSize: "1.2rem",
            borderBottom: "1px solid black",
            padding: "5px 0px",
            margin: "5px 0px",
          }}
          justify="space-between"
        >
          <p>Subtotal</p>
          <p>₹{subTotal}.00</p>
        </Flex>

        <Flex
          style={{
            fontSize: "1.2rem",
            borderBottom: "1px solid black",
            padding: "5px 0px",
            margin: "5px 0px",
          }}
          justify="space-between"
        >
          <p>Discount</p>
          <p>-₹{discount.toFixed(2)}</p>
        </Flex>

        <Flex
          style={{
            fontSize: "1.2rem",
            borderBottom: "1px solid black",
            padding: "5px 0px",
            margin: "5px 0px",
          }}
          justify="space-between"
        >
          <p>Delivery Fee</p>
          <p>₹{deliveryCharge}.00</p>
        </Flex>

        <Flex
          style={{
            fontSize: "1.2rem",
            borderBottom: "1px solid black",
            padding: "5px 0px",
            margin: "5px 0px",
          }}
          justify="space-between"
        >
          <p>Taxes</p>
          <p>₹{taxes}.00</p>
        </Flex>

        <Flex
          style={{
            fontSize: "1.2rem",
            padding: "5px 0px",
            color: "black",
            margin: "10px 0px",
            fontWeight: "bold",
          }}
          justify="space-between"
        >
          <p>Total</p>
          <p>₹{payableAmount}</p>
        </Flex>
      </div>
    </div>
  );
};

PaymentSummary.propTypes = {
  paymentInfo: PropTypes.object,
};

export default PaymentSummary;
