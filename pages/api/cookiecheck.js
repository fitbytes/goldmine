
export default async function cookiecheck(req,res) {


 res.setHeader("Set-Cookie","name=meow")
 return res.send("check")

}