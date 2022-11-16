import React from "react";

import { useLottie } from "lottie-react";
import animationData from "../lotties/chef.json";
import { Link } from "react-router-dom";

function Navbar() {
  let name = window.localStorage.getItem("profile")
  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg mynav fixed-top"
        style={{ position: "sticky" }}
      >
        <div className="container-fluid">
          <div style={{ height: "4rem", width: "4rem" }}>{View}</div>
          <a className="navbar-brand " href="#" id="kir">
            <span id="kiru">Bite My </span>
            <span className="">Kitchen</span>
          </a>
         
          <button
            className="navbar-toggler"
            id="navBut"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
             {/* <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/portal/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portal/recipes">
                  Recipes
                </a>
              </li>
           
              <li className="nav-item">
                <Link to="/portal/fav"  className="nav-link" >
                  My Favourite
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/portal/createrecipes">
                  Add Recipe
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link btn btn-outline-dark" href="#">
                  LOGOUT
                </a>
              </li> */}
              <li className="nav-item dropdown">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            className=" nav-link dropdown-toggle rounded-circle"
            style={{height :'3rem',width:'3rem'}}
            alt="Black and White Portrait of a Man"
            loading="lazy"
            
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
               
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/portal/profile">
                     {name}
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
