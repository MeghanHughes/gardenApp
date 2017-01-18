onst test = require('ava')
const Store = require('../../client/store')

test('calling update() notifies anylisteners with an updated model', (t) => {
  // arrange
  t.plan(1)
  const model = {appName: 'Hello' }
  const store = Store(model)

  store.subscribe((updatedModel) => {
    // assert
    t.deepEqual(model, updatedModel)
  })

  // action
  store.update('appName', 'snowball')
})
