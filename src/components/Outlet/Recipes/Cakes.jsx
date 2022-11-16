import React, { useEffect, useState } from 'react'
import '../../Outlet/TopRecipe.css'
import axios from "axios";

import { env } from "../../../config.js";
import { Link } from 'react-router-dom';

function Cakes() {

  const [Cakes, setCakes] = useState([]);

  
  useEffect(() => {
      loadData()
  }, [])

  let loadData = async () => {
    
      let recipes = await axios.get(`${env.api}/allrecipes`);
      console.log(recipes.data);
      const cakes = recipes.data.filter((recipe)=>recipe.menu === "cakes")
  console.log(cakes)
  setCakes(cakes);
  
  }


  return (
    <>
         <div id="project">
          <div className="container card bg-transparent mt-1 p-5  ">
            <h1 className="sub-title text-center pb-5" style={{color:"#ff245b"}}> CAKES RECIPES </h1>

            <section id="portfolio" className="portfolio">
              <div className="container">
                <div className="row portfolio-container">
                  {Cakes.map((cake) => {
                    return (
                      
                        <div key={cake._id} className="col-lg-4 col-md-6 portfolio-item filter-app">
                          <div 
                          
                          className="card portfolio-wrap">
                            <img src={cake.image} className="img-fluid" alt="" />

                            <div className="card-title text-center pt-2">
                              <h4>{cake.recipeName}</h4>
                            </div>

                            <div className="portfolio-info">
                              <div className="portfolio-links ">
                                <Link
                                  to={`/portal/viewrecipe/${cake._id}`}
                                  data-gallery="portfolioDetailsGallery"
                                  data-glightbox="type: external"
                                  className="portfolio-details-lightbox me-4"
                                  title="Recipe view link"
                                >
                                  <i className=" fa fa-regular fa-paper-plane"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
    
    </>
  )
}

export default Cakes