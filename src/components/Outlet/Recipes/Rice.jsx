import React, { useEffect, useState } from 'react'
import '../../Outlet/TopRecipe.css'
import axios from "axios";

import { env } from "../../../config.js";
import { Link } from 'react-router-dom';

function Rice() {

  const [Rice, setRice] = useState([]);

  
  useEffect(() => {
      loadData()
  }, [])

  let loadData = async () => {
    
      let recipes = await axios.get(`${env.api}/allrecipes`);
      console.log(recipes.data);
      const rice = recipes.data.filter((ricee)=>ricee.menu === "rice")
  console.log(rice)
  setRice(rice);
  
  }


  return (
    <>
         <div id="project">
          <div className="container card bg-transparent mt-1 p-5  ">
            <h1 className="sub-title text-center pb-5"style={{color:"#ff245b"}}> RICE RECIPES </h1>

            <section id="portfolio" className="portfolio">
              <div className="container">
                <div className="row portfolio-container">
                  {Rice.map((rice) => {
                    return (
                      
                        <div key={rice._id} className="col-lg-4 col-md-6 portfolio-item filter-app">
                          <div 
                       
                          className="card portfolio-wrap">
                            <img src={rice.image} className="img-fluid" alt="" />

                            <div className="card-title text-center pt-2">
                              <h4>{rice.recipeName}</h4>
                            </div>

                            <div className="portfolio-info">
                              <div className="portfolio-links ">
                                <Link
                                  to={`/portal/viewrecipe/${rice._id}`}
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

export default Rice