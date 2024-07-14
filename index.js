const express = require('express');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();
const mongoose = require('mongoose');
const portfinder = require('portfinder');
const DEFAULT_PORT = 3012;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Default route
app.get('/', (req, res) => {
  res.send("Hello from Node API server");
});

// This will help you get all the products
/*app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

// Update the product by id
/*
app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

//delete a product
/*app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product=await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" })

  } catch (error) {

    res.status(500).json({ message: error.message });
  }
})*/

/*// To get a specific product, named this as product since it will give out a single product based on id
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params; // By doing this we can fetch the ids from URL
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/
/*
app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

mongoose.connect("mongodb+srv://rashimalviyaa2003:2S0Qcu36WYGu2FIn@backenddb.airxxnz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database!");
    // Setting up portfinder to find an available port
    portfinder.basePort = DEFAULT_PORT;
    portfinder.getPort((err, port) => {
      if (err) {
        console.error("Error finding available port:", err);
        return;
      }
      // Start the server on the selected port
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    });
  })
  .catch((error) => {
    console.log("Connection failed:", error.message);
  });