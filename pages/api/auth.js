import path from "path"
import { Router } from "next/dist/client/router";

const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const {open} = require('sqlite');


async function openDB (){
   return open({
       filename : path.join(process.cwd(), 'db.sqlite'),
       driver: sqlite3.Database
   })
}

async function auth(req,res) {
   const db = await openDB();
   const user = await db.get((`Select User_id, User_name From user where Email_id='${req.query.emailID}' and User_password= '${req.query.password}';`));
   if(!!user){
         res.status(200).json({userId:user['User_id'],userName: user['User_name'], message:"Successful Login"});
   }
   else
   res.status(200).json({message:"Try Again"});
}

module.exports = auth;