const { tables } = require('..');
const Role = require('../../core/roles');

module.exports = {
  seed: async (knex) => {
    // first delete all entries
    await knex(tables.users).delete();

    await knex(tables.users).insert([
      {
        id: '3351e07b-05a9-4611-8d1a-8d63097f4e52',
        name: 'Kobe Dehandschutter',
        password: '$argon2id$v=19$m=131072,t=6,p=1$e4s1nHuXlVl8q2WORKBI2g$4qlwTBSZN2MU4W+e6AYai41Q8zkPVacoUUWLfPgX42g',
        rights: Role.ADMIN,
        favourite: 'Scarlet Witch',
      },
      {
        id: 'a9634b68-ef4e-4f6b-9a8e-6d5580482279',
        name: 'TestUser',
        password: '$argon2id$v=19$m=131072,t=6,p=1$pPbXNHXIZKhhpaheeYZF6w$ysmtO2BTA3FrOeRCnOCPD36HvLKJCsIr71OYPi0i6cg',
        rights: Role.USER,
        favourite: 'Doctor Strange',
      },
      {
        id: '72047e1d-64f6-46ca-b5a2-9e9195e27e96',
        name: 'Jarne',
        password: '$argon2id$v=19$m=131072,t=6,p=1$Usf9xJgsm0sx6NgJBgRwhg$M8RIrpA7rGdHRrHMZMjcYGyMNJ9DNFxYVuWpr+nN820',
        rights: Role.USER,
        favourite: 'Spider-man',
      },
    ]);
  },
};