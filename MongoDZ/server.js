require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Подключение к MongoDB
connectDB();

// Middleware для JSON
app.use(express.json());

// Маршруты
app.use("/api/products", productRoutes);

// Главная страница
app.get("/", (req, res) => {
  res.send("Products API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});