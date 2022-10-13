import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})

        if (!users) {
          return res.status(400).json({ success: 'false' })
        }

        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const findUser = await User.findOne({ email: req.body.email })
        if (!findUser) {
          const user = await User.create(req.body)
          res.status(200).json({ success: true, data: user })
        } else {
          res
            .status(200)
            .json({ success: true, message: 'User is already in our database' })
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    case 'PUT':
      try {
        const user = await User.findOne({ email: req.body.email })
        const teacherArray = user.teacherNames
        user.teacherNames = [...teacherArray, req.body.teacherName]

        await user.save()
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
  }
}
