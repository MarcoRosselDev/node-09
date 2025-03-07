import 'dotenv/config';
console.log(process.env.NAME_PORT);

import pgpPromise from 'pg-promise';
const pgp = pgpPromise({});
const {PASS_PSQL, PORT_PSQL, DATABASE, NAME_PORT, HOST} = process.env;

//const db = pgp(`${DATABASE}://${NAME_PORT}:${PASS_PSQL}@host:${PORT_PSQL}/database`);
const db = pgp(`${DATABASE}://${NAME_PORT}:${PASS_PSQL}@${HOST}:${PORT_PSQL}/${DATABASE}`);

console.log(PASS_PSQL);

//const db = pgp('postgres://postgres:pol.123.pol@localhost:5001/postgres');

try {
  const customers = await db.any('select * from categories;');
  console.log(customers);
  console.log(customers[1], "query finalizada");
  
} catch (error) {
  console.log(error);
}

/* db.any('SELECT * FROM categories')
  .then((data) => {
    console.log('DATA:', data)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  }) */