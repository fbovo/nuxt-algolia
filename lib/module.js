const { resolve } = require('path')

const ns = 'algolia'

// eslint-disable-next-line require-await
module.exports = async function (moduleOptions) {
  const options = {
    ...this.options[ns],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: ns + '.js',
    options
  })

  // Transpile
  this.options.build.transpile.push(/^vue-instantsearch/)
  this.options.build.transpile.push(/^instantsearch.js\/es/)
}

module.exports.meta = require('../package.json')
