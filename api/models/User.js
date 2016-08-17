module.exports = {

  attributes: {
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    email: {
      type: 'string',
      required: true,
    },
    availablePoints: {
      type: 'integer',
      defaultsTo: 0
    }
  }

}
