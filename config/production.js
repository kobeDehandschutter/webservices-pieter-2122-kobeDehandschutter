module.exports = {
  log: {
    level: 'info',
    disabled: false,
  },
  cors: {
    origins: [
      'http://localhost:3000',
      'https://kobedehandschutter.github.io/frontendweb-karine-2122-kobeDehandschutter/',
      'https://kobedehandschutter.github.io',
    ],
    maxAge: 3 * 60 * 60,
  } /*
  database: {
    client: 'mysql2',
    host: '127.0.0.1',
    port: 3306,
    name: 'marveldatabase',
    username: 'root',
    password: '2187Kobe',
  } */,
  database: {
    client: 'mysql2',
    host: 'remotemysql.com',
    port: 3306,
    name: 'faoXDegfq7',
    username: 'faoXDegfq7',
    password: 'eS5kclFYe2',
  },
  pagination: {
    limit: 100,
    offset: 0,
  },
  auth: {
    argon: {
      saltLength: 16,
      hashLength: 32,
      timeCost: 6,
      memoryCost: 2 ** 17,
    },
    jwt: {
      secret: 'ditiseenwachtwoorddatniemandkanradenwantalleenikkenhet',
      expirationInterval: 60 * 60 * 1000, // ms (1 hour)
      issuer: 'budget.hogent.be',
      audience: 'budget.hogent.be',
    },
  },
};
