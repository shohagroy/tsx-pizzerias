import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="bg-black/40 p-3 absolute top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="uppercase font-2xl font-mono text-white font-bold">
            TSX PizzEriAs
          </h2>
        </div>

        <div>
          <Button
            icon={<HomeOutlined />}
            className="text-whit font-bold"
            // type="primary"
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
