var request = require('supertest');
var should = require("should");

var app = require("./app");

var user_data = {}

describe('User API Routing', function() {
  before(function(done) {
    server = app.listen(done);
	});

	after(function() {
		server.close();
	});

  //Test cases for adding a user
  describe('API to get a list of users', function() {
    it('should return a list of users with a call to GET /', function(done) {
      function check(err, data) {

        user_data = data.body;

        done(err);
      }

      request(server)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200, check);
    });
  });
});
