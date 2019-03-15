import request from 'supertest';
import app from '../index';

describe('GET /', function() {
    it('respond with hello world', function(done) {
        
        request(app).get('/').expect('Hello Christopher J Powell! We\'ve done it!!!' , done);
    });
});

describe('GET /football', function() {
    it('respond with football team', function(done) {
        
        request(app).get('/football').expect('Leicester City!' , done);
    });
});