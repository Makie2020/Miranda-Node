const request = require('supertest')
const app = require('../app')
jest.useFakeTimers()

let token 

beforeAll((done) => {
    request(app)
        .post('/login')
        .send({
            user: 'test15',
            password: '123456'
        })
        .end((err, response) => {
            token = response.body.token; 
            done();
        });
});

describe('app', () => {
  describe('Status Bookings', () => {
    it('Index should return 200 Status', () => {
      request(app)
        .get('/bookings')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      });
    }); 
    describe('Status Rooms', () => {
      it('Index should return 200 Status', () => {
        request(app)
          .get('/rooms')
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
      });
    }); 
    describe('Status Contact', () => {
      it('Index should return 200 Status', () => {
        request(app)
          .get('/contact')
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
      });
    }); 
    describe('Status Users 401', () => {
      it('Index should return 401 Status, not token provided', () => {
        request(app)
          .get('/users')
          .expect(401);
      });
    }); 
    describe('Status Users', () => {
      it('Index should return 200 Status', () => {
        request(app)
          .get('/users')
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
      });
    }); 

}); 
