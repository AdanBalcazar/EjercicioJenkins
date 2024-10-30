const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.status(200);
  res.send('OK');
  console.log('Probe enviado a /health');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 