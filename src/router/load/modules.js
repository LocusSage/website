const files = require.context('../../', true, /routes\.js/)
const modules = {}

files.keys().forEach(key => {
  if (!files(key).default) {
    throw new Error('Routes must have a route configuration defined on their creation')
  }
  key.replace(/[A-z]+(?:\/routes\.js$)/, function (matched) {
    if (matched.match(/main/gi)) {
      modules[matched.replace(/\/routes\.js$/gi, '')] = files(key).default
    } else {
      modules.main.children.push(files(key).default)
    }
  })
})

export default modules
