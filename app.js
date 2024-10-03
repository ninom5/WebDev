import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", authRoutes);

app.get("/", (req, res) => {
    res.render("index");
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
