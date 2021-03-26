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
  console.log(MONGODB_URI)
  console.log(MONGODB_DB)

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    console.log('before cached promise client connect')
    cached.promise = MongoClient.connect(MONGODB_URI as string, opts).then(
      (client) => ({
        client,
        db: client.db(MONGODB_DB),
      })
    )
  }
  console.log('before return')
  cached.conn = await cached.promise
  return cached.conn
}
