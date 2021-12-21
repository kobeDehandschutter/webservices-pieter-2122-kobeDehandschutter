const uuid = require('uuid');
const { tables, getKnex } = require('../data');
const { getChildLogger } = require('../core/logging');

/**
 * Get all `limit` users, skip the first `offset`.
 *
 * @param {object} pagination - Pagination options
 * @param {number} pagination.limit - Nr of transactions to return.
 * @param {number} pagination.offset - Nr of transactions to skip.
 */
const findAll = ({ limit, offset }) => {
  return getKnex()(tables.users).select().limit(limit).offset(offset);
};

/**
 * Calculate the total number of user.
 */
const findCount = async () => {
  const [count] = await getKnex(tables.users).count();
  return count['count(*)'];
};

/**
 * Find a user with the given id.
 *
 * @param {string} id - The id to search for.
 */
const findById = (id) => {
  return getKnex()(tables.users).where('id', id).first();
};

const findByName = (name) => {
  console.log(name);
  return getKnex()(tables.users).where('name', name).first();
};

/**
 * Create a new user with the given `name`.
 *
 * @param {object} user - User to create.
 * @param {string} user.name - Name of the user.
 */
const create = async ({ name, passwordHash, rights, favourite }) => {
  try {
    const id = uuid.v4();
    await getKnex()(tables.users).insert({
      id: id,
      rights: JSON.stringify(rights),
      name,
      password: passwordHash,
      favourite,
    });
    return await findById(id);
  } catch (error) {
    const logger = getChildLogger('users-repo');
    logger.error('Error in create', {
      error,
    });
    throw error;
  }
};

/**
 * Update a user with the given `id`.
 *
 * @param {string} id - Id of the user to update.
 * @param {object} user - User to save.
 * @param {string} user.name - Name of the user.
 */
const updateById = async (id, { name }) => {
  try {
    await getKnex()(tables.users)
      .update({
        name,
      })
      .where('id', id);
    return await findById(id);
  } catch (error) {
    const logger = getChildLogger('users-repo');
    logger.error('Error in updateById', {
      error,
    });
    throw error;
  }
};

/**
 * Update a user with the given `id`.
 *
 * @param {string} id - Id of the user to delete.
 */
const deleteById = async (id) => {
  try {
    const rowsAffected = await getKnex()(tables.users).delete().where('id', id);
    return rowsAffected > 0;
  } catch (error) {
    const logger = getChildLogger('users-repo');
    logger.error('Error in deleteById', {
      error,
    });
    throw error;
  }
};

module.exports = {
  findAll,
  findCount,
  findById,
  create,
  updateById,
  deleteById,
  findByName,
};
