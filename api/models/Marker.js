/**
 * A marker doesnt necessarily require an advertiser.
 *
 * @type {{attributes: {name: {type: string, required: boolean}, streetAddress: {type: string, required: boolean}, city: {type: string, required: boolean}, state: {type: string, required: boolean}, zipcode: {type: string, required: boolean}, awards: {collection: string}, loc: {type: string, required: boolean}, advertiser: {model: string}}}}
 */
module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    streetAddress: {
      type: 'string',
      required: true,
    },
    city: {
      type: 'string',
      required: true,
    },
    state: {
      type: 'string',
      required: true,
    },
    zipcode: {
      type: 'string',
      required: true,
    },
    awards: {
      collection: 'award',
    },
    loc: {  //GEOJSON object
      type: 'json',
      required: true,
    },
    advertiser: {
      model: 'advertiser'
    }
  }

}
