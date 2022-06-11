// const { tables } = require('..')

// module.exports = {
//     up: async (knex) => {
//         await knex.schema.createTable(tables.users,(table) =>{
            
//             table.uuid('id')
//             .primary();
            
//             table.string('name', 255).notNullable();

//             table.unique('username', 'idx_users_username_unique');

//             table.string('password').notNullable();

//             table.string('rights').notNullable();

//             table.string('favourite').notNullable();
            

//         });
//     },
//     down: (knex) =>{
//         return null //knex.schema.dropTableIfExists(tables.users)
//     }
// }