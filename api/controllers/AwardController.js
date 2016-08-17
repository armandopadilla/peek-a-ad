module.exports = {

  /**
   * Create a new award
   */
  create: function create(req, res) {

    const marker = req.param('marker');
    const advertiser = req.param('advert');
    const description = req.param('description');
    const pointsToAward = req.param('points');

    Award.create({description, pointsToAward, marker, advertiser})
      .then(award => res.json({data: award}))
      .catch(err => res.serverError(err));

  },


  /**
   * Award the points to user. yes yes plenty to be desired.  I did this in like 2 hours.
   * @todo - verify code is OK.
   */
  award: function award(req, res){

    const userId = req.param('id');
    const code = req.param('code');

    //@todo - verify the code.
    // Fetch the Award.


  },

  /**
   * Create a new code to award to the user.
   */
  createCode: function createCode(req, res){

    //Create unique 8 character string. - this might be an external system that can guarantee uniqueness
    //for now use microtime.

  },

}
