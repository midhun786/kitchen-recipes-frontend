import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

function Menu() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    

  return (
    <div className='p-5 container card bg-transparent' style={{border:'none'}}>
<h1 className='text-center pb-5'style={{color:"#ff245b"}}>Famous Recipes Menu</h1>

<Carousel responsive={responsive}>
  <div>
  <div className="card bg-transparent" style={{width: "16rem"}}>
  <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/paneer-bhurji-4-280x280.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <Link to='/portal/breakfast'><div className="card-title btn mx-4 fs-4 prop0">BREAKFAST</div></Link> 
  </div>
</div>
  </div>
  <div>
  <div className="card bg-transparent" style={{width: "16rem"}}>
  <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/05/eggless-chocolate-cake-best-280x280.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <Link to='/portal/cakes'><div className="card-title btn mx-5 fs-4 prop0">CAKES</div></Link> 
  </div>
</div>
  </div>
  <div>
  <div className="card bg-transparent" style={{width: "16rem"}}>
  <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2014/02/rasam-500x500.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
   <Link to='/portal/soups'><div className="card-title btn mx-5 fs-4 prop0">SOUPS</div></Link> 
  </div>
</div>
  </div>
  <div>
  <div className="card bg-transparent" style={{width: "16rem"}}>
  <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/paneer-tikka-restaurant-style-280x280.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <Link to='/portal/snacks'><div className="card-title btn mx-5 fs-4 prop0">SNACKS</div></Link> 
  </div>
</div>
  </div>
  <div>
  <div className="card bg-transparent" style={{width: "16rem"}}>
  <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2013/03/pulao-recipe-280x280.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <Link to='/portal/rice'><div className="card-title btn mx-5 fs-4 prop0">RICE</div></Link> 
  </div>
</div>
  </div>
  <div>
  <div className="card bg-transparent" style={{width: "16rem"}}>
  <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/chia-pudding-0-280x280.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <Link to='/portal/desserts'><div className="card-title btn mx-5 fs-4 prop0">DESSERTS</div></Link> 
  </div>
</div>
  </div>
</Carousel>

    </div>
  )
}

export default Menu