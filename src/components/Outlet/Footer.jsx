import React from "react";
import "../Outlet/footer.css";
function Footer() {
  return (
    <section id="footer">
      <div className="foot container-fluid card">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 text-center pt-5">
            <h4>LINKS</h4>
            <p>Recipes</p>
            <p>My Favourites</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 text-center pt-5">
            <h2>
              <span id="kiru" className="fs-2">
                Bite my
              </span>{" "}
              
              Kitchen
            </h2>
            <p className="pt-2">
              " Cooking is like love. It should be entered into with abandon or
              not at all."
            </p>
            <p className="text-end">Harriet Van Horne</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4  text-center pt-5">
            <h4>CONTACT US</h4>
            <p>
              <a href="#">midhunkumarengineer98@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="text-center p-2">
          CopyRight@2022 Website Created by - Midhunkumar
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Footer;
