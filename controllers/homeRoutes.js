const router = require('express').Router();
const { User, Character, Comment } = require('../models');
const withAuth = require('../utils/auth');

// ================================================================================================ //
// Gets all of the characters and should display on the homepage. 
// We do not need authorization for people to view this page. That is you don't have to be logged in to view 
router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    console.log(characterData);

    const characters = characterData.map((post) => post.get({ plain: true }));

    console.log(characters);
    
    // We need to add a 'characters view' which will show all of the characters
    res.render('homepage', {
      characters,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Gets individual characters once it's been clicked on
// But you will have to be logged into your account because from here you will be able to comment 
// on characters
router.get('/characters/:id', withAuth, async (req, res) => {
  try {
    const userData = await Character.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    }); 

    // We need to add a 'characters view' which will show all of the characters
    res.render('characters', {
      ...Character,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ================================================================================================ //
// Gets all of your characters. This is the user's dashboard. You must login to get to this part. 
// We need the withAuth helper here to authorize people going into this. There should also be a button
// to navigate a user to the "create character" in the views. 
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

// ================================================================================================ //
// Login/Logout/Signups

// This first checks if someone is logged in, if they are, then they are redirected to their dashboard. 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// This logs out the user and destroys the session. Once this is pressed, they are redirected to the login screen. 
// Not sure if this should actually be a POST method in the userRoutes
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
    res.redirect('login');
  });
});

// This brings users to the signup page. We should have a button on the login screen that asks if you want to signup instead. 
// OR we can have the login / signup on the same page. If so, we can take these lines out and include it in the login view. 
router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;