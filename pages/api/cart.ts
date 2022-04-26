import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

  export default async function getPersonById() {
  const db = await sqlite.open('./mydb.sqlite');

  if (NextApiRequest.method === 'POST') {
    const statement = await db.prepare(
      'INSERT notes SET name= ?, type = ? ,link=?'
    );
    const result = await statement.run(
      NextApiRequest.body.name,
      NextApiRequest.body.type,
      NextApiRequest.body.link
    );
    result.json("New item in cart");
    result.finalize();
  }

  const person = await db.get('DELETE * from cart where material_id = ?', [NextApiRequest.query.material_id ]);
  NextApiResponse.json(person);
}