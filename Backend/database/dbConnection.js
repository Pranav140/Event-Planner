// File: Backend/database/dbConnection.js

import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_EVENT_MESSAGE",
    })
    .then(() => {
        console.log("✅ SUCCESSFULLY CONNECTED TO MONGODB");
    })
    .catch((err) => {
        console.log("❌ CONNECTION ERROR:", err);
    });
};
