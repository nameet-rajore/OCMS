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
    const cart = await db.all((`Select College.College_name, Course.Course_id,Course.Course_name,user.User_name,Uploaded_Material.Material_id ,Uploaded_Material.Title,Uploaded_Material.User_id,Uploaded_Material.Cost FROM College
    INNER JOIN Offered_by ON College.College_id=Offered_by.College_id
    INNER JOIN Course ON Offered_by.Cu_id=Course.Cu_id
    INNER JOIN Uploaded_Material ON Course.Cu_id=Uploaded_Material.Cu_id
    INNER JOIN In_Cart ON Uploaded_Material.Material_id=In_cart.Material_id
    INNER JOIN Cart ON (Cart.Material_id=In_Cart.Material_id AND Cart.User_id='${req.query.userId}')
    INNER JOIN user On user.User_id=Uploaded_Material.User_id;`))
    ;
    console.log(cart);
    res.status(200).json(cart);
}

module.exports = get;