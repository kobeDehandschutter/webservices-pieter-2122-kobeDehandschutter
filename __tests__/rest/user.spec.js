test('our first test should succeed', () => {
    expect(2 + 2).toBe(4);
  });
  

// const { tables } = require('../../src/data')
// const { withServer, loginAdmin } = require("../supertest.setup");


// describe('Users', () => {
//     let request;
//     let knex;
//     // let loginHeader;
//     let loginHeaderAdmin;

//     withServer(({request: r, knex: k}) => { 
//         request = r;
//         knex = k;
//     }) 

//     beforeAll(async () => {
//         // loginHeader = await login(request);
//         loginHeaderAdmin = await loginAdmin(request);
//     })

//     const url = '/api/users/all';

//     describe('GET /api/users/all', () => {

//         test('it should 200 and return all users', async () =>{
//             const response = await request.get(`${url}/`)
//                 .set('Authorization', loginHeaderAdmin)
    
//         expect(response.status).toBe(200)
//         expect(response.body.limit).toBe(100);
//         expect(response.body.offset).toBe(0);
//         expect(response.body.data.length).toBeGreaterThanOrEqual(3);
//             expect(response.body.data).toEqual(
//                 expect.arrayContaining([
//                     expect.objectContaining({username: 'TestUser'}),
//                 ])
//             )
//         })
//     })

//     // describe('GET /api/user/:id', () => {

//     //     test('User: it should 200 and return user with given id', async () =>{
//     //         const testUserId = '4f19c16a-8a31-4b13-869e-03868354fc20'
//     //         const response = await request.get(`${url}/${testUserId}`)
//     //             .set('Authorization', loginHeaderMVO)
            
//     //         expect(response.status).toBe(200)
//     //         expect(response.body.data).toEqual({
//     //             userId: '4f19c16a-8a31-4b13-869e-03868354fc20',
// 	// 		    username: 'TestUser',
// 	// 		    roles: 'user',
//     //             blocked: 0,
//     //             UserPreferences: null,
//     //         })
//     //     })

//     //     // test('Manager: it should 403 and throw ServiceError with message', async () =>{
//     //     //     const testUserId = '4f19c16a-8a31-4b13-869e-03868354fc20'
//     //     //     const response = await request.get(`${url}/${testUserId}`)
//     //     //         .set('Authorization', loginHeaderManager)
//     //     //     expect(response.status).toBe(403)
//     //     //     expect(response.body.code).toBe("FORBIDDEN")
//     //     //     expect(response.body.message).toBe('You are not allowed to view this part of the application')
//     //     // })

//     //     // test('User: it should 403 and throw ServiceError with message', async () =>{
//     //     //     const testUserId = '4f19c16a-8a31-4b13-869e-03868354fc20'
//     //     //     const response = await request.get(`${url}/${testUserId}`)
//     //     //         .set('Authorization', loginHeader)
//     //     //     expect(response.status).toBe(403)
//     //     //     expect(response.body.code).toBe("FORBIDDEN")
//     //     //     expect(response.body.message).toBe('You are not allowed to view this part of the application')
//     //     // })
//     // })
//     // // describe('PUT /api/user/overview/:id', () => {

//     //     test('User: it should 200 and return user with given id', async () =>{
//     //         const testManagerId = '2ffeb934-5b8e-4963-b3cb-ef95a3bb8c39'
//     //         const response = await request.put(`${url}/overview/${testManagerId}`)
//     //             .set('Authorization', loginHeaderManager)
//     //             .send({
//     //                 UserPreferences: [{"Category_id" : "54b307a8-22c8-447a-b825-a11d63d3fad2", "order" : 0}]
//     //             });
            
            
//     //         expect(response.body.data).toEqual({
//     //             userId: 'testManagerId',
// 	// 		    username: 'TestManager',
// 	// 		    roles: 'user',
//     //             blocked: 0,
//     //             UserPreferences: null,
//     //         })
//     //     })

//     // })





// })
