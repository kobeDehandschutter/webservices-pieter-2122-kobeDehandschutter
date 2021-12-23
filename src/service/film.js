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
  return { data };
};

const addFilm = async ({
  id,
  title,
  filmOrSerie,
  releaseDate,
  photo,
  summary,
}) => {
  const film = await filmRepository.addFilm({
    id,
    title,
    filmOrSerie,
    releaseDate,
    photo,
    summary,
  });
  return await getAll();
};

module.exports = {
  getAll,
  addFilm,
};
