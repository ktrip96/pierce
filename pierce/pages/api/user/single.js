import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const user = await User.find({ email: req.query.email })

        if (!user) {
          return res.status(400).json({ success: 'false' })
        }

        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}
