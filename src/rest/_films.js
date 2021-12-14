const Router = require('@koa/router');
const filmService = require('../service/film');

const getAllfilms = async (ctx) => {
  ctx.body = await filmService.getAll();
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

  app.use(router.routes()).use(router.allowedMethods());
};
