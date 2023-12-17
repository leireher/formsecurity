var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  

  // Echoing back the data (excluding password for security)
  res.json({ username, email });
});

module.exports = router;
