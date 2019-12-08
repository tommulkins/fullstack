const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/html',
    'X-tom-says': 'Hi!'
  })
  res.status(418).send('Hello World!')
})

app.listen(port, _ => console.log(`Example app listening on port ${port}!`))
