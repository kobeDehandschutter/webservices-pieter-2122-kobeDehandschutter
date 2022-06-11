// const { tables } = require('..');

// module.exports = {
//   up: async (knex) => {
//     await knex.schema.alterTable(tables.user, (table) => {
//       table.jsonb('rights').notNullable();

//       table.string('name').notNullable();

//       table.string('password_hash').notNullable();
//     });
//   },
//   down: (knex) => {
//     return knex.schema.alterTable(tables.user, (table) => {
//       table.dropColumns('rights', 'name', 'password_hash');
//     });
//   },
// };
