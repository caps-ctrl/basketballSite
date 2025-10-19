import { useState } from "react";
import { motion } from "framer-motion";
import { NavData } from "@/data/NavBarData/NavData";
import type { NavItem } from "@/data/NavBarData/NavTypes";
import { NavLink } from "react-router";
const Navbar = () => {
  const [isActive, setIsActive] = useState<String | NavItem>();

  return (
    <div className="flex  w-screen   items-center border-b-4 border-yellow-500 ">
      <div className=" w-[30%]">(tu logo)</div>
      <h1 className="font-bold font-handwritten justify-center p-2 text-4xl w-[40%] flex items-center">
        School
        <span className="text-xl relative top-1 ml-1 -mr-0.5 ">🏀</span>f Basket
      </h1>
      <ul className="flex w-[30%] gap-4">
        {NavData.map((nav) => (
          <NavLink to={nav}>
            {" "}
            <li
              className="relative cursor-pointer"
              onClick={() => setIsActive(nav)}
            >
              {nav}
              <motion.span
                className="absolute left-0 -bottom-1 h-[3px] bg-yellow-500"
                initial={{ width: 0 }}
                animate={isActive === nav ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
