import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(
    'mongodb+srv://JerVas:3h23UwMfe859ku3Z@cluster0.plqhm64.mongodb.net/?retryWrites=true&w=majority',
    { useUrlParser: true, useUnifiedTopology: true }
  )

  connection.isConnected = db.connections[0].readyState
  console.log(connection.isConnected)
}

export default dbConnect
