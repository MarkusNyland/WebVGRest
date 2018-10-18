const request = require('supertest');
const restAPI = require('../src/api');
const repository = require('../src/repository');

beforeEach(() => {repository.initWithSomeData();});

test("Test get all", async () =>{

    const response = await request(restAPI).get('/games');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(6);
});


test("Test not found game", async () => {

    const response = await request(restAPI).get('/games/-3');
    expect(response.statusCode).toBe(404);
});


test("Test retrieve each single book", async () => {

    const responseAll = await request(restAPI).get('/games');
    expect(responseAll.statusCode).toBe(200);

    const games = responseAll.body;
    expect(games.length).toBe(6);

    for(let i=0; i<games.length; i++){

        const res = await request(restAPI).get('/games/'+games[i].id);
        const game = res.body;

        expect(game.title).toBe(games[i].title)
    }
});