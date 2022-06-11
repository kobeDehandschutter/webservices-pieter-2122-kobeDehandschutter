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
  return getKnex()(tables.characters).select().limit(limit).offset(offset);
};

const findByFilm = (film) => {
    return getKnex()(tables.characters)
    .join(tables.CharactersInFilms)
    .where('filmName', film);
}

module.exports = {
  findAll,
  findByFilm,
};