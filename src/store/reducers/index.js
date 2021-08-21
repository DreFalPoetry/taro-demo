import { combineReducers } from 'redux'

const modulesFiles = require.context('./', true, /\.js$/)
const modules = modulesFiles.keys().reduce((module, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  module[moduleName] = value.default
  return module
}, {})

delete modules.index

export default combineReducers({
  ...modules
})
