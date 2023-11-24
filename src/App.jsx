import { Flex } from "antd";
import "./App.css";
import BG from "./assets/BG.png";

import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState("delivery");

  const buttons = [
    {
      name: "delivery",
      key: "delivery",
    },
    {
      name: "pick up",
      key: "pick-up",
    },
  ];

  return (
    <>
      <section>
        <Flex
          justify="center"
          align="center"
          className=" h-screen w-full bg-gray-300 flex justify-center items-center"
        >
          <div className="h-screen md:h-[800px] w-full md:w-[500px] bg-white rounded-3xl">
            <div
              style={{
                backgroundImage: `url('${BG}')`,
                width: "100%",
                height: "15vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <div className="w-full h-[130px] absolute -bottom-10 ">
                <div className="w-[350px] h-full bg-white rounded-t-3xl mx-auto  shadow-md border">
                  <div>
                    <p className="uppercase text-center p-1 text-xl font-bold">
                      TSX PizzEriAs
                    </p>

                    <div className="w-full flex justify-center items-center my-4">
                      {buttons?.map((btn) => (
                        <button
                          key={btn?.key}
                          onClick={() => setActiveButton(btn?.key)}
                          className={`w-[120px] uppercase -mr-2 rounded-lg px-1 py-0.5 cursor-pointer duration-200 ${
                            activeButton === btn?.key
                              ? " bg-black text-white z-50"
                              : " border-2 border-black text-black "
                          }`}
                        >
                          {btn?.name}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-around items-center text-gray-600">
                      <p>25 mins</p>
                      <p>₹ 20</p>
                      <p>Discounts</p>
                    </div>

                    <p className="text-center">
                      Menu Hours: 10:00 AM to 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-8 md:my-12">
              <Outlet />
            </div>
          </div>
        </Flex>
      </section>
    </>
  );
}

export default App;
