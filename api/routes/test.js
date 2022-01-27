const { Router } = require('express')

const router = Router()

const { MongoClient } = require('mongodb')
// const test = require('./routes/test')

const uri = 'mongodb+srv://fbms:AUqLM.9S4EW26.R@cluster0.f5rok.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

router.all('/test', async function (req, res, next) {
  const collection = await client.db('test').collection('test_collection')
  await client.connect()
  await collection.insertOne(req.body)
  client.close()
  console.log(req.body)
  res.json(req.body)
})

module.exports = router
