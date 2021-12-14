const Router = require('@koa/router');
const installfilmRouter = require('./_films');

/**
 * Install all routes in the given Koa application.
 *
 * @param {Koa} app - The Koa application.
 */
module.exports = (app) => {
  const router = new Router({
    prefix: '/api',
  });

  installfilmRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
