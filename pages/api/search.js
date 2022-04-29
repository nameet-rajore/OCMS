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
   Select Uploaded_Material.Title,user.User_name,Uploaded_Material.Cost,Course.Course_id, Uploaded_Material.Material_Id, College.College_name From College
INNER JOIN Professor On (College.College_id=Professor.College_id AND Professor.Prof_name='${req.query.professorName}' AND College.College_name='${req.query.collegeName}')
INNER JOIN Course On (Professor.Prof_id=Course.Prof_id AND Course.Course_name='${req.query.courseName}' AND Course.Year=${req.query.year} )
INNER JOIN Uploaded_Material ON Uploaded_Material.Cu_id=Course.Cu_id
INNER JOIN user On Uploaded_Material.User_id=user.User_id
`));
if(!!{material}['material']){
res.status(200).json({material}['material']);
}
else{
   res.end(404);
}

}

export default search;