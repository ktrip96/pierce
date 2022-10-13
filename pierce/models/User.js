const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  teacherNames: {
    type: Array,
  },
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
