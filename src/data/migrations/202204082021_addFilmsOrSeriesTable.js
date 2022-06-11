// const { tables } = require('..')

// module.exports = {
//     up: async (knex) => {
//         await knex.schema.createTable(tables.filmsOrSeries,(table) =>{
            
//             table.uuid('id')
//             .primary();
            
//             table.string('title', 255).notNullable();

//             table.string('filmorserie').notNullable();

//             table.string('releasedate').notNullable();

//             table.string('photo').notNullable();
            
//             table.string('summary').notNullable();
            

//         });
//     },
//     down: (knex) =>{
//         return null //knex.schema.dropTableIfExists(tables.filmsOrSeries)
//     }
// }