import {Webhook} from 'svix'

// API CONTROLLER function to manage clerk User with database
// http://localhost:4000/api/user/webhooks

const clerkWebhooks = async(req , res) => {
    try{

        // create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body){
            "svix-id" :req.headers
        })

    } catch(error){

    }
}