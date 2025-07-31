var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");

require("dotenv").config();
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var bossesRouter = require("./routes/bosses");
var placesRouter = require("./routes/places");

const chatRouter = require("./routes/chat");

const mongoUri_exp =
  "mongodb+srv://Pedro_Barbosa:@cluster0.qj33vkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Conexão com o MongoDB
const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/solairewiki";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "Erro de conexão com MongoDB:")
);
mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB");
});

const { title } = require("process");

const allBossesData = require("./data/bosses.json");
const allPlacesData = require("./data/places.json");

var app = express();

// view engine setup
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layout");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.locals.bossesList = allBossesData;
  res.locals.selected = "none";
  next();
});

app.use((req, res, next) => {
  res.locals.placesList = allPlacesData;
  res.locals.selected = "none";
  next();
});

app.use("/", indexRouter);
app.use("/bosses", bossesRouter);
app.use("/places", placesRouter);
app.use("/chat", chatRouter);
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "erro" });
});

module.exports = app;
