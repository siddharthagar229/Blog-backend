import express from "express";
import mongoose from "mongoose";
// import blogRouter from "./routes/blog-routes";
import blogRouter from "./routes/blog-routes.js"
// import router from "./routes/user-routes";
import router from "./routes/user-routes.js"
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.set('strictQuery', false);
mongoose
    .connect(
        "mongodb://siduser:codeforinterview@ac-ktjpocj-shard-00-00.pczwzvy.mongodb.net:27017,ac-ktjpocj-shard-00-01.pczwzvy.mongodb.net:27017,ac-ktjpocj-shard-00-02.pczwzvy.mongodb.net:27017/?ssl=true&replicaSet=atlas-3uxgjh-shard-0&authSource=admin&retryWrites=true&w=majority"
    )
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected TO Database and Listening TO Localhost 5000")
    )
