const Koa = require('koa');
const config = require('config');
const koaCors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const { initializeLogger, getLogger } = require('./core/logging');
const { initializeData } = require('./data');
const installRest = require('./rest');

const NODE_ENV = 'development';
const CORS_ORIGINS = config.get('cors.origins');
const CORS_MAX_AGE = config.get('cors.maxAge');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');

async function main() {
  initializeLogger({
    level: LOG_LEVEL,
    disabled: LOG_DISABLED, 
    isProduction: NODE_ENV === 'production',
    defaultMeta: { NODE_ENV },
  });

  await initializeData();

  const app = new Koa();

  // Add CORS
  app.use(
    koaCors({
      origin: (ctx) => {
        if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
          return ctx.request.header.origin;
        }
        // Not a valid domain at this point, let's return the first valid as we should return a string
        return CORS_ORIGINS[0];
      },
      allowHeaders: ['Accept', 'Content-Type', 'Authorization'],
      maxAge: CORS_MAX_AGE,
    })
  );

  const logger = getLogger();

  app.use(bodyParser());

  installRest(app);

  const port = process.env.PORT || 9000;
  app.listen(port);
  logger.info(`🚀 Server listening on http://localhost:${port}`);
}

// Wrap inside a main function as top level await is not supported in all NodeJS versions
main();

/*


  const mysql = require('mysql2/promise');

  const pool = await mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '2187Kobe',
    database: 'marveldatabase',
    connectionLimit: 10,
  });

  [result] = await pool.query(`select * from filmsOrSeries;`);
  console.log(result);*/

// INSERT INTO films(Title)
//         // VALUES ('thor, The dark world')

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
