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

async function del (req, res){
    const db= await openDB();
    console.log(req.query);
    const remove = await db.all((`
    DELETE from Cart where User_id='${req.query.userId}' AND Material_id='${req.query.materialId}';`));
    res.status(200).json(remove);
}

module.exports = del;