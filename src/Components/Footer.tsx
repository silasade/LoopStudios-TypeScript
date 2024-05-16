import logo from "./images/logo.svg"
import { NavLink } from "react-router-dom"
import facebook from "./images/icon-facebook.svg"
import twitter from "./images/icon-twitter.svg"
import pintrerest from "./images/icon-pinterest.svg"
import instargram from "./images/icon-instagram.svg"
function Footer(){
    return(
        <footer className="footer">
            <div className="image-links">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="link">
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Careers">Careers</NavLink>
                    <NavLink to="/Event">Events</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/Support">Support</NavLink>     
                </div>
            </div>
            <div className="social">
                <div className="social-media">
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={pintrerest} alt="pinterest"/>
                    <img src={instargram}  alt="instargram"/>
                </div>
                <div>
                    <h5>&copy; 2021 Loopstudios. All rights reserved.</h5>
                </div>
            </div>

        </footer>
    )
}
export default Footer