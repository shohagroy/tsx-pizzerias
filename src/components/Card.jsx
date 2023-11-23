import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card, Image } from "antd";
const { Meta } = Card;

const DisplayCard = ({ data }) => {
  const { description, img, name, price, id } = data || {};
  return (
    <Card
      style={{
        width: "100%",
      }}
      cover={<Image alt={name} src={img} />}
      actions={[
        <div key={"order"} className="bg-black p-2 w-full">
          <Button type="link">Order Now</Button>
        </div>,

        <div key={"order"} className="bg-black p-2 w-full">
          <Button type="link">Add to Cart</Button>
        </div>,
      ]}
    >
      <Meta
        title={name}
        description={
          <div className="h-[50px]">
            <p className="text-xl font-bold text-green-600">Price: ${price}</p>
            <p>{description}</p>
          </div>
        }
      />
    </Card>
  );
};

export default DisplayCard;
