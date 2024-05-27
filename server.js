require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const db = require("./config/dbConfig")
const parkingRoutes = require("./routes/parkingRoutes")
const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use(cors());

db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch((e) => console.log(`Error connecting to Database: ${e}`));
    
app.use("/", parkingRoutes)

app.use("/health", (req, res) => {
    res.json({
        message: `Server is up and running`
    });
});

app.listen(PORT, () => {
    console.log(`Server is up and running on Port ${PORT}`);
})