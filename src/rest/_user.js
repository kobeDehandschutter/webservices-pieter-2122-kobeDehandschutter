const Router = require('@koa/router');
const userService = require('../service/user');
const { requireAuthentication } = require('../core/auth');

const Role = require('../core/roles');
const login = async (ctx) => {
  const { name, password } = ctx.request.body;
  const session = await userService.login(name, password);
  ctx.body = session;
};
const register = async (ctx) => {
  const session = await userService.register(ctx.request.body);
  ctx.body = session;
};
const getAll = async (ctx) => {
  ctx.body = await userService.getAll();
};
const getById = async (ctx) => {
  ctx.body = await userService.getById(ctx.params.id);
};
const getByName = async (ctx) => {
  ctx.body = await userService.getByName(ctx.params.name);
};
const updateById = async (ctx) => {
  ctx.body = await userService.updateById();
};
const deleteById = async (ctx) => {
  ctx.body = await userService.deleteById();
};
module.exports = async function installUsersRoutes(app) {
  const router = new Router({
    prefix: '/users',
  });


  const data = await userService.getAll();
 
  router.post('/login', login);
  router.post('/register', register); 
  router.get('/all', requireAuthentication, getAll);
  router.get('/:id', getById);
  router.get('/name/:name', getByName);
  router.put('/:id', requireAuthentication, updateById);
  router.delete('/:id', requireAuthentication, deleteById);

  app.use(router.routes()).use(router.allowedMethods());
};
