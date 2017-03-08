require('babel-register')({
   presets: [ 'latest', 'stage-0' ]
})
module.export = require('./coap/app');
