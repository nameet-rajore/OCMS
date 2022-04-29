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

async function search(req,res) {
   const db = await openDB();
   const insert= db.all(`INSERT INTO Uploaded_Material VALUES('${Math.floor(Math.random()*10000)}' , '${req.query.driveLink}' ,'29-apr-2022' , ${req.query.cost} ,'${req.query.title}','${req.query.userId}',(Select Cu_id From Course where Course_name='${req.query.courseName}'),'ca1911');`);
   res.status(200).json(insert);
}

module.exports = search;