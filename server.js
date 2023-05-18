const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const port = 4000;

//Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught exception");
  process.exit(1);
});
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//connecting to DataBase
connectDatabase();

cloudinary.config({
  cloud_name: "dkgtpizmr",
  api_key: "697248684489144",
  api_secret: "TXhH_6KSHgn0uTzQDYVZ2HzED_M",
});

const server = app.listen(port, (req, res) => {
  console.log(`server is working on http://localhost:${port}`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close();
  process.exit(1);
});
