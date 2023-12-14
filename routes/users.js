var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*

  // Server-side validation
  if (!username || username.length < 5) {
      return res.status(400).send('Username must be at least 5 characters long.');
  }

  const passwordRegex = /^[a-zA-Z0-9]+$/;
  if (!password || !password.match(passwordRegex) || password.length < 6) {
      return res.status(400).send('Password must be alphanumeric and at least 6 characters long.');
  }

  if (password !== confirm_password) {
      return res.status(400).send('Passwords do not match.');
  }


*/

module.exports = router;
