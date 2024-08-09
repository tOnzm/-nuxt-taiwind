// server/api/movies.js

import { MongoClient, ServerApiVersion } from 'mongodb'

const uri =
    'mongodb+srv://tonselaman:4uk1VJGppIr6uvJk@tonzcluster.yciialt.mongodb.net/?retryWrites=true&w=majority&appName=TonzCluster'
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

export default defineEventHandler(async (event) => {
    try {
        await client.connect()
        const db = client.db('sample_mflix')
        const collection = db.collection('movies')
        const movies = await collection.find({}).toArray()
        return movies
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        return { error: 'Error connecting to MongoDB' }
    } finally {
        await client.close()
    }
})
