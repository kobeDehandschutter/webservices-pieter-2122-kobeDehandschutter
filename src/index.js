let result;
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

  [result] = await pool.query(`select * from films;`);
  console.log(result);
}

// INSERT INTO films(Title)
//         // VALUES ('thor, The dark world')
main();

// const Koa = require('koa');
// const app = new Koa();

// app.use(async (ctx, next) => {
//   ctx.body = result;
//   await next();
// });

// app.use(async (ctx, next) => {
//   console.log(ctx);
//   await next();
// });

// app.listen(9000);
