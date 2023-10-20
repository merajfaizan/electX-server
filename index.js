const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// connect to database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k5v5ibx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// api routes
async function run() {
  try {
    await client.connect();
    console.log("Connected to the database");

    // db and collections
    const productsCollection = client.db("electricShop").collection("products");
    const usersCollection = client.db("electricShop").collection("users");

    // all products get api endpoint
    app.get("/products", async (req, res) => {
      const query = {};
      const products = await productsCollection.find(query).toArray();
      res.send(products);
    });

    // get products by brand name endpoint
    app.get("/products/:brand", async (req, res) => {
      const query = { brand: req.params.brand };
      console.log(query);
      const products = await productsCollection.find(query).toArray();
      res.send(products);
    });

    // single product post api endpoint
    app.post("/products", async (req, res) => {
      const product = req.body;
      if (!product || !product.name || !product.price) {
        return res.status(400).json({ error: "Invalid product data" });
      }
      const result = await productsCollection.insertOne(product);
      if (result.acknowledged) {
        res
          .status(201)
          .json({ message: "Product created successfully", status: 201 });
      } else {
        res.status(500).json({ error: "Failed to create the product" });
      }
    });

    // user post api endpoint
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
  } finally {
    // await client.close(console.log("database is closed"));
  }
}
run().catch((err) => console.log(err));

// initial api routes and listen.
app.get("/", (req, res) => {
  res.send("Brand Shop server is Running.");
});

app.listen(port, () => {
  console.log(`Brand Shop server listening on port ${port}`);
});
