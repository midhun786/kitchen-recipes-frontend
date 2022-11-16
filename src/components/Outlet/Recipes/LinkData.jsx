import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { env} from '../../../config.js'

function LinkData() {
  const params = useParams();
  const [recipeData, setRecipeData] = useState({});
  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let recipe = await axios.get(
        `${env.api}/viewrecipe/${params.id}`
      );
      setRecipeData(recipe.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container card bg-transparent">
        <div className="row">
          <h3 className="  text-center pt-5 pb-3" style={{color:"#ff245b"}}>{recipeData.recipeName}</h3>
          <div className="col-12 text-center">
            <img src={recipeData.image} className="" alt={recipeData.recipeName} />
          </div>
        </div>
        <div className="row">
          <h3 className="text-start pt-3" style={{color:"#ff245b"}}>Description </h3>
          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className="pt-2"style={{color:"black"}}>
            {recipeData.description}
            </div>
          </div>
        </div>
       {
        (recipeData.ingredients === "")? <div></div>:  <div className="row">
        <h3 className="text-start pt-3"style={{color:"#ff245b"}}>Ingredients</h3>
        <div className="col-lg-6 col-md-6 col-sm-6"style={{color:"black"}}>
        {recipeData ?.ingredients?.map((e,i) => {
                  return (
                    <ul key={i}>
                      <li>{e}</li>
                    </ul>
                  );
                })}
        </div>
      </div> 
        
       }
        {/* <div className="row">
          <h3 className="text-start pt-3">Nutrition : </h3>
          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className="pt-2">
            {recipeData.nut}
            </div>
          </div>
        </div> */}
        <div className="row">
          <h3 className="text-start pt-3"style={{color:"#ff245b"}}> Instructions </h3>
          <div className="col-lg-12 col-md-12 col-sm-12"style={{color:"black"}}>
          <div>
                   {recipeData.instructions}
        </div>
          </div>
        </div>
        {/* <div className="row">
          <h3 className="text-start pt-3"> Notes :  </h3>
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div>
                   {recipeData.notes}
        </div>
          </div>
        </div> */}
      </div>
     
    </>
  );
}

export default LinkData;
