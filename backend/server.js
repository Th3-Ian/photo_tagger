const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const mongoDB = uri;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('Successfully connected to MongoDB');
}

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
