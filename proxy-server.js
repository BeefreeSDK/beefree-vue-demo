import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Replace with your actual credentials
import dotenv from 'dotenv'
dotenv.config()
const BEE_CLIENT_ID = process.env.BEE_CLIENT_ID
const BEE_CLIENT_SECRET = process.env.BEE_CLIENT_SECRET

app.post('/proxy/bee-auth', async (req, res) => {
  try {
    const response = await axios.post(
      'https://auth.getbee.io/loginV2',
      {
        client_id: BEE_CLIENT_ID,
        client_secret: BEE_CLIENT_SECRET,
        uid: req.body.uid || 'demo-user'
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    res.json(response.data)
  } catch (error) {
    console.error('Auth error:', error.message)
    res.status(500).json({ error: 'Failed to authenticate' })
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`)
})
