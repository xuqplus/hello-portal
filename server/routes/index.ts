import {Router} from "express";

const router = Router();

/* move home page to angular spa */
router.get("/", (req, res, next) => {
    res.render("angular", {title: "Welcome to angular 1.8.x"});
});

router.get("/index", (req, res, next) => {
    res.render("index", {title: "QQ"});
});

export = router;
