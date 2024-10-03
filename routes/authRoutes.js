import express from "express";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);

router.get("/logout", (req, res) => {
    req.session.user = null;
    res.redirect("/");

});

export default router;