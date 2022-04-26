import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

  export default async function getPersonById() {
  const db = await sqlite.open('./mydb.sqlite');

  if (NextApiRequest.method === 'PUT') {
    const statement = await db.prepare(
      'INSERT PERSON SET name= ?, type = ? ,link=?'
    );
    const result = await statement.run(
      NextApiRequest.query.name,
      NextApiRequest.query.type,
      NextApiRequest.query.link
    );
    result.json("New notes");
    result.finalize();
  }
}