var request = require('supertest');
var should = require("should");

var app = require("./app");

var test_data = {
  "users": [
    {
      "name": "Bob Dobbs",
      "username": "bdobbs",
      "email": "bdobbs@example.com"
    },
    {
      "name": "Sally Jones",
      "username": "sjones",
      "email": "sjones@example.com"
    },
    {
      "name": "Adam Stephens",
      "username": "astephens",
      "email": "astephens@example.com"
    },
    {
      "name": "Casey Roberts",
      "username": "croberts",
      "email": "croberts@example.com"
    }
  ]
}

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
        .type('json')
        .send(test_data)
        .expect(200, check);
    });
  });
});
