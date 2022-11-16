import React from "react";

function SearchBar() {
  return (
    <div className="card text-bg-dark " style={{border:'none'}} >
      <img
        src="https://img.freepik.com/premium-photo/professional-chef-fire_79782-796.jpg?w=1060"
        className="card-img "
        style={{ height: "38rem" }}
        alt="..."
      />
      <div className="card-img-overlay">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 pt-5">
            <div className="p-5 text-center">
              <h1>
                Welcome to Our{" "}
                <span id="kiru" className="fs-2">
                  Bite My kitchen
                </span>{" "}
              </h1>
              <h3 className=" pt-3 text-center">
                <span id="kiru">"</span>Cooking is like love. It should be entered
                into with abandon or not at all.<span id="kiru">"</span>
              </h3>
              <span className="text-end" id="kiru">
                -- Harriet Van Horne
              </span>
            </div>
            {/* <div className="input-group  ">
              <input
                type="text"
                className="form-control"
                placeholder="Recipes Finder"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />

              <button
                className="btn btn-outline-info"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
