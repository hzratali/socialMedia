import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { HiBell } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

import { useLocation } from "react-router";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="header_container">
      <div>
        <p>TravelMedia.in</p>
      </div>
      <div className="menu_container">
        <IoIosHome
          color={pathname === "/" ? "#f05a22" : "#c59584"}
          size={"25px"}
        />
        <HiBell color="#c59584" size={"25px"} />
        <FaBookmark
          color={pathname === "/item/1" ? "#f05a22" : "#c59584"}
          size={"21px"}
        />
        <GoPersonFill color="#c59584" size={"25px"} />
      </div>
      <div></div>
    </div>
  );
}

export default Header;
