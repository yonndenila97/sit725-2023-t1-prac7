let expect = require('chai').expect;
let request = require('request');
let url = 'http://localhost:3000/api/Cats'
let cat = {
    title: 'title-test',
    link: 'title-test',
    path: 'title-test',
    description: 'title-test'
}

describe('test get all cat', function () {
    it('return status code of 200', function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return successful message', function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('Successful');
            done();

        });
    });

    it('returns an array', function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('test post a cat', function() {
    it('insert a cat to database', function (done) {
        request.post({url:url, form:cat}, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('Cat successfully added');
            done();
        });
    });
});

describe('delete a cat', function() {
    it('delete a cat from database', function (done) {
        request.delete({url:url, form:cat}, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('Successfully Removed');
            done();
        });
    });
});
