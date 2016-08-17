module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    markers: {
      collection: 'marker',
      via: 'advertiser'
    }
  }

}
