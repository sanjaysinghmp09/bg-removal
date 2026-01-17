import { Webhook } from "svix";
import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = whook.verify(req.body, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = payload;

    if (type === "user.created") {
      await userModel.create({
        clerkId: data.id,
        email: data.email_addresses?.[0]?.email_address || "",
        firstName: data.first_name,
        lastName: data.last_name,
        photo: data.image_url,
      });
    }

    if (type === "user.updated") {
      await userModel.findOneAndUpdate(
        { clerkId: data.id },
        {
          email: data.email_addresses?.[0]?.email_address || "",
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        },
        { new: true }
      );
    }

    if (type === "user.deleted") {
      await userModel.findOneAndDelete({ clerkId: data.id });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Webhook Error:", error);
    res.status(400).json({ success: false });
  }
};

export { clerkWebhooks };
