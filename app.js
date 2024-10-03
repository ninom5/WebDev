import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import session from "express-session";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { users } from "./data/users.js";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: "aaaa",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});


app.use("/", authRoutes);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/userPage", (req, res) => {
    res.render("userPage");
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
