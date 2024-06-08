require('dotenv').config();
const express = require('express');
const cors = require("cors");

const connectDB = require('./config/db');

const app = express();

// routes
const data = require('./routes/data_routes');

// connect database
connectDB();

// cors
const corsOptions = {
    origin: [/\.onrender\.com$/, 'http://localhost:3000', 'http://13.201.251.105'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server is running"));

// use routes
app.use('/api/data', data);

// setting up port
const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));