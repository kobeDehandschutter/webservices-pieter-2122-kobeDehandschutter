test('our first test should succeed', () => {
    expect(2 + 2).toBe(4);
  });

// const supertest = require('supertest');
// const createServer = require('../src/createServer');
// const { getKnex } = require('../src/data');

// module.exports.withServer = (setter) => {
// 	let server;

// 	beforeAll(async () => {
// 		server = await createServer();

// 		setter({
// 			request: supertest(server.getApp().callback()),
// 			knex: getKnex(),
			
// 		});
// 	});

// 	afterAll(async () => {
// 		await server.stop();
// 	});
// };
// /*
// module.exports.login = async (supertest) => {
// 	const response = await supertest.post('/api/users/login')
// 		.send({
// 			username: 'TestUser',
// 			password: 'TestUser',
// 		});

// 	if (response.statusCode !== 200) {
// 		throw new Error(response.body.message || 'Unknown error occured!!');
// 	}

// 	return `Bearer ${response.body.token}`;
// };
// */
// module.exports.loginAdmin = async (supertest) => {
// 	const response = await supertest.post('/api/users/login')
// 		.send({
// 			username: 'Kobe Dehandschutter',
// 			password: 'hetismijnapplicatiedusikmagadminzijn',
// 		});

// 	if (response.statusCode !== 200) {
// 		throw new Error(response.body.message || 'Unknown error occured!');
// 	}

// 	return `Bearer ${response.body.token}`;
// };
