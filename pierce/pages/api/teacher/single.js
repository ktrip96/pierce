import dbConnect from '../../../utils/dbConnect'
import Teacher from '../../../models/Teacher'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const teachers = await Teacher.find({ name: req.query.name })

        if (!teachers) {
          return res.status(400).json({ success: 'false' })
        }

        res.status(200).json({ success: true, message: teachers })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}
