const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`✅ Connected to database`);
    
    } catch (error) {
        console.log(`❌ Connection Failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;