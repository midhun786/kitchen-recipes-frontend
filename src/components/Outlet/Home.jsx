import React from 'react'
import SearchBar from '../portal/SearchBar'
import Chef from './Chef'
import Footer from './Footer'
import Menu from './Menu'
import Plan from './Plan'
import TopRecipe from './TopRecipe'

function Home() {
  return (
    <div>
     <SearchBar />
      <Menu />
      <TopRecipe />
      <Plan />
      <Chef />
    <Footer />
    </div>
  )
}

export default Home