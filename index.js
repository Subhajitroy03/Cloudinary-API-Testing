require('dotenv').config();
const express =require('express');
const app = express();
const ejs= require('ejs');
const PORT= process.env.PORT || 3000;
app.use(express.json());
const user_router = require("./routes/routes");
app.set("view engine", "ejs");
app.set("views", "./views");
//MongoDB Connection
const connection = require("./connection");
connection.connectMongodb(process.env.MONGOURL);
//route
app.use("/", user_router);
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});