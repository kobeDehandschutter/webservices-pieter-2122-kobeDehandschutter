const config = require('config');
const { getChildLogger } = require('../core/logging');
const filmRepository = require('../repository/film');

const DEFAULT_PAGINATION_LIMIT = config.get('pagination.limit');
const DEFAULT_PAGINATION_OFFSET = config.get('pagination.offset');

const debugLog = (message, meta = {}) => {
  if (!this.logger) this.logger = getChildLogger('film-service');
  this.logger.debug(message, meta);
};

/**
 * Get all `limit` places, skip the first `offset`.
 *
 * @param {number} [limit] - Nr of places to fetch.
 * @param {number} [offset] - Nr of places to skip.
 */
const getAll = async (
  limit = DEFAULT_PAGINATION_LIMIT,
  offset = DEFAULT_PAGINATION_OFFSET
) => {
  debugLog('Fetching all films', { limit, offset });
  const data = await filmRepository.findAll({ limit, offset });
  const count = await filmRepository.findCount();
  return { data, count };
};

/**
 * Get the place with the given `id`.
 *
 * @param {string} id - Id of the place to get.
 */
const getById = (id) => {
  debugLog(`Fetching film with id ${id}`);
  return filmRepository.findById(id);
};

/**
 * Create a new place.
 *
 * @param {object} film - Place to create.
 * @param {string} film.name - Name of the place.
 * @param {number} [film.rating] - Rating of the place (between 1 and 5).
 */
const create = ({ name, rating }) => {
  const newfilm = { name, rating };
  debugLog('Creating new film', newfilm);
  return filmRepository.create(newfilm);
};

/**
 * Update an existing place.
 *
 * @param {string} id - Id of the place to update.
 * @param {object} film - Place to save.
 * @param {string} [film.name] - Name of the place.
 * @param {number} [film.rating] - Rating of the place (between 1 and 5).
 */
const updateById = (id, { name, rating }) => {
  const updatedfilm = { name, rating };
  debugLog(`Updating film with id ${id}`, updatedfilm);
  return filmRepository.updateById(id, updatedfilm);
};

/**
 * Delete an existing place.
 *
 * @param {string} id - Id of the place to delete.
 */
const deleteById = async (id) => {
  debugLog(`Deleting film with id ${id}`);
  await filmRepository.deleteById(id);
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
