import path from "path"
import { Router } from "next/dist/client/router";
import { METHODS } from "http";

const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const {open} = require('sqlite');


async function openDB (){
   return open({
       filename : path.join(process.cwd(), 'db.sqlite'),
       driver: sqlite3.Database
   })
}

async function signup(req,res) {
      const db = await openDB();
      const signUp= await db.all((`INSERT INTO user VALUES('${req.query.userId}', '${req.query.branch}','${req.query.firstName + ' ' + req.query.lastName}','${req.query.password}', ${req.query.age}, '${req.query.phoneNumber}', 'user', '${req.query.emailID}', (select College_id from College where College_name='${req.query.collegeName}'))`));
   
   res.status(200).end();
}

module.exports = signup;