import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";
import Home from "./pages/home";
import { Genders } from "./pages/genders";
import { FormGenders } from "./pages/formGenders";
import { Games } from "./pages/games";
import { FormGames } from "./pages/formGames";
import { Developers } from "./pages/developers";
import { FormDevelopers } from "./pages/formdevelopers";
import { UserProfile } from "./pages/userprofile";
import { Developer } from "./pages/developer";
import { Gender } from "./pages/gender";
import { Gamesdatail } from "./pages/gamesdatail";
import { Createuser } from "./pages/createuser";
import { Longin } from "./pages/longin";
import { Logout } from "./pages/logout";
import { User } from "./pages/user";
import { Cart } from "./pages/cart";
import { Contextapp } from "./api/context";
import { listAllObj, userlist } from "./api/list.api";
import { ContextCart } from "./api/context";
import { Factures } from "./pages/factures";
import axios from "axios";
import Cookies from "js-cookie";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
const token = Cookies.get("sessiontoken");
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = `Token  ${token}`;

export default function App() {
  const [session, setSesion] = useState(false);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState({
    games: [],
    genders: [],
    developers: [],
    user: {},
    facture: {},
    loading: true,
  });
  async function getData() {
    const games = await listAllObj("games/");
    const gender = await listAllObj("genders/");
    const devs = await listAllObj("developers/");
    const [user, cart, facture, session] = await userlist();
    setCart(cart);
    setSesion(session);
    setData({
      games: games.data,
      genders: gender.data,
      developers: devs.data,
      user: user,
      facture: facture,
      loading: false,
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Contextapp.Provider value={{ data, session: session, setData }}>
      <ContextCart.Provider value={{ cart: cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gender" element={<Genders />} />
            <Route path="/gender/:id" element={<Gender />} />
            <Route path="/gender/form" element={<FormGenders />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:id" element={<Gamesdatail />} />
            <Route path="/games/form" element={<FormGames />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/developers/:id" element={<Developer />} />
            <Route path="/developers/form" element={<FormDevelopers />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/login" element={<Longin />} />
            <Route path="/singin" element={<Createuser />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/user" element={<User />} />
            <Route path="/factures" element={<Factures />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextCart.Provider>
    </Contextapp.Provider>
  );
}
