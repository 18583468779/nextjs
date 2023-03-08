import {  NextApiHandler } from "next";
import { SignIn } from "src/model/sign_in";

const Sessions :NextApiHandler = async(req,res)=>{
    const {username,password} = req.body;
    const signIn = new SignIn();
    signIn.username = username;
    signIn.password = password;
    await signIn.validate();
    if (signIn.hasErrors()) {
        res.statusCode = 422;
        res.end(JSON.stringify(signIn.errors));
    } else {
        res.statusCode = 200;
        res.end(JSON.stringify(signIn.user));
    }
    res.end();
}

export default Sessions;

