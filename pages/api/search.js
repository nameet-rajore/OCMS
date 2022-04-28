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
   const material = await db.get((`
   Select Uploaded_Material.Title,user.User_name,Uploaded_Material.Cost,Uploaded_Material.Material_Id,Course.Course_id,College.College_name From Uploaded_Material,Course,user,College
Where
College.College_name='${req.query.collegeName}' AND
Uploaded_Material.Cu_id IN(select Course.Cu_id from Course where Course.Cu_id IN (Select Offered_by.Cu_id From Offered_by where Offered_by.College_id IN(Select College.College_id From College where College.College_name='${req.query.collegeName}'))) AND
Uploaded_Material.Cu_id IN(select Course.Cu_id from Course where Course.Course_name='${req.query.courseName}' AND Course.Year=${req.query.year}) AND
Course.Course_name='${req.query.courseName}' AND Course.Year=${req.query.year} AND
Uploaded_Material.Cu_id IN(select Course.Cu_id from Course where Course.Prof_id in(select Professor.Prof_id from Professor where Professor.Prof_name='${req.query.professorName}' ))AND
user.User_id IN(select Uploaded_Material.User_id from Uploaded_Material  where Uploaded_Material.Cu_id IN(select Course.Cu_id from Course where Course.Course_name='${req.query.courseName}'));
`));
res.status(200).json({material}['material']);
}

export default search;