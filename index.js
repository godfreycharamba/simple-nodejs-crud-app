const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const dotenv = require('dotenv')
 
const productRoute = require('./routes/product.route.js')
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Routes
app.use("/api/products" , productRoute);




// Connect to local database

dotenv.config();

connectDB();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});