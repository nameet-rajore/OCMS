const withTM = require('next-transpile-modules')([' NextApiRequest', 'NextApiResponse','sqlite3']);
module.exports = withTM({ /* Your Next.js config */});

export default async function getAllVehiclesByPersonId(NextApiRequest,NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite');
    const user = await db.all('select id from user where username = ?', [NextApiRequest.query.id]);
    if(id == null)
        NextApiResponse.json("user doesnt exist");
    else{
    const enteredPass = await db.all('select password from user where username = ?', [NextApiRequest.query.id]);
    const pass = await NextApiRequest.query.password;
    console.log(user);
    }
} 