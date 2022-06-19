module.exports = {
  log: {
    level: 'silly',
    disabled: true,
  },
  cors: {
    origins: ['http://localhost:3000'],
    maxAge: 3 * 60 * 60,
  } ,
    // database: {
    //   client: 'mysql2',
    //   host: '127.0.0.1',
    //   port: 3306,
    //   name: 'examendatabanklokaal',
    //   username: 'root',
    //   password: 'rootp',
    // } ,
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
