const router = require('express').Router();
const { User } = require('../../models');

// Signup: Create new user
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Login: Finds the user data (email and password) and if it doesn't match what's on file, then login doesn't work. 
// If everything matches, they are logged in. 
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again.'})
      return;
    };

    const validPassword = userData.checkPassword(req.body.password); 

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again.'})
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// This destroys the session and they are no longer logged in. 
// *! This is also in the homeRoutes as a GET request. Not sure if we need it in both places or just one. 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;