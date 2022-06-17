const { tables } = require('..')

module.exports = {
    up: async (knex) => {
        await knex.schema.createTable(tables.users,(table) =>{
            
            table.uuid('id')
            .primary();
            
            table.string('name', 100).notNullable();

            table.string('password', 200).notNullable();

            table.string('rights', 20).notNullable();

            table.string('favourite', 50).notNullable();
            

        });
    },
    down: (knex) =>{
        return knex.schema.dropTableIfExists(tables.users)
    }
}