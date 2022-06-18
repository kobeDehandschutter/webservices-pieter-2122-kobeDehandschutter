const Router = require('@koa/router');
const { requireAuthentication, makeRequireRole } = require('../core/auth');
const filmService = require('../service/film');

const Role = require('../core/roles');

const getAllfilms = async (ctx) => {
  ctx.body = await filmService.getAll();
};
const addFilm = async (ctx) => {
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
  
  const requireAdmin = makeRequireRole(Role.ADMIN);

  router.get('/', requireAuthentication, getAllfilms);
  router.post('/add', requireAuthentication, requireAdmin, addFilm);

  app.use(router.routes()).use(router.allowedMethods());
};
