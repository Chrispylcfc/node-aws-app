import request from 'supertest';
import app from '../index';

describe('GET /', function() {
    it('respond with hello world', function(done) {
        
        //navigate to root and check the response is "hello world"
        request(app).get('/').expect('Hello Christopher J Powell! We\'ve done it!!!' , done);
    });
});