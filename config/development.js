module.exports = {
  log: {
    level: 'silly',
    disabled: false,
  },
  cors: {
    origins: ['http://localhost:3000'],
    maxAge: 3 * 60 * 60,
  },
  database: {
    client: 'mysql2',
    host: '127.0.0.1',
    port: 3306,
    name: 'marveldatabase',
    username: 'root',
    password: '2187Kobe',
  },
  pagination: {
    limit: 100,
    offset: 0,
  },
};
