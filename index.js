const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://star151214:!!rhddl1021@cluster-dong-001.v9dzqvx.mongodb.net/', ).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})