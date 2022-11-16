import React from "react";
import "../Outlet/chef.css";
function Chef() {
  return (
    <section id="chef pt-5">
      <div
        className="container card bg-transparent mt-1 p-5  "
       
        style={{ border: "none" }}
      >
        <h1 className="text-center p-5" style={{color:"#ff245b"}}>Our Trending Tamilnadu Chef's</h1>
        <div className="row row-cols-md-2 row-cols-lg-4 row-cols-sm-2 m-3">
          <div className="col mt-sm-2 pb-5">
            <div className="card chefCard ">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h2>Chef Dhamu</h2>
              <div className="cont ">
                <p>
                In 2010, he received a Guinness World Record
                 for the longest cooking marathon by a single individual.
                  He also became the first Indian chef to receive
                   Ph. D in Hotel Management and Catering Technology, 
                   which was awarded by the University of Madras in 2004.
                </p>
                <div className="link">
                  <a href="#">
                    <i className="fab fa-codepen"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-sm-2 pb-5">
            <div className="card chefCard ">
              <img
                src="https://yt3.ggpht.com/ytc/AMLnZu9TF4lFVIfn-feuY1yzyYjfa7yJFDVixDRhylb2=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <h2>Chef Venkat</h2>
              <div className="cont ">
                <p>
                After completing his post-graduation, 
                Venkatesh started working as a chef at Hotel Chola Sheraton
                 (now, known as My Fortune), Chennai. 
                 He worked there for around two years.
                </p>
                <div className="link">
                  <a href="#">
                    <i className="fab fa-codepen"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-sm-2 pb-5">
            <div className="card chefCard ">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h2>Chef Bhat</h2>
              <div className="cont ">
                <p>
                Bhat initially worked in the kitchens of Hotel Chola Sheraton in 1994. 
                Two years later, he moved to Taj Coromandel as a management trainee 
                in hotel operations and kitchen management before being promoted 
                to the position of sous chef in 1998.
                </p>
                <div className="link">
                  <a href="#">
                    <i className="fab fa-codepen"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-sm-2 pb-5">
            <div className="card chefCard ">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwngsc1Nu8qN6vHHxMiLNRL3VxMbug2cxmdWt9Bs8=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <h2>Chef Hema</h2>
              <div className="cont ">
                <p>
                In the world of cooking, Hema, 53, is a true rarity:
                 a self-taught cook who 
                 honed her skills in the Indian kitchen,
                  right from the comfort of her home
                </p>
                <div className="link">
                  <a href="#">
                    <i className="fab fa-codepen"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chef;
