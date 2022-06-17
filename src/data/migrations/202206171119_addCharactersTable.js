const { tables } = require('..')

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.characters,(table) =>{
            
            table.string('name', 30)
            .primary();
            
            table.string('alterEgo', 30).notNullable();

            table.string('actor', 30).notNullable();

            table.string('photo', 500).notNullable();

            table.string('info', 15000).notNullable();
            
            

        });
    },
    down: (knex) =>{
        return knex.schema.dropTableIfExists(tables.characters)
    }
}