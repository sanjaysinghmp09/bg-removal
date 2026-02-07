import express from 'express'
import {clerkWebhooks} from '../controllers/UserController.js'

const userRouter = express.Router()


userRouter.post('/webhooks' , clerkWebhooks)

export default userRouter
// i give interview and ask - what is controller in react 
