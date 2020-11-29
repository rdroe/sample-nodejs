var express = require('express')
var router = express.Router()

/* GET home page. */


const test = router.get('/test', (req, res) => {
  res.send('helloq')
})


module.exports = {  test }
