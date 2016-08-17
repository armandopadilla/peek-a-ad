/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  // Markers
  'get /v1/markers' : 'MarkerController.list',
  'get /v1/marker/:id': 'MarkerController.fetch',
  'post /v1/marker' : 'MarkerController.create',

  // User
  'get /v1/user/:id' : 'UserController.fetch',
  'post /v1/user': 'UserController.create',

  // Advertiser
  'get /v1/advertisers': 'AdvertiserController.list',
  'post /v1/advertiser': 'AdvertiserController.create',
  'get /v1/advertiser/:id': 'AdvertiserController.fetch',

  // @todo - Award
  //'post /v1/award'
  'post /v1/award/new': 'AwardController.create',
  //'post /v1/award/create-code'


};
