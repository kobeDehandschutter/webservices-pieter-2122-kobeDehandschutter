const Router = require('@koa/router');
const characterService = require('../service/characters');

const { requireAuthentication, makeRequireRole } = require('../core/auth');
const filmService = require('../service/film');
const Role = require('../core/roles');

const getAllCharacters = async (ctx) => {
  console.log("we zijn verkeerd ");
  ctx.body = await characterService.getAll();
};
const getCharactersByFilm = async (ctx) => {
  console.log("we zijn hier eh");
  const session = await characterService.findByFilm(ctx.params.film);
  ctx.body = session;
};

/**
 * Install transaction routes in the given router.
 *
 * @param {Router} app - The parent router.
 */
module.exports = (app) => {
  const router = new Router({
    prefix: '/characters',
  });

  const requireAdmin = makeRequireRole(Role.ADMIN);

  router.get('/',requireAuthentication,  getAllCharacters);
  router.get('/:film', getCharactersByFilm);

  app.use(router.routes()).use(router.allowedMethods());
};
