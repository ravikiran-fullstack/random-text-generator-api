import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mongoose from "mongoose";

import generateTextRouter from './routes/generateTextRouter.js';

const mongoURI = `${process.env.mongoURI}`;

const app = express();

const connectToMondoDb = async () => {
  try {
    const result = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(process.env.PORT || 5050, "0.0.0.0");
    console.log(`Back end server running on ${process.env.PORT}`);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

connectToMondoDb();
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


app.get("/test", (req, res) => {
  return res.send({ msg: "server working and it's connected to mongodb" });
});

app.get('/generate', generateTextRouter);

app.get('/generate/:paraCount/:paraSize', generateTextRouter);
