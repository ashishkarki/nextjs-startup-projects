import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

export default function credentialsHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!req.body) {
    res.status(400).json({
      status: 'error',
      message: 'No data sent',
    })

    return
  }

  const { username, password } = req.body

  res.statusCode = 200
  res.json({
    token: jwt.sign(
      {
        username: username,
        admin: username === 'admin' && password === 'admin',
      },
      uuidv4(),
    ),
  })
}
