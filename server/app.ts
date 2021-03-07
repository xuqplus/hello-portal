import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import lessMiddleware from "less-middleware";
import logger from "morgan";
import * as path from "path";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import users2 from "./routes/users2";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/users2", users2);

// angular spa
app.use(express.static("client", {maxAge: 31536000000}));

// static components
app.use("/bower_components", express.static("bower_components", {maxAge: 31536000000}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: any) => {
    next(createError(404));
});

// error handler
app.use((err: any, req: express.Request, res: express.Response, next: any) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

export = app;
