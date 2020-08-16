const supertest = require('supertest');

const app = require('../../app');

describe('GET /api/v1/countries', () => {
  it('should respond with an array of countries', async () => {
    const response = await supertest(app)
      .get('/api/v1/countries')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should respond with an individual country', async () => {
    const response = await supertest(app)
      .get('/api/v1/countries/1')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.id).toBe(1);
  });

  it('should respond with a 404 for a not found country', async () => {
    await supertest(app)
      .get('/api/v1/countries/4200')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
