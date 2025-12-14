// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";

// // const options = {
// //   burgerColorHover: "#eb4034",
// //   logo,
// //   logoWidth: "20vmax",
// //   navColor1: "white",
// //   logoHoverSize: "10px",
// //   logoHoverColor: "#eb4034",
// //   link1Text: "Home",
// //   link2Text: "Products",
// //   link3Text: "Contact",
// //   link4Text: "About",
// //   link1Url: "/",
// //   link2Url: "/products",
// //   link3Url: "/contact",
// //   link4Url: "/about",
// //   link1Size: "1.3vmax",
// //   link1Color: "rgba(35, 35, 35,0.8)",
// //   nav1justifyContent: "flex-end",
// //   nav2justifyContent: "flex-end",
// //   nav3justifyContent: "flex-start",
// //   nav4justifyContent: "flex-start",
// //   link1ColorHover: "#eb4034",
// //   link1Margin: "1vmax",
// //   profileIconUrl: "/login",
// //   profileIconColor: "rgba(35, 35, 35,0.8)",
// //   searchIconColor: "rgba(35, 35, 35,0.8)",
// //   cartIconColor: "rgba(35, 35, 35,0.8)",
// //   profileIconColorHover: "#eb4034",
// //   searchIconColorHover: "#eb4034",
// //   cartIconColorHover: "#eb4034",
// //   cartIconMargin: "1vmax",
// // };

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "8vmax",

//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",

//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",

//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",

//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",

//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",

//   // ✅ YOU WERE MISSING THESE
//   profileIcon: true,
//   searchIcon: true,
//   cartIcon: true,

//   profileIconUrl: "/login",

//   profileIconColor: "rgba(35,35,35,0.8)",
//   searchIconColor: "rgba(35,35,35,0.8)",
//   cartIconColor: "rgba(35,35,35,0.8)",

//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",

//   cartIconMargin: "1vmax",
// };


// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

// export default Header;
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Ecommerce" />
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="nav-right">
        <Link to="/search"><SearchIcon /></Link>

        <Link to="/cart" className="cart-container">
          <ShoppingCartIcon />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>

        <Link to="/login">
          <PersonIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Header;

