const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js')
const CracoLessPlugin = require('craco-less')

const themeVars = lessToJs(
  fs.readFileSync(path.join(__dirname, 'assets', 'less', 'antd.less'), 'utf8')
)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeVars,
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
