const { tables } = require('..');

module.exports = {
  seed: async (knex) => {
    // first delete all entries
    await knex(tables.CharactersInFilms).delete();

    await knex(tables.CharactersInFilms).insert([
      {
        filmName: 'Iron Man',
        characterName: 'Iron Man',
      },{
        filmName: 'The Incredible Hulk',
        characterName: 'Iron Man',
      },{
        filmName: 'Iron Man 2',
        characterName: 'Iron Man',
      },{
        filmName: 'The Avengers',
        characterName: 'Iron Man',
      },{
        filmName: 'Iron Man 3',
        characterName: 'Iron Man',
      },{
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Iron Man',
      },{
        filmName: 'Captain America: Civil War',
        characterName: 'Iron Man',
      },{
        filmName: 'Spider-Man: Homecoming',
        characterName: 'Iron Man',
      },{
        filmName: 'Avengers: Infinity War',
        characterName: 'Iron Man',
      },{
        filmName: 'Avengers: Endgame',
        characterName: 'Iron Man',
      },{
        filmName: 'Iron Man',
        characterName: 'War Machine',
      },{
        filmName: 'Iron Man 2',
        characterName: 'War Machine',
      },{
        filmName: 'Iron Man 3',
        characterName: 'War Machine',
      },{
        filmName: 'Avengers: Age of Ultron',
        characterName: 'War Machine',
      },{
        filmName: 'Captain America: Civil War',
        characterName: 'War Machine',
      },{
        filmName: 'Avengers: Infinity War',
        characterName: 'War Machine',
      },{
        filmName: 'Avengers: Endgame',
        characterName: 'War Machine',
      },{
        filmName: 'Captain Marvel',
        characterName: 'War Machine',
      },
      
    ]);
  },
};