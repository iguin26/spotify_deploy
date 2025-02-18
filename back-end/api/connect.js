import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://igordaniellopes:mV0HWu6LsoR5Brl1@cluster0.0o1iy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
