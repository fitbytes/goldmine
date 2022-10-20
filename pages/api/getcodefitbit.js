import {createHash} from "node:crypto";



export default function getcodefitbit(req,res){


let codeverifier=process.env.CODEV 
let codechallange=createHash('sha256').update(codeverifier).digest("base64url")
let URL=`https://www.fitbit.com/oauth2/authorize?client_id=238WZ8&response_type=code&code_challenge=${codechallange}&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep%20social%20temperature%20weight`

return res.redirect(URL)

}