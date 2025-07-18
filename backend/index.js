const express = require("express");
const connectdb = require('./App/dbConnection/db');
const ScanRoutes = require('./App/Routes/ScanRoute')
const cors = require('cors');
require('dotenv').config();

const app = express();
connectdb();


app.use(cors());
app.use(express.json());

app.use('/api',ScanRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>console.log(`Server is Running on port ${PORT}`));