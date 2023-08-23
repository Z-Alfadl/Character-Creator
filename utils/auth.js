// withAuth checks if req variable has no logged_in data
// if true, redirect user from homepage to login page
// otherwise, continue user to homepage
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  