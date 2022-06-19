const config = require('config');
const { getChildLogger } = require('../core/logging');
const characterRepository = require('../repository/characters');

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
  //debugLog('Fetching all films', { limit, offset });
  const data = await characterRepository.findAll({ limit, offset });
  return { data };
};

const findByFilm = async (film) => {
    debugLog(`fetching characters in ${film}`);
    const data = await characterRepository.findByFilm(film);
    return data;
}
const getLogoByName = async (name) => {
  debugLog(`fetching logo for ${name}`);
  const data = await characterRepository.getLogoByName(name);
  return data;
}

module.exports = {
  getAll,
  findByFilm,
  getLogoByName,
};
