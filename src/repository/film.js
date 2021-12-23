const uuid = require('uuid');
const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

/**
 * Find all `limit` places, skip the first `offset`.
 *
 * @param {object} pagination - Pagination options
 * @param {number} pagination.limit - Nr of places to return.
 * @param {number} pagination.offset - Nr of places to skip.
 */
const findAll = ({ limit, offset }) => {
  return getKnex()(tables.filmsOrSeries).select().limit(limit).offset(offset);
};

const addFilm = async ({
  id,
  title,
  filmOrSerie,
  releaseDate,
  photo,
  summary,
}) => {
  try {
    await getKnex()(tables.filmsOrSeries).insert({
      id,
      title,
      filmOrSerie,
      releaseDate,
      photo,
      summary,
    });
    return await findAll(100, 0);
  } catch (error) {
    const logger = getChildLogger('film-repo');
    logger.error('Error in addFilm', {
      error,
    });
    throw error;
  }
};

module.exports = {
  findAll,
  addFilm,
};
