import dbConnect from '../../../utils/dbConnect'
import Teacher from '../../../models/Teacher'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    // Επιστρέφει όλους τους καθηγητές
    // π.χ. https://localhost:3000/api/teacher

    case 'GET':
      try {
        const teachers = await Teacher.find({})

        if (!teachers) {
          return res.status(400).json({ success: 'false' })
        }

        res.status(200).json({ success: true, data: teachers })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    // Δέχεται σαν body τα στοιχεία του καθηγητή, και εισάγει τον καθηγητή στη βάση
    /* {
      "name":"Konstantinos Tatsis",
      "avatar":"male_avatar1"
      }
    */
    // π.χ. https://localhost:3000/api/teacher/

    case 'POST':
      try {
        const teacher = await Teacher.create(req.body)
        res.status(200).json({ success: true, data: teacher })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}
