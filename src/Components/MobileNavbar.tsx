import logo from "./images/logo.svg";
import { NavLink } from "react-router-dom";
import close from "./images/icon-close.svg";
import { MobileContext } from "./context/MobileNavContext";
import { useContext, useEffect, useState } from "react";
import { transform } from "typescript";

export const MobileNavbar = () => {
  const mobileContext = useContext(MobileContext);
  const [show, setShow] = useState(true);

  if (!mobileContext) {
    throw new Error("Context not found");
  }

  const { showMobile, setShowmobile } = mobileContext;

  function handleClose() {
    setShow(false);
    setTimeout(() => setShowmobile(false), 2000);
  }
  const style={
    transform: !show ? "translateX(-1000px)" : "translateX(0)"
  }
  console.log(style.transform)
  return (
    <div className="nav" style={style}>
      <div className="images">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img src={close} className="close" onClick={handleClose} alt="close" />
        </div>
      </div>
      <div className="links">
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Careers">Careers</NavLink>
        <NavLink to="/Event">Events</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/Support">Support</NavLink>
      </div>
    </div>
  );
};
