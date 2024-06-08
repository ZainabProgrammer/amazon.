import React from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const SideHeader = ({ title, item1, item2, item3 }) => {
  return (
    <>
      <h3 className="font-titleFont font-extrabold px-7 text-xl pt-4 ">
        {title}
      </h3>
      <ul className="font-bold py-2 w-full">
        <li
          className="py-2 flex items-center px-7  justify-between hover:bg-zinc-200 cursor-pointer "
          key={item1}
        >
          {item1}
          <span>
            <ArrowForwardIosOutlinedIcon />
          </span>
        </li>
        <li
          className="py-2 flex items-center px-7   justify-between hover:bg-zinc-200 cursor-pointer "
          key={item2}
        >
          {item2}
          <span>
            <ArrowForwardIosOutlinedIcon />
          </span>
        </li>
        <li
          className="py-2 flex items-center  px-7  justify-between hover:bg-zinc-200 cursor-pointer "
          key={item3}
        >
          {item3}
          <span>
            <ArrowForwardIosOutlinedIcon />
          </span>
        </li>
        <div className="border-zinc-200 border my-5"></div>
      </ul>
    </>
  );
};

export default SideHeader;
