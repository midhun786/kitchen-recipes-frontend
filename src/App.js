import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { env } from "./config";
import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";

import Passwordreset from "./components/Auth/Passwordreset";
import ResetPasswordPage from "./components/Auth/ResetPasswordPage";
import Portal from "./components/portal/Portal";

import Home from "./components/Outlet/Home";
import Recipes from "./components/Outlet/Recipes/Recipes";
import LinkData from "./components/Outlet/Recipes/LinkData";
import Snacks from "./components/Outlet/Recipes/Snacks";
import Soups from "./components/Outlet/Recipes/Soups";
import Rice from "./components/Outlet/Recipes/Rice";
import Desserts from "./components/Outlet/Recipes/Desserts";
import Breakfast from "./components/Outlet/Recipes/Breakfast";
import Cakes from "./components/Outlet/Recipes/Cakes";
// import Addrecipe from "./components/Outlet/Recipes/Addrecipe";
import Favourite from "./components/Outlet/Favourite";

import Profile from "./components/Profile";

function App() {
  const [TopRecipes, setTopRecipes] = useState([]);
  const [filterData, setFilterData] = useState(TopRecipes);
  

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    let recipes = await axios.get(`${env.api}/allrecipes`);
    try {
      // console.log(recipes.data);
      setTopRecipes(recipes.data);
      setFilterData(recipes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [Cart, setCart] = useState([]);

  let addToCart = (top) => {
    setCart([...Cart, top]);

  };
 // console.log(Cart)
 let removeFromCart = (item) => {

  let test1 = item;
  let test2 = Cart;
  const value = test2.findIndex((obj) => obj._id === test1._id)
  test2.splice(value,1);
setCart([...test2])
 

}

  let handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    result = TopRecipes.filter((data) => {
      return data.recipeName.search(value) !== -1;
    });

    setFilterData(result);
  };

  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/resetpassword" element={<Passwordreset />} />
          <Route path="/reset-password-page" element={<ResetPasswordPage />} />
          <Route path="/register" element={<Register />} />

          <Route path="/portal" element={<Portal />}>
            <Route path="home" element={<Home  />} />

            <Route
              path="recipes"
              element={
                <Recipes
                  handleSearch={handleSearch}
                  TopRecipes={filterData}
                  presentCartItem={Cart}
                  addToCart={addToCart}
                />
              }
            />

            <Route path="snacks" element={<Snacks />} />
            <Route path="soups" element={<Soups />} />
            <Route path="rice" element={<Rice />} />
            <Route path="desserts" element={<Desserts />} />
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="cakes" element={<Cakes />} />
            <Route path="viewrecipe/:id" element={<LinkData />} />
            {/* <Route path="createrecipes" element={<Addrecipe />} /> */}
            <Route path="fav" element={<Favourite Cart={Cart} handleToRemove={removeFromCart} />} />
            <Route path="profile" element={<Profile />} />

          </Route>

        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
