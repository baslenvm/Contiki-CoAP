import coap from 'coap'
var server = coap.createServer({ type: 'udp6' })

server.on('request', (req, res) => {
  console.log('req')
  console.error(req.method)
  console.log('res')
  console.error(req.url)
  console.error(req.payload)
  res.end('Hello ' + req.url.split('/')[1] + '\n')
})

// the default CoAP port is 5683
server.listen(() => {
  var coapConn = {
    host: 'localhost',
    pathname: '/Matteo',
    method: 'POST',
    confirmable: true
}
  var req = coap.request(coapConn)
req.write('Hello ' + 'server' + '\n')
  req.on('response', (res) => {
    res.pipe(process.stdout)
    res.on('end', () => {
      process.exit(0)
    })
  })

  req.end()
})
