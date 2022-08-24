const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  comments: {
    type: Array,
  },
  ratings: {
    type: Array,
  },
  avatar: {
    type: String,
  },
})

module.exports = mongoose.model('Teacher', teacherSchema)
