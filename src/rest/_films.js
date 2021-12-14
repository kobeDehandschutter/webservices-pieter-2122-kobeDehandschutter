const Router = require('@koa/router');
const filmService = require('../service/film');

const getAllfilms = async (ctx) => {
  ctx.body = await filmService.getAll();
};

const createfilm = async (ctx) => {
  const newfilm = await filmService.create(ctx.request.body);
  ctx.body = newfilm;
};

const getfilmById = async (ctx) => {
  ctx.body = await filmService.getById(ctx.params.id);
};

const updatefilm = async (ctx) => {
  ctx.body = await filmService.updateById(ctx.params.id, ctx.request.body);
};

const deletefilm = async (ctx) => {
  await filmService.deleteById(ctx.params.id);
  ctx.status = 204;
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
  router.post('/', createfilm);
  router.get('/:id', getfilmById);
  router.put('/:id', updatefilm);
  router.delete('/:id', deletefilm);

  app.use(router.routes()).use(router.allowedMethods());
};
