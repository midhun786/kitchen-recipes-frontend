import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../portal/Navbar";


function Portal() {
  //console.log(presentCartItem)
  return (
    <>
      <Navbar ></Navbar>
      
      <Outlet />
    </>
  );
}

export default Portal;
