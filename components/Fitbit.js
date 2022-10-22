import DynamicPlot from "../components/Plot"
import Link from "next/link"
export default function Fitbit(){


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
      <button className="btn btn-danger">get Steps</button>
     </td>
     <td>
      
     <DynamicPlot/>

     </td>
    </tr>
   </tbody>
  </table>

 </div>
)


}

