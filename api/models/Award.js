module.exports = {

  attributes: {
    marker: {
      model: 'marker',
      required: true
    },
    advertiser: {
      model: 'advertiser',
    },
    description: {  //call to action
      type: 'string',
      required: true,
    },
    pointsToAward: {
      type: 'integer',
      required: true,
    },
    status: {
      type: 'string',
      enum: ['active', 'closed', 'pending'],
      defaultsTo: 'pending',
    }
  }

}
