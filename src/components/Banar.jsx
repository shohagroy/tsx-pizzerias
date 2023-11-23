import { Input } from "antd";
import BG from "../assets/background.jpg";

const { Search } = Input;

const Banar = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${BG}')`,
        backgroundRepeat: "none",
        position: "center",
      }}
      className="h-[700px]"
    >
      <div className="flex bg-black/20 justify-center items-center flex-col h-full text-white ">
        <h2 className="text-7xl font-bold text-white p-3">
          We get the go-to pizza.
        </h2>

        <p className="text-2xl font-bold">
          Order pickup and delivery from the best independent pizzerias near
          you.
        </p>

        <div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            //   onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Banar;
