const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')

// components
const App = require('./components/app')
const CounterApp = require('./components/counter-app')



// actions
// plain object {type: string, payload: Object | string | number}

// model -> state

// reducer (state, action) :: -> state
//const initialState = 0
const initialState = {
  products: {
    1: {id: 1, name: 'banana', stock: 2, price:2}
  },

  cart:  {

  },

  total: 0
}


const store = createStore(reducer, initialState)
// store .dispatch(action)
// reducer -> state
// store.subscribe

// store .getState -> state
console.log('store', store)
console.log('state', store.getState())

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe(() => {
    const state = store.getState()
    console.log('state', state)
    render(state)
  })


  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store} />,
      root
    )
  }

  render(store.getState())





  //store.fetchCats()


})





function counterReducer (state, action) {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default: // must have default
      return state
  }
}
