const express = require("express");
const mongoose = require("mongoose");
const app = express();

// route file
const productRoute = require("./routes/product.route");

// middleware
app.use(express.json());

// route
app.use("/product", productRoute);

// connect to DB
mongoose
  .connect(
    "mongodb+srv://tintran2591999:tin1999123@backenddb.6jzq50w.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connect to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connected DB Failed");
  });
