import { useState } from "react";
import SmallBtn from "./SmallBtn";

const ToggleButtons = () => {
  const [active, setActive] = useState("all");
  return (
    <div className="space-x-4 py-4 sticky top-0 bg-gray-50/90 backdrop-blur-md">
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
  );
};

export default ToggleButtons;
