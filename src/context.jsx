import {  createContext, useState } from "react";

const MyContext=createContext()
 const MyProvider=({children})=>{
    const[s,setS]=useState(0)
const dark=()=>{
   setS(s+1)
}


    return(
        <>
        <MyContext.Provider value={{s,setS,dark}}>
           {children}
        </MyContext.Provider>
        </>
    )
 }
 export{MyContext,MyProvider}
 