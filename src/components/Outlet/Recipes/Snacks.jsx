import React, { useEffect, useState } from 'react'
import '../../Outlet/TopRecipe.css'
import axios from "axios";

import { env } from "../../../config.js";
import { Link } from 'react-router-dom';

function Snacks() {

  const [Snacks, setSnacks] = useState([]);

  
  useEffect(() => {
      loadData()
  }, [])

  let loadData = async () => {
    
      let recipes = await axios.get(`${env.api}/allrecipes`);
      console.log(recipes.data);
      const sna = recipes.data.filter((snacks)=>snacks.menu === "snacks")
  console.log(sna)
  setSnacks(sna);
  
  }


  return (
    <>
         <div id="project">
          <div className="container card bg-transparent mt-1 p-5  ">
            <h1 className="sub-title text-center pb-5" style={{color:"#ff245b"}}> SNACKS RECIPES </h1>

            <section id="portfolio" className="portfolio">
              <div className="container">
                <div className="row portfolio-container">
                  {Snacks.map((snack) => {
                    return (
                      
                        <div key={snack._id} className="col-lg-4 col-md-6 portfolio-item filter-app">
                          <div 
                          
                          className="card portfolio-wrap">
                            <img src={snack.image} className="img-fluid" alt="" />

                            <div className="card-title text-center pt-2">
                              <h4>{snack.recipeName}</h4>
                            </div>

                            <div className="portfolio-info">
                              <div className="portfolio-links ">
                                <Link
                                  to={`/portal/viewrecipe/${snack._id}`}
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

export default Snacks