import { match } from "assert";
import bcrypt from "bcryptjs";
import { users } from "../data/users.js";

export const loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(u => u.email === email)
    if(user) //user found inside users array containing user objects
    {
        if(user.password === password)
            res.send("Success");
        else
            res.send("Invalid email or password");
    }
    else
    {
        res.send("Invalid email or password"); //user is not inside users
    }
}

//HASHING PASSWORD 
/*
    bcrypt.hash(password, 10, (err, hash) => {
        if(err)
            console.log("Error with hashing password")
        else
            console.log("Success");
    });

    instead of console.log add to DB

*/