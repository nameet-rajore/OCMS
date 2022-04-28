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

async function del (res, req){
    const db= await openDB();
    const remove = await db.all((`DELETE from Cart where User_id='${req.query.userId}'`));
    console.log(remove);
    res.status(200).json({message:"Item Deleted"});
}

module.exports = del;