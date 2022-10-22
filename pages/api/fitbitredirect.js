import Axios from "axios";
const {base64encode}=require("nodejs-base64")
import qs from "qs"

export default async function FitbitRedirect(req,res){


let {code}=req.query
let filteredcode=code.split('#')
let actualcode=filteredcode[0]
let base64string=base64encode("238WZ8:bff0f4bb8031cad1a0c555cff39e60f0")
let verifier=process.env.CODEV



const params={
 client_id:"238WZ8",
 code:actualcode,
 code_verifier:verifier,
 grant_type:"authorization_code",
 redirect_uri:"https://loquacious-beijinho-a06d37.netlify.app/api/fitbitredirect"
}


let response=await Axios({
 method:"post",
 url:"https://api.fitbit.com/oauth2/token",
 data:qs.stringify(params),
 headers:{
  "Content-Type":"application/x-www-form-urlencoded",
  "Authorization":`Basic ${base64string}`
 }
})
let token=await response.data.access_token
console.log(token)

res.setHeader("Set-Cookie", `fittoken=${token};path=/`)
return res.redirect("/user?fitaccess=true")

}