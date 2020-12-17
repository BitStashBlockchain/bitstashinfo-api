const path = require('path')

const CHAIN = Symbol('bitstash.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.bitstashinfo.lib.Chain.get(this.config.bitstash.chain)
    return this[CHAIN]
  },
  get bitstashinfo() {
    return {
      lib: require(path.resolve(this.config.bitstashinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.bitstashinfo.path, 'rpc'))
    }
  }
}
