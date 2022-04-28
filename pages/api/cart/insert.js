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

async function insert(req,res) {
    const db = await openDB();
    const material = await db.all((`Insert into Cart values('${req.query.userId}','${req.query.materialId}');`));
    console.log(req.query);
    res.status(200).json({material});
}

module.exports = insert;