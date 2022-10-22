import DynamicPlot from "../components/Plot"
import Link from "next/link"
import { getCookies} from 'cookies-next';
import { useState } from "react";

export default function Fitbit(){

const [res,setRes]=useState("")

async function getFitbitData() {
     
let request=await fetch("https://api.fitbit.com/1/user/-/activities/goals/daily.json",{
     method:"get",
     headers:{
"Accept": "application/json",
"Authorization": `Bearer ${getCookies("fittoken")}`
     }
})
 let response=await request.json()
 console.log(response)
 setRes(response)
 console.log(res)
 }    

return (
 <div className="container">
  <table>
   <thead>
    <tr>
     <th>connect</th>
     <th>Actions</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>
<button className="btn btn-dark"><Link href="/api/getcodefitbit" style={{color:"white",textDecoration:"none"}}>Fitbit Connect</Link></button>
     </td>
     <td>
      <button className="btn btn-danger" onClick={()=>getFitbitData()}>get Goals</button>
     </td>
     <td>
        <div className="container">
          
          <pre  className="container bg-dark" style={{color:"white"}}>{JSON.stringify(res,null,2)}</pre>
          </div>  
      
     <DynamicPlot/>

     </td>
    </tr>
   </tbody>
  </table>

 </div>
)


}

