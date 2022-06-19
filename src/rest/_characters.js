const Router = require('@koa/router');
const characterService = require('../service/characters');

const { requireAuthentication, makeRequireRole } = require('../core/auth');
const filmService = require('../service/film');
const Role = require('../core/roles');

const getAllCharacters = async (ctx) => {
  ctx.body = await characterService.getAll();
};
const getCharactersByFilm = async (ctx) => {
  const session = await characterService.findByFilm(ctx.params.film);
  ctx.body = session;
};
const getLogoByName = async (ctx) => {
  const session = await characterService.getLogoByName(ctx.params.name);
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
  router.get('/:film',requireAuthentication,  getCharactersByFilm);
  router.get('/logo/:name',  getLogoByName);

  app.use(router.routes()).use(router.allowedMethods());
};
