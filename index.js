const express = require("express");
const morgan = require("morgan");

const app = express();

const tipo_marca = require("./routes/tipo_marca");
const vehiculos = require("./routes/vehiculos");
const tipo_linea = require("./routes/tipo_linea");

require("dotenv").config();

app.use(morgan("dev"));

app.use(express.json());

//Routes

app.use("/semillero", tipo_marca);
app.use("/semillero", vehiculos);
app.use("/semillero", tipo_linea);

app.get("/", (req, res) => {
  res.send("<h1>Semillero</h1>");
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`Aplicación corriendo en el puerto ${app.get("port")}!`);
});
