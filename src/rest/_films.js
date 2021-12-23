const Router = require('@koa/router');
const filmService = require('../service/film');

const getAllfilms = async (ctx) => {
  console.log(ctx);
  ctx.body = await filmService.getAll();
};
const addFilm = async (ctx) => {
  console.log(ctx.request.body);
  const session = await filmService.addFilm(ctx.request.body);
  ctx.body = session;
};

/**
 * Install transaction routes in the given router.
 *
 * @param {Router} app - The parent router.
 */
module.exports = (app) => {
  const router = new Router({
    prefix: '/film',
  });

  router.get('/', getAllfilms);
  router.post('/add', addFilm);

  app.use(router.routes()).use(router.allowedMethods());
};
