import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookById from "./components/BookById/BookById";
import React, { createContext, useState, useEffect } from "react";
export const MainContext = createContext(null);

const AppRouter = () => {
  const [shoppingBag, setShoppingBag] = useState([]);
  const [category, setCategory] = useState("Business");
  useEffect(() => {
    let local = JSON.parse(window.localStorage.getItem("shoppingBag"));
    if (!local) return;
    else {
      setShoppingBag(local);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  }, [shoppingBag]);

  return (
    <MainContext.Provider
      value={{ shoppingBag, setShoppingBag, category, setCategory }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact={true} path={"/main"} element={<App />} />
          <Route exact={true} path={"/main/:id"} element={<BookById />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
};

export default AppRouter;
