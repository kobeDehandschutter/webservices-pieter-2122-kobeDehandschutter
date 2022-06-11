const Router = require('@koa/router');
const characterService = require('../service/characters');

const getAllCharacters = async (ctx) => {
  console.log("here");
  ctx.body = await characterService.getAll();
};
const getCharactersByFilm = async (ctx) => {
  console.log(ctx.request.body);
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

  router.get('/', getAllCharacters);
  router.post('/:film', getCharactersByFilm);

  app.use(router.routes()).use(router.allowedMethods());
};
