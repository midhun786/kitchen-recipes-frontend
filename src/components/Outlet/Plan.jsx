import React from 'react'
import '../Outlet/plan.css';
function Plan() {
  
  return (
    <>
<div className='container'>
    <h1 className='text-center p-5'style={{color:"#ff245b"}}>Recipes planning in 3 easy steps</h1>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 bg-transparent">
      <img src="https://www.yummly.com/static/mediamonks/mealplanning/static/media/card-1.ec3d523d.jpg" className="card-img-top" alt="..." />
      <div className="planCard mx-auto ">
              <img 
              className='image'
             
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/1200px-Eo_circle_blue_number-1.svg.png"
                alt=""
              />
              </div>
      <div className="card-body">
        <h5 className="card-title text-center fs-4 pb-2"style={{color:"#ff245b"}}>Choose your menu</h5>
        <p className="card-text fs-5" style={{color:"black"}}>Pick the recipes you'll cook in the next week — as many or few as you like. We'll supply personalized recommendations to keep you deliciously inspired.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 bg-transparent">
      <img src="https://www.yummly.com/static/mediamonks/mealplanning/static/media/card-2.072d941d.jpg" className="card-img-top" alt="..." />
      <div className="planCard mx-auto ">
              <img 
              className='image'
             
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_blue_number-2.svg/2048px-Eo_circle_blue_number-2.svg.png"
                alt=""
              />
              </div>
      <div className="card-body">
        <h5 className="card-title text-center fs-4 pb-2"style={{color:"#ff245b"}}>Get your groceries</h5>
        <p className="card-text fs-5"style={{color:"black"}}>Create your favourite recipes list, add anything else you need, then take it with you when you shop. always remberber we are with you!</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100 bg-transparent">
      <img src="https://www.yummly.com/static/mediamonks/mealplanning/static/media/card-3.7f59ea9d.jpg" className="card-img-top" alt="..." />
      <div className="planCard mx-auto ">
              <img 
              className='image'
             
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Eo_circle_light-blue_number-3.svg/800px-Eo_circle_light-blue_number-3.svg.png"
                alt=""
              />
              </div>
      <div className="card-body">
      <h5 className="card-title text-center fs-4 pb-2"style={{color:"#ff245b"}}>Dig in!</h5>
        <p className="card-text fs-5"style={{color:"black"}}>Cook with fresh ingredients, then tell us what you think for even better recommendations next time. All done? Clear your meal plan and start your next culinary adventure.</p>
      </div>
    </div>
  </div>
  
</div>
</div>
    </>
  )
}

export default Plan