import React from "react";

import "../../Outlet/Dummy.css";

// import axios from "axios" { useEffect, useState } ;

// import { env } from "../../../config.js";
import { Link } from "react-router-dom";

function Recipes({ TopRecipes, addToCart, presentCartItem,handleSearch }) {
  // const [TopRecipes, setTopRecipes] = useState([]);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   loadData();
  // }, []);

  // let loadData = async () => {
  //   let recipes = await axios.get(`${env.api}/allrecipes`);
  //   //console.log(recipes.data);
  //   setTopRecipes(recipes.data);
  // };

  // let addToCart = (top) => {

  //   setCart([...cart,top]);
  //   console.log(cart)
  // }

  // let removeFromCart = (item) => {
  //   let index = cart.findIndex((obj) => obj.id === item.id);
  //   cart.splice(index, 1);
  //   setCart([...cart]);
  // }

  return (
    <> 
      <div className="container card bg-transparent mt-1 p-5  ">
        <h1 className="sub-title text-center pb-2" style={{color:"#ff245b"}}> ALL RECIPES </h1>

        <input
          className=" form-control mx-auto mb-3"
          style={{ width: "25rem" }}
          type="search"
          placeholder="Search Recipe ex: Rasam Recipe "
          aria-label="Search"
          onChange={(event)=>handleSearch(event)}
        />

        <div className="container pt-5">
          <div className="row ">
            {TopRecipes.map((top) => {
              return (
              
                  <div key={top._id} className="col-lg-4 col-md-6 col-sm-8 pb-3">
                    <div
                      className="card cardh bg-transparent h-100"
                      style={{ width: "18rem" }}
                    >
                      <img src={top.image} className="img-fluid" alt="" />
                      <div className="card-body">
                        <h5 className="card-title text-center pb-2" style={{color:"#ff245b"}}>
                          {top.recipeName}
                        </h5>
                        <div className="d-flex justify-content-evenly">
                          <Link
                            to={`/portal/viewrecipe/${top._id}`}
                            className="btn btn-outline-dark "
                          >
                            <i className=" fa fa-regular fa-paper-plane"></i>
                          </Link>
                        
                          <button
                            disabled={presentCartItem.some(
                              (obj) => obj._id === top._id
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(top);
                            }}
                            className="btn btn-outline-dark"
                            type="button"
                          >
                            <i className="fa fa-regular fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
