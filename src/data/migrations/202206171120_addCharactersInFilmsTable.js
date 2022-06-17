const { tables } = require('..')

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.CharactersInFilms,(table) =>{
            
           
            
            table.string('filmName', 50).notNullable();

            table.string('characterName', 50).notNullable();

        });
    },
    down: (knex) =>{
        return knex.schema.dropTableIfExists(tables.CharactersInFilms)
    }
}