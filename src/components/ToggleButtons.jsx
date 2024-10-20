import { useState } from "react";
import SmallBtn from "./SmallBtn";
import Countries from "./Countries";

const ToggleButtons = () => {
  const [active, setActive] = useState("all");
  return (
    <div>
      <div className="space-x-4 py-4 sticky top-0 bg-gray-50/90 backdrop-blur-md z-10">
        <SmallBtn
          text="All"
          isActive={active === "all"}
          handler={() => setActive("all")}
        ></SmallBtn>
        <SmallBtn
          text="Visited"
          isActive={active === "visited"}
          handler={() => setActive("visited")}
        ></SmallBtn>
      </div>
      <Countries activeBtn={active}></Countries>
    </div>
  );
};

export default ToggleButtons;
