import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return
  }

  console.log('About to connect to DataBase')
  const db = await mongoose.connect(
    'mongodb+srv://JerVas:3h23UwMfe859ku3Z@cluster0.plqhm64.mongodb.net/?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  )

  connection.isConnected = db.connections[0].readyState
  console.log('Connected with DataBase with status:', connection.isConnected)
}

export default dbConnect
