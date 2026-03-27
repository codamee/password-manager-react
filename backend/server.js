const express = require('express')
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv')
const cors = require("cors")

const app = express()
dotenv.config()
app.use(express.json());
app.use(cors())
// app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000

const url = process.env.MONGO_URI
const client = new MongoClient(url)
const dbName = "passMgnr"

client.connect();
console.log('Connected successfully to server');

app.get('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = await db.collection('passwords').find({}).toArray();
    res.send(collection)
})
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const result = await collection.insertOne(password);
    res.send({ success: true, result })
})
app.delete('/', async (req, res) => {
    const { id } = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.send({ success: true, result })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
