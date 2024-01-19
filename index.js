import { MongoClient } from "mongodb";
import generateRandomData from "./generateRandomData.js";

const client = new MongoClient("mongodb://localhost:27017");

async function run() {
  try {
    const db = client.db("testDB");
    const dummy = db.collection("dummy");

    const data = generateRandomData(20);
    const result = await dummy.insertMany(data);

    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
