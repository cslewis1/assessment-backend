const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getImage, getUserList, createQuote, deleteQuote, updateRating } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/images", getImage);
app.get("/api/userList", getUserList);
app.post("/api/userList", createQuote);
app.delete("/api/userList/:quote_id", deleteQuote);
app.put("/api/userRating", updateRating);


app.listen(4000, () => console.log("Server running on 4000"));