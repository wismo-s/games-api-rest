import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Contextapp } from "../api/context";
import {
  PiShoppingCartFill as CartFill,
  PiShoppingCart as Cart,
} from "react-icons/pi";

function Header() {
  const context = useContext(Contextapp);
  const { user } = context.data;
  const [cartIcon, setCartIcon] = useState(false);
  return (
    <header>
      <Link to="/">HOME</Link>
      <Link to="/games">GAMES</Link>
      <Link to="/gender">CATEGORY</Link>
      <Link to="/developers">DEVELOPER</Link>

      {!user.username ? (
        <div className="account">
          <Link to="/login">LOGIN</Link>
          <Link to="/singin">SIGN UP</Link>
        </div>
      ) : (
        <div className="account">
          <Link className="user-profile" to="/user">
            <p>{user.username}</p>
            <img src={user.image_perfil} />
          </Link>
          <Link
            className="cart"
            to="/cart"
            onMouseOver={() => setCartIcon(true)}
            onMouseOut={() => setCartIcon(false)}
          >
            {cartIcon ? <CartFill /> : <Cart />}
          </Link>
        </div>
      )}
    </header>
  );
}
export default Header;
