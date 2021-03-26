import { MongoClient, Db } from 'mongodb'

const { MONGODB_URI, MONGODB_DB } = process.env

type MongoDbConnection = {
  client: MongoClient
  db: Db
}

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
const globalAny: any = global
let cached = globalAny.mongo

if (!cached) {
  // eslint-disable-next-line no-multi-assign
  cached = globalAny.mongo = { conn: null, promise: null }
}

export default async function connectToDatabase(): Promise<MongoDbConnection> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    cached.promise = MongoClient.connect(MONGODB_URI as string, opts).then(
      (client) => ({
        client,
        db: client.db(MONGODB_DB),
      })
    )
  }
  cached.conn = cached.promise
  console.log('before return')
  return cached.conn
}
