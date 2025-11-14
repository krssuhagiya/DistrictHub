require('dotenv').config();
const express = require("express");
const { createServer } = require('http'); 
const connectToDB = require("./config/db"); 
const app = express();
const server = createServer(app); 
 
const cors = require("cors");
const morgan = require("morgan");
 

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
connectToDB();
app.use(cors({
  origin: "http://localhost:5173", // React app's URL (Vite default port)
  credentials: true, // Allow cookies to be sent
}));
app.use(morgan("dev"));  
 

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
}); 