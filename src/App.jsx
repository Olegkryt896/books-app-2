import { useState, useContext, createContext, useEffect } from "react";
import Header from "./components/Header/Header";
import "./global.sass";
import Slider from "./components/Slider/Slider";
import { Transition, CSSTransition } from "react-transition-group";
import Promo from "./components/Promo/Promo";
import BooksByCategories from "./components/BooksByCategories/BooksByCategories";
import CategoriesList from "./components/CategoriesList/CategoriesList";

function App() {
  return (
    <div>
      <Header />
      <Promo />
      <Slider />

      <BooksByCategories />
    </div>
  );
}

export default App;
