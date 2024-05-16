import { useEffect, useState, useContext } from "react"
import logo from "./images/logo.svg"
import { NavLink } from "react-router-dom"
import menu from "./images/icon-hamburger.svg"
import { MobileContext } from "./context/MobileNavContext"
import { MobileNavbar } from "./MobileNavbar"
const Navbar=()=>{
    const [windowWidth, setWindowWidth]=useState<number>(window.innerWidth)
    const mobileContext=useContext(MobileContext)
    if(!mobileContext){
        throw new Error("MobileContext does not exist")
    }
    const {showMobile, setShowmobile}=mobileContext
    const handleWidth=()=>{
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",handleWidth)
        return ()=>{
            window.removeEventListener("resize",handleWidth)
        }
    },[])
    
    console.log(showMobile)
    return(
        <>
        {showMobile  && <MobileNavbar/>}
        <div className="Navbar1" style={{display:showMobile? "none": "flex"}}>
            <div className="Navbar">
                <div>
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                {windowWidth> 701 &&<div className="links">
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Careers">Careers</NavLink>
                    <NavLink to="/Event">Events</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/Support">Support</NavLink>     
                </div>}
                <div style={{display:windowWidth< 701?"block":"none"}} className="men">
                    <img src={menu} onClick={()=>setShowmobile(true)} className="menu" alt="menu"/>
                </div>
            </div>
            <div className="title">
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </div>

        </>
    )
}
export default Navbar