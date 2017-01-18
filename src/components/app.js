const React = require('react')
const _ = require('lodash')

//components
// const ProductRow = require('./product-row')
// const CartRow = require('./cart-row')

module.exports = function App (props) {
  console.log('props', props)
  console.log('state', props.store.getState())

  return (
    <div className="shop">
      <h1>SHOP</h1>
        <table>
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>PRICE</th>
              <th>stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>

      <h2>CART</h2>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <p>Total : $ {0}</p>
        <button type="button" name="checkout" id="checkout">checkout</button>
    </div>
  )
}
