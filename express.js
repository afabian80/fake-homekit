const express = require('express')
const app = express()
const port = 80

app.get('/controller/1700/ON', (request, response) => {
  console.log('on_url')
  response.send('On')
})

app.get('/controller/1700/OFF', (request, response) => {
  console.log('off_url')
  response.send('Off')
})

app.get('/status/100059', (request, response) => {
  console.log('status_url')
  response.send('OK')
})

app.get('/status/100054', (request, response) => {
  console.log('brightnesslvl_url')
  response.send('50')
})

app.get('/controller/1707/%b', (request, response) => {
  console.log('brightness_url')
  response.send('60')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
