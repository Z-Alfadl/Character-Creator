const router = require('express').Router();
const { User, Avatar, Item, Comment } = require('../models');
const withAuth = require('../utils/auth');

// ================================================================================================ //
// Gets all of the characters and should display on the homepage. 
// We do not need authorization for people to view this page. That is you don't have to be logged in to view 
// Will need to include the item model here eventually
router.get('/', async (req, res) => {
  try {
    const characterData = await Avatar.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const characters = characterData.map((post) => post.get({ plain: true }));
    console.log(characters)
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
router.get('/characters/:id', withAuth, async (req, res) => {
  try {
    const characterData = await Avatar.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['name']
          }
        }
      ],
    }); 

    const character = characterData.get({ plain: true });

    // We need to add a 'characters view' which will show all of the characters
    res.render('character', {
      ...character,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ================================================================================================ //
// Gets all of your characters. This is the user's dashboard. You must login to get to this part. 
// There should also be a button to navigate a user to the "create character" in the views. 
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Avatar }],
    // });

    // const user = userData.get({ plain: true });

    // res.render('dashboard', {
    //   ...user,
    //   logged_in: true
    // });
    const avatarData = await Avatar.findAll({
      where: {
        user_id: req.session.user_id
      }
    })

    const avatars = avatarData.map((avatar) => avatar.get({ plain: true }));
    res.render('dashboard', {
      avatars,
      logged_in: req.session.logged_in
    })
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})
//================================================================================================= //
// Character Creator Form

router.get('/create', withAuth, (req, res) => {
  res.render('create', {
    logged_in: req.session.logged_in
  })
});

router.get('/characters/update/:id', withAuth, async (req, res) => {
  try {
    const characterData = await Avatar.findByPk(req.params.id);
    const character = characterData.get({plain: true})
    res.render('updateform', {
      ...character,
      logged_in: req.session.logged_in
    })
  } catch (err) {
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

// This brings users to the signup page.
router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;