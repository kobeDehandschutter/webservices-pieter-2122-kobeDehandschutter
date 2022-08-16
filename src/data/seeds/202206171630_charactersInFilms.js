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
      {
        filmName: 'Ant-Man',
        characterName: 'Ant-Man',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Ant-Man',
      },
      {
        filmName: 'Ant-Man and the Wasp',
        characterName: 'Ant-Man',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Ant-Man',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Black Panther',
      },
      {
        filmName: 'Black Panther',
        characterName: 'Black Panther',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Black Panther',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Black Panther',
      },
      {
        filmName: 'Iron Man 2',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Black Widow',
      },
      {
        filmName: 'The Avengers',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Captain America: The Winter Soldier',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Black Widow',
      },
      {
        filmName: 'What If',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Black Widow',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Captain Marvel',
        characterName: 'Black Widow',
      },
      {
        filmName: 'Captain America: the First Avenger',
        characterName: 'Captain America',
      },
      {
        filmName: 'The Avengers',
        characterName: 'Captain America',
      },
      {
        filmName: 'Captain America: The Winter Soldier',
        characterName: 'Captain America',
      },
      {
        filmName: 'Ant-Man',
        characterName: 'Captain America',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Captain America',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Captain America',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Captain America',
      },
      {
        filmName: 'Captain Marvel',
        characterName: 'Captain America',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Captain America',
      },
      {
        filmName: 'What If',
        characterName: 'Captain America',
      },
      {
        filmName: 'Captain Marvel',
        characterName: 'Captain Marvel',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Captain Marvel',
      },
      {
        filmName: 'Shang-Chi and the Legend of the Ten Rings',
        characterName: 'Captain Marvel',
      },
      {
        filmName: 'Doctor Strange',
        characterName: 'Doctor Strange',
      },
      {
        filmName: 'What If',
        characterName: 'Doctor Strange',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Doctor Strange',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Doctor Strange',
      },
      {
        filmName: 'Spider-Man: No Way Home',
        characterName: 'Doctor Strange',
      },
      {
        filmName: 'Doctor Strange in the Multiverse of Madness',
        characterName: 'Doctor Strange',
      },
      {
        filmName: 'Thor: Ragnarok',
        characterName: 'Doctor Strange',
      },
      {
        filmName: 'Guardians of the Galaxy',
        characterName: 'Drax',
      },
      {
        filmName: 'Guardians of the Galaxy Vol.2',
        characterName: 'Drax',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Drax',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Drax',
      },
      {
        filmName: 'What If',
        characterName: 'Drax',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Falcon',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Falcon',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Falcon',
      },
      {
        filmName: 'Falcon and the Wintersoldier',
        characterName: 'Falcon',
      },
      {
        filmName: 'Ant-Man',
        characterName: 'Falcon',
      },
      {
        filmName: 'What If',
        characterName: 'Falcon',
      },
      {
        filmName: 'Captain America: The Winter Soldier',
        characterName: 'Falcon',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Falcon',
      },
        {
        filmName: 'Guardians of the Galaxy',
        characterName: 'Gamora',
      },
      {
        filmName: 'Guardians of the Galaxy Vol.2',
        characterName: 'Gamora',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Gamora',
      },
      {
        filmName: 'What If',
        characterName: 'Gamora',
      },{
        filmName: 'Guardians of the Galaxy',
        characterName: 'Groot',
      },
      {
        filmName: 'Guardians of the Galaxy Vol.2',
        characterName: 'Groot',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Groot',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Groot',
      },
      {
        filmName: 'What If',
        characterName: 'Hawkeye',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Hawkeye',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Hawkeye',
      },
      {
        filmName: 'Thor',
        characterName: 'Hawkeye',
      },
      {
        filmName: 'Hawkeye',
        characterName: 'Hawkeye',
      },
      {
        filmName: 'The Avengers',
        characterName: 'Hawkeye',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Hawkeye',
      },
      {
        filmName: 'The Avengers',
        characterName: 'Hulk',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Hulk',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Hulk',
      },
      {
        filmName: 'The Incredible Hulk',
        characterName: 'Hulk',
      },
      {
        filmName: 'Iron Man 3',
        characterName: 'Hulk',
      },
      {
        filmName: 'Thor: Ragnarok',
        characterName: 'Hulk',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Hulk',
      },
      {
        filmName: 'Captain Marvel',
        characterName: 'Hulk',
      },
      {
        filmName: 'Shang-Chi and the legend of the Ten Rings',
        characterName: 'Hulk',
      },
      {
        filmName: 'What If',
        characterName: 'Hulk',
      },
      {
        filmName: 'What If',
        characterName: 'Loki',
      },
      {
        filmName: 'Loki',
        characterName: 'Loki',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Loki',
      },
      {
        filmName: 'The Avengers',
        characterName: 'Loki',
      },
      {
        filmName: 'Thor',
        characterName: 'Loki',
      },
      {
        filmName: 'Thor: The Dark World',
        characterName: 'Loki',
      },
      {
        filmName: 'Thor: Ragnarok',
        characterName: 'Loki',
      },
      {
        filmName: 'Guardians of the Galaxy Vol.2',
        characterName: 'Mantis',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Mantis',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Mantis',
      },{
        filmName: 'Guardians of the Galaxy',
        characterName: 'Nebula',
      },
      {
        filmName: 'Guardians of the Galaxy Vol.2',
        characterName: 'Nebula',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Nebula',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Nebula',
      },
      {
        filmName: 'What If',
        characterName: 'Nebula',
      },
      {
        filmName: 'Captain America: The Winter Soldier',
        characterName: 'Quicksilver',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Quicksilver',
      },{
        filmName: 'Guardians of the Galaxy',
        characterName: 'Rocket Raccoon',
      },
      {
        filmName: 'Guardians of the Galaxy Vol.2',
        characterName: 'Rocket Raccoon',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Rocket Raccoon',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Rocket Raccoon',
      },
      {
        filmName: 'Captain America: The Winter Soldier',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'Wandavision',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'What If',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'Doctor Strange in the Multiverse of Madness',
        characterName: 'Scarlet Witch',
      },
      {
        filmName: 'What If',
        characterName: 'Spider-man',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Spider-man',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Spider-man',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Spider-man',
      },
      {
        filmName: 'Spider-Man: Homecoming',
        characterName: 'Spider-man',
      },
      {
        filmName: 'Spider-Man: Far From Home',
        characterName: 'Spider-man',
      },
      {
        filmName: 'Spider-Man: No Way Home',
        characterName: 'Spider-man',
      },
      {
        filmName: 'Guardians of the Galaxy',
        characterName: 'Starlord',
      },
      {
        filmName: 'Guardians of the Galaxy Vol.2',
        characterName: 'Starlord',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Starlord',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Starlord',
      },
      {
        filmName: 'What If',
        characterName: 'Starlord',
      },
      {
        filmName: 'What If',
        characterName: 'Thanos',
      },
      {
        filmName: 'Guardians of the Galaxy',
        characterName: 'Thanos',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Thanos',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Thanos',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Thanos',
      },
      {
        filmName: 'The Avengers',
        characterName: 'Thanos',
      },
      {
        filmName: 'The Avengers',
        characterName: 'Thor',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Thor',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Thor',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Thor',
      },
      {
        filmName: 'Thor',
        characterName: 'Thor',
      },
      {
        filmName: 'Thor: The Dark World',
        characterName: 'Thor',
      },
      {
        filmName: 'Thor: Ragnarok',
        characterName: 'Thor',
      },
      {
        filmName: 'Doctor Strange',
        characterName: 'Thor',
      },
      {
        filmName: 'What If',
        characterName: 'Thor',
      },
      {
        filmName: 'Thor: Love and Thunder',
        characterName: 'Thor',
      },
      {
        filmName: 'Thor: Love and Thunder',
        characterName: 'Nebula',
      },
      {
        filmName: 'Thor: Love and Thunder',
        characterName: 'Groot',
      },
      {
        filmName: 'Thor: Love and Thunder',
        characterName: 'Rocket raccoon',
      },
      {
        filmName: 'Thor: Love and Thunder',
        characterName: 'Starlord',
      },
      {
        filmName: 'Thor: Love and Thunder',
        characterName: 'Drax',
      },
      {
        filmName: 'Thor: Love and Thunder',
        characterName: 'Mantis',
      },
      {
        filmName: 'What If',
        characterName: 'Vision',
      },
      {
        filmName: 'Wandavision',
        characterName: 'Vision',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Vision',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Vision',
      },
      {
        filmName: 'Avengers: Age of Ultron',
        characterName: 'Vision',
      },
      {
        filmName: 'Ant-Man',
        characterName: 'Wasp',
      },
      {
        filmName: 'Ant-Man and the Wasp',
        characterName: 'Wasp',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Wasp',
      },
      {
        filmName: 'What If',
        characterName: 'Wasp',
      },
      {
        filmName: 'Avengers: Endgame',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'What If',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Avengers: Infinity War',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Captain America: Civil War',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Black Panther',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Captain America: the First Avenger',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Captain America: The Winter Soldier',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Ant-Man',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Falcon and the Wintersoldier',
        characterName: 'Winter Soldier',
      },
      {
        filmName: 'Ms. Marvel',
        characterName: 'Ms. Marvel',
      },
      {
        filmName: 'Ms. Marvel',
        characterName: 'Captain Marvel',
      },
      {
        filmName: 'She-Hulk: Attorney at Law',
        characterName: 'She-Hulk',
      },
      {
        filmName: 'She-Hulk: Attorney at Law',
        characterName: 'Hulk',
      },
      {
        filmName: 'Black Panther: Wakanda Forever',
        characterName: 'Namor',
      },
      {
        filmName: 'Ant-Man and the Wasp: Quantumania',
        characterName: 'Ant-Man',
      },
      {
        filmName: 'Ant-Man and the Wasp: Quantumania',
        characterName: 'Wasp',
      },
      {
        filmName: 'Ant-Man and the Wasp: Quantumania',
        characterName: 'Kang',
      },
      {
        filmName: 'Loki',
        characterName: 'Kang',
      },
      {
        filmName: 'Guardians of the Galaxy Vol. 3',
        characterName: 'Starlord',
      },
      {
        filmName: 'Guardians of the Galaxy Vol. 3',
        characterName: 'Mantis',
      },
      {
        filmName: 'Guardians of the Galaxy Vol. 3',
        characterName: 'Rocket raccoon',
      },
      {
        filmName: 'Guardians of the Galaxy Vol. 3',
        characterName: 'Groot',
      },
      {
        filmName: 'Guardians of the Galaxy Vol. 3',
        characterName: 'Drax',
      },
      {
        filmName: 'Guardians of the Galaxy Vol. 3',
        characterName: 'Nebula',
      },
      {
        filmName: 'Guardians of the Galaxy Vol. 3',
        characterName: 'Thor',
      },
      {
        filmName: 'The Marvels',
        characterName: 'Ms. Marvel',
      },
      {
        filmName: 'The Marvels',
        characterName: 'Captain Marvel',
      },
      
    ]);
  },
};
