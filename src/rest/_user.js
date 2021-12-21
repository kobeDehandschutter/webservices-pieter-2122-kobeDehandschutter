const Router = require('@koa/router');
const userService = require('../service/user');
const { requireAuthentication, makeRequireRole } = require('../core/auth');

const Role = require('../core/roles');
const login = async (ctx) => {
  const { email, password } = ctx.request.body;
  const session = await userService.login(email, password);
  ctx.body = session;
};
const register = async (ctx) => {
  const session = await userService.register(ctx.request.body);
  ctx.body = session;
};
module.exports = function installUsersRoutes(app) {
  const router = new Router({
    prefix: '/users',
  });

  const requireAdmin = makeRequireRole(Role.ADMIN);

  router.post('/login', login);
  router.post('/register', register);
  router.get('/', requireAuthentication, requireAdmin, userService.getAll);
  router.get('/:id', requireAuthentication, userService.getById);
  router.put('/:id', requireAuthentication, userService.updateById);
  router.delete('/:id', requireAuthentication, userService.deleteById);

  app.use(router.routes()).use(router.allowedMethods());
};
