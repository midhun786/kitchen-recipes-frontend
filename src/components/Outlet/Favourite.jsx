import React from "react";
import { Link } from "react-router-dom";

import "../Outlet/Dummy.css";

function Favourite({  Cart, handleToRemove }) {

  let removeFromCart = (item) =>{
    handleToRemove(item)
  }
  
  return (
    <>
      <div className="container card bg-transparent mt-1 p-5  ">
        <h1 className="sub-title text-center pb-5" style={{color:"#ff245b"}}> FAVOURITE RECIPES </h1>
        <div className="container">
          <div className="row ">
            {Cart.map((item, i) => {
              return (
                <div key={i} className="col-lg-4 col-md-6 col-sm-8 pb-3">
                  <div
                    className="card cardh bg-transparent h-100"
                    style={{ width: "18rem" }}
                  >
                    <img src={item.image} className="img-fluid" alt="new" />
                    <div className="card-body">
                      <h5 className="card-title text-center pb-2" style={{color:"#ff245b"}}>
                        {item.recipeName}
                      </h5>
                      <div className="d-flex justify-content-evenly">
                      <Link
                            to={`/portal/viewrecipe/${item._id}`}
                            className="btn btn-outline-dark "
                          >
                            <i className=" fa fa-regular fa-paper-plane"></i>
                          </Link>
                        <button  className="btn btn-outline-dark "
                         onClick={() => {
                      
                          removeFromCart(item);
                        }}
                        >
                     <i class="fa far fa-heart-broken"></i>
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

export default Favourite;
