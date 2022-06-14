const { getLogger } = require('../core/logging');
const userRepository = require('../repository/user');
const Role = require('../core/roles');
const debugLog = (message, meta) => {
  getLogger().debug(message, meta);
};
const { getChildLogger } = require('../core/logging');
/**
 * Register a new user
 *
 * @param {object} user - The user's data.
 * @param {string} user.name - The user's name.
 */
const { verifyPassword, hashPassword } = require('../core/password');

const { generateJWT, verifyJWT } = require('../core/jwt');
const makeExposedUser = ({ id, name, rights, favourite }) => ({
  id,
  name,
  rights,
  favourite,
});
const makeLoginData = async (user) => {
  const token = await generateJWT(user);
  return {
    user: makeExposedUser(user),
    token,
  };
};
const login = async (name, password) => {
  const user = await userRepository.findByName(name);

  if (!user) {
    // DO NOT expose we don't know the user
    throw new Error('The given name and password do not match');
  }
  const passwordValid = await verifyPassword(password, user.password);

  if (!passwordValid) {
    // DO NOT expose we know the user but an invalid password was given
    throw new Error('The given name and password do not match');
  }

  return await makeLoginData(user);
};
const register = async ({ name, password, favourite }) => {
  /*if (userRepository.findByName(name) !== null) {
    throw new Error('This username is taken');
  }*/

  rights = Role.USER;
  const passwordHash = await hashPassword(password);
  const user = await userRepository.create({
    name,
    passwordHash,
    rights,
    favourite,
  });
  return await makeLoginData(user);
};

const checkRole = (role, roles) => {
  const hasPermission = roles.includes(role);

  if (!hasPermission) {
    throw new Error('You are not allowed to view this part of the application');
  }
};
const checkAndParseSession = async (authHeader) => {
  if (!authHeader) {
    throw new Error('You need to be signed in');
  }

  if (!authHeader.startsWith('Bearer ')) {
    throw new Error('Invalid authentication token');
  }

  const authToken = authHeader.substr(7);
  try {
    const { roles, userId } = await verifyJWT(authToken);

    return {
      userId,
      roles,
      authToken,
    };
  } catch (error) {
    const logger = getChildLogger('user-service');
    logger.error(error.message, { error });
    throw new Error(error.message);
  }
};

const getAll = async (limit = 100, offset = 0) => {
  debugLog('Fetching all users', { limit, offset });
  const data = await userRepository.findAll(limit, offset);
  const count = await userRepository.findCount();

  return { data, count, limit, offset };
};

const getById = async (id) => {
  debugLog(`Fetching user with id ${id}`);
  const user = await userRepository.findById(id);

  if (!user) {
    throw new Error(`No user with id ${id} exists`);
  }
  return user;
};

const getByName = async (name) => {
  debugLog(`Fetching user with name ${name}`);
  const user = await userRepository.findByName(name);

  if (!user) {
    return null;
  }
  return user;
};

const updateById = async (id, { name }) => {
  return userRepository.updateById(id, { name });
};

const deleteById = async (id) => {
  const deleted = await userRepository.deleteById(id);

  if (!deleted) {
    throw new Error(`No user with is ${id} exists`);
  }
};

module.exports = {
  register,
  login,
  deleteById,
  updateById,
  getAll,
  getById,
  checkAndParseSession,
  checkRole,
  getByName,
};
