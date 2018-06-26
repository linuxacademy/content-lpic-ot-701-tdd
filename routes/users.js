var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = {
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
  res.json(users);
});

module.exports = router;
