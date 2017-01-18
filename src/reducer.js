const clone = require('clone')
const _ = require('lodash')
//const initialState = {
//  appName: 'My plain JS app',
//  description: 'just a demo app',
//  products: {
//    1: {id: 1, name: 'banana', stock: 2, price:2}
//  },
//
//  cart:  {
//
//  },
//
//  total: 0
//}

module.exports = function (state, action) {
  const newState = clone(state)


  return newState

}
