const validator = require('validator');

module.exports = {

  /**
   * Fetch a specific marker
   *
   * @param req
   * @param res
   */
  fetch: function fetch(req, res) {

    const markerId = req.param('id');

    Marker.findOne(markerId).populate('awards', {status: 'active'})
      .then(marker => {

        return res.json({data: marker || {} });

      })
      .catch(err => res.serverError(err));

  },


  /**
   * Fetch a list of markers.
   *
   * @param req
   * @param res
   */
  list: function list(req, res) {

    const miles = req.param('miles') || "1";
    const currentLat = req.param('clat');
    const currentLng = req.param('clng');

    if (!validator.isInt(miles, {min: 1, max: 5})) {
      return res.badRequest(new Error("miles must be between 1 to 5 miles."));
    }

    if (!validator.isFloat(currentLat) || !validator.isFloat(currentLng)) {
      return res.badRequest(new Error("Lat/Lng must be valid."));
    }

    //Query - Move to Service.
    const earthRadiusInMiles = 3959;
    const milesToRadian =  +miles / earthRadiusInMiles;

    Marker.native((err, collection) => {

      const query = {"loc": {
        $geoWithin: {
          $centerSphere: [[+currentLng, +currentLat], milesToRadian]
        }
      }}

      collection.find(query).toArray((err, results) => {

        //@todo - Foreach marker found grab the award that are active.

        return res.json({ data: results || [] });

      })

    });

  },


  /**
   * Create a new marker
   *
   * @param req
   * @param res
   */
  create:  function create(req, res) {

    const name = req.param('name');
    const streetAddress = req.param('address');
    const city = req.param('city');
    const state = req.param('state');
    const zipcode = req.param('zipcode');
    const lat = req.param('lat');
    const lng = req.param('lng');

    //Create loc
    const loc = {
      type: 'Point',
      coordinates: [+lng, +lat],
    }

    Marker.create({name, streetAddress, city, state, zipcode, loc})
      .then(marker => {

        Marker.native(function(err, collection){
          collection.ensureIndex({ loc: "2dspehere" });
        });

        return res.json({data: marker});

      }).catch(err => res.serverError(err));

  }

}
