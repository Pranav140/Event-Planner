import app from "./app.js";
app.listen(process.env.PORT,()=>{
    console.log(`SERVER LISTENING AT PORT ${process.env.PORT}`);
})