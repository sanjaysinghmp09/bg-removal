import 'dotenv/config'
import express from 'express'
import cors from 'cors'


// App Config 

const PORT = process.env.PORT || 4000
const app = express()