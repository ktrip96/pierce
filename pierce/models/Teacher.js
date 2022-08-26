const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  name: {
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

module.exports =
  mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema)
