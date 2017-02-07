'use strict'

const validate = require('validate.js')

let constraints = {
  field_1: {
  	presence: true,
  },
  field_2: {
  	presence: true,
  }
}

module.exports.validate = (attribs) => {
  return validate(attribs, constraints)
}