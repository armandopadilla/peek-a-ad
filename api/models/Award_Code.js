module.exports = {

  attributes: {
    award: {
      type: 'award'
    },
    code: {
      type: 'string'
    },
    status: {
      type: 'string',
      enum: ['claimed', 'ready', 'expired']
    }
  }

}
