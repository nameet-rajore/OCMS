import path from "path"

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
   const material = await db.all('');
   res.status(200).json({material});
}

module.exports = search;