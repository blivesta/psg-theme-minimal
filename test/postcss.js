module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-style-guide'
  ],
  'input': 'test/fixture/index.css',
  'output': 'test/fixture/bundle.css',
  'postcss-custom-properties': {
    preserve: true
  },
  'postcss-style-guide': {
    dest: './test/styleguide/index.html',
    themePath: './'
  },
  'postcss-import': {
    onImport: function(sources) {
      global.watchCSS(sources, this.from)
    }
  },
}
