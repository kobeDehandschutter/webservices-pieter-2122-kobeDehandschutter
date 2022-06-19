const config = require('config');
const { join } = require('path');
const knex = require('knex');
const NODE_ENV = config.get('env');
const isDevelopment = NODE_ENV === 'development';
const { getChildLogger } = require('../core/logging');

const DATABASE_CLIENT = config.get('database.client');
const DATABASE_NAME = config.get('database.name');
const DATABASE_HOST = config.get('database.host');
const DATABASE_PORT = config.get('database.port');
const DATABASE_USERNAME = config.get('database.username');
const DATABASE_PASSWORD = config.get('database.password');
let knexInstance;

const getKnexLogger = (logger, level) => (message) => {
  if (message.sql) {
    logger.log(level, message.sql);
  } else if (message.length && message.forEach) {
    message.forEach((innerMessage) =>
      logger.log(level, innerMessage.sql ? innerMessage.sql : JSON.stringify(innerMessage)));
  } else {
    logger.log(level, JSON.stringify(message));
  }
};

async function initializeData(){
  const logger = getChildLogger('database')

  const knexOptions = {
    
      client: DATABASE_CLIENT,
      connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      database: DATABASE_NAME,
      user: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      insecureAuth: isDevelopment,
      },
      debug: isDevelopment,
      log: {
        debug: getKnexLogger(logger, 'debug'),
        error: getKnexLogger(logger, 'error'),
        warn: getKnexLogger(logger, 'warn'),
        deprecate: (method, alternative) => logger.warn('Knex reported something deprecated', {
          method,
          alternative,
        }),
      },
      migrations:{
        tableName:'knex_meta',
        directory: join('src', 'data', 'migrations')
      },
      seeds:{
        directory: join('src', 'data', 'seeds')
      },
  };//

  knexInstance = knex(knexOptions);

  try {
      await knexInstance.raw('SELECT 1+1 AS result');
      
      await knexInstance.raw(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`);
  }
  catch(error){
      logger.error(error.message, {error});
      throw new Error(error,'Could not initialize the datalayer');
  }

  let migrationsFailed = true;
  try{
    await knexInstance.migrate.latest();
    migrationsFailed = false;
  } catch (error){
    logger.error('Error while migrating the database', {error});
  }
  if(migrationsFailed){
    try {
      await knexInstance.migrate.down();
    } catch (error) {
      logger.error('Error while undoing last migration', {error});
    }
    throw new Error('Migrations failed')
  }

  //ONDERSTAANDE ZIJN SEEDS, MOET NIET TIJDENS MAKEN NIEUWE MIGRATIONS
  
  if(isDevelopment){
    try {
      await knexInstance.seed.run();
    } catch (error) {
      logger.error('Error while seeding', {error});
    }
  }


  logger.info("DATA LAYER INITIALIZED");
  return knexInstance;
}

function getKnex() {
  if (!knexInstance)
    throw new Error(
      'Please initialize the data layer before getting the Knex instance'
    );
  return knexInstance;
}

async function shutdownData() {
  const logger = getChildLogger('database');

  logger.info('Shutting down database connection');

  await knexInstance.destroy();
  knexInstance = null;

  logger.info('Database connection closed');
}

const tables = Object.freeze({
  filmsOrSeries: 'filmsOrSeries',
  characters: 'characters',
  CharactersInFilms: 'CharactersInFilms',
  users: 'users',
}); 

module.exports = {
  tables,
  initializeData,
  shutdownData,
  getKnex,
};
