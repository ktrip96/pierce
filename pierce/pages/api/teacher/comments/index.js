import dbConnect from '../../../../utils/dbConnect'
import Teacher from '../../../../models/Teacher'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      try {
        const teacher = await Teacher.findOne({ name: req.body.name })
        const comments = teacher.comments
        teacher.comments = [...comments, req.body.comment]

        await teacher.save()

        res.status(200).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    // case 'POST':
    //   try {
    //     const teacher = await Teacher.create(req.body)
    //     res.status(200).json({ success: true, data: teacher })
    //   } catch (error) {
    //     res.status(400).json({ success: false })
    //   }
    //   break
  }
}
