async function main() {
  const mysql = require('mysql2/promise');

  const pool = await mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '2187Kobe',
    database: 'examenopdrachtwebservices',
    connectionLimit: 10,
  });

  const [result] = await pool.query('SELECT * from films;');

  console.log(result);
}

main();
