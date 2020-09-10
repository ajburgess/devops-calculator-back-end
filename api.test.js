const supertest = require('supertest');
const api = require('./api');

describe("Testing the calculator API", () => {
    it("adds two integers", async () => {
        const response = await supertest(api).get('/add/4/5');
        expect(response.status).toBe(200);
        expect(response.body).toBe(9);
    });

    it("adds two floats", async () => {
        const response = await supertest(api).get('/add/4.45/5.1');
        expect(response.status).toBe(200);
        expect(response.body).toBe(9.55);
    });
});