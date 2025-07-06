 import { useState } from "react"
 import axios from "axios"
 import { useContext } from "react";
import { MyContext } from "./context.jsx";


 const Registration=()=>{
     const {s, setS, dark}= useContext(MyContext)
const [ nm,satName]=useState("")
const [ em,satEmail]=useState("")
const [num,satNumber]=useState("")
const [pass,satPassword]=useState("")
const [cpass,satCpass]=useState("")

const obj={
    "name":nm,
    "email":em,
    "number":num,
    "password":pass,
    "cpass":cpass
}


const sub=()=>{
    axios.post("http://localhost:3000/submited",obj)
    satName("")
    satEmail("")
    satNumber("")
    satPassword("")
    satCpass("")
}
console.log(obj)

    return(
        <>
        <div>
        <form action=" "style={{ color: (s % 2 == 0) ? "rgb(88, 88, 90)" : "white", background: (s % 2 == 0) ? "white" : "rgb(87, 87, 89)" }}>
            <input type="text" value={nm} onChange={(e)=>{satName(e.target.value)}} placeholder="Enter the name" />
            <input type="text" value={em} onChange={(e)=>{satEmail(e.target.value)}} placeholder="Enter the email" />
            <input type="text" value={num} onChange={(e)=>{satNumber(e.target.value)}} placeholder="Enter the number" />
            <input type="text" value={pass} onChange={(e)=>{satPassword(e.target.value)}} placeholder="Enter the password" />
            <input type="text" value={cpass} onChange={(e)=>{satCpass(e.target.value)}} placeholder="Enter the cpass" />
            <button onClick={sub}>submit</button>
        </form>
        </div>
        </>
    )
}
export default Registration;