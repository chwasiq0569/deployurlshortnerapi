import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from "./routes/short.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config()

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

let port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("Server started successfully on port: ", port);
});