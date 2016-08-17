module.exports = {

  /**
   * Create a new advertiser!
   *
   * @param req
   * @param res
   */
  create: function create(req, res) {

    const name = req.param('name');
    const markers = req.param('markers');

    Advertiser.create({name})
      .then(advert => {

        res.json({data: advert});

      })
      .catch(err => res.serverError(err));

  },


  /**
   * Fetch all the advertisers
   *
   * @param req
   * @param res
   */
  list: function list(req, res){

    Advertiser.find().populate("markers")
      .then(ads => res.json({ data: ads || [] }))
      .catch(err => res.serverError(err));

  },


  /**
   * Fetch a specific advertiser
   *
   * @param req
   * @param res
   */
  fetch: function fetch(req, res) {

    const adId = req.param('id');

    Advertiser.findOne(adId).populate('markers')
      .then(ad => res.json({ data: ad || {} }))
      .catch(err => res.serverError(err));

  }

};



