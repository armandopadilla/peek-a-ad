module.exports = {


  /**
   * Create a new user.
   *
   * @param req
   * @param res
   */
  create: function create(req, res){

    const username = req.param('username');
    const email = req.param('email');

    User.create({username, email, availablePoints: 0 })
      .then(user => res.json({data: user}))
      .catch(err => res.serverError(err));

  },


  /**
   * Fetch the user!
   */
  fetch: function fetch(req, res) {

    const userId = req.param('id');

    User.findOne(userId)
      .then(user => res.json({data: user || {}}))
      .catch(err => res.serverError(err));
  }

}
