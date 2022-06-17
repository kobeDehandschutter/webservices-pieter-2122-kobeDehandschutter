const { tables } = require('..')

module.exports = {
    up: async (knex) => {
        // return knex.schema.dropTableIfExists(tables.filmsOrSeries)
       
    },
    down: async (knex) =>{
        //  await knex.schema.createTable(tables.filmsOrSeries,(table) =>{
            
        //     table.tinyint('id')
        //     .primary();
            
        //     table.string('title', 100).notNullable();

        //     table.string('filmorserie', 10).notNullable();

        //     table.date('releasedate').notNullable();

        //     table.string('photo', 200).notNullable();
            
        //     table.string('summary', 10000).notNullable();
            
                
        // });
    }
}