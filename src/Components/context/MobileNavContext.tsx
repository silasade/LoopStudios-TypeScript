import { createContext, useState } from "react"
type MobileNavContextProp={
    children:React.ReactNode
}
type stateType={
    showMobile:boolean
    setShowmobile:React.Dispatch<React.SetStateAction<boolean>>
}
export const MobileContext=createContext<stateType|undefined>(undefined)
export function MobileNavContextProvider({children}: MobileNavContextProp){
    const [showMobile, setShowmobile]=useState<boolean>(false)
    return(
        <MobileContext.Provider value={{showMobile, setShowmobile}}>
            {children}
        </MobileContext.Provider>
    )
}