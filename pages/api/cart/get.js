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

async function get(req, res){
    const db= await openDB();
    const cart = await db.all((`Select College.College_name, Course.Course_id, Uploaded_Material.Title,Uploaded_Material.User_id,Uploaded_Material.Cost FROM College,Course,Uploaded_Material,Cart
    WHERE
    Cart.User_id IN( Select user.User_id from user where user.User_id='${req.query.userId}' ) AND
    Course.Cu_id IN(select Uploaded_Material.Cu_id from Uploaded_Material where Uploaded_Material.Material_id IN(select In_Cart.Material_id From In_Cart where In_Cart.Material_id IN(select Cart.Material_id From Cart where Cart.User_id='${req.query.userId}') ))AND
    Uploaded_Material.Material_id IN(select In_Cart.Material_id From In_Cart where In_Cart.Material_id IN(select Cart.Material_id From Cart where Cart.User_id='${req.query.userId}') )
    `));
    console.log(cart);
    res.status(200).json(cart);
}

module.exports = get;