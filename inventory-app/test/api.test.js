const request = require('supertest');

const app = require('../src/app');
const { message } = require('../src/constants/project');

describe('GET /api/v1', () => {
  it('responds with a json message', done => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message,
        },
        done
      );
  });
});
