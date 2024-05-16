import First from "./First"
import Creations from "./Creations"
import Footer from "./Footer"
import { useContext } from "react"
import { MobileContext } from "./context/MobileNavContext"
import Navbar from "./Navbar"
function Home(){
    const mobileContext=useContext(MobileContext)
    if(!mobileContext){
        throw new Error("MobileContext does not exist")
    }
    const {showMobile, setShowmobile}=mobileContext
    return(
        <>
        
        <div>
            
            {!showMobile &&<First/>}
            {!showMobile &&<Creations/>}
            {!showMobile &&<Footer/>}
        </div>
        </>
    )
}
export default Home