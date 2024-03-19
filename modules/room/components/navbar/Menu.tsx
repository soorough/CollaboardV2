import React from "react";

const Menu = () => {
  return (
    <>
      <div
        id="dropdown-menu"
        className=" absolute  mt-[3.2rem] left-0 top-0 w-[250px] border border-gray-300 bg-white shadow-md "
      >
        <div className="py-2 px-2 cursor-pointer text-[18px] text-black hover:bg-gray-100">
          Account
        </div>
        <div className="py-2 px-2 cursor-pointer text-[18px] text-black hover:bg-gray-100">
          Settings
        </div>
      </div>
    </>
  );
};

export default Menu;
