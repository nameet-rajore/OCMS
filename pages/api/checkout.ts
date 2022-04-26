import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

  export default async function getPersonById() {
  const db = await sqlite.open('./mydb.sqlite');

  if (NextApiRequest.method === 'POST') {
    const statement = await db.prepare(
      'INSERT notes into Order SET name= ?, time = ?,materialid=?'
    );
    const result = await statement.run(
      NextApiRequest.body.name,
      NextApiRequest.body.time,
      NextApiRequest.body.material_id
    );
    
    const person = await db.get('DELETE * from cart where material_id = ?', [NextApiRequest.query.material_id ]);
    NextApiResponse.json(person);

    result.json("Checkout");
    result.finalize();
  }
}