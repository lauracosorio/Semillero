const { Router } = require("express");

const { cnn_mysql } = require("../config/database");

const router = Router();

//TIPO MARCA

//Traer todos los datos de tipo_marca

router.get("/marca", (req, res) => {
  cnn_mysql.query(`SELECT * FROM TIPO_MARCA`, (error, resulset, fields) => {
    if (error) {
      return res.status(500).send("Se presentó un error en la base de datos");
    } else {
      return res.json(resulset);
    }
  });
});

//Traer dato individual de tipo_marca

router.get("/marca/:id", async (req, res) => {
  const id = req.params.id;
  const [
    rows,
  ] = await cnn_mysql
    .promise()
    .query(`SELECT * FROM TIPO_MARCA WHERE ID_MARCA = ?`, [id]);

  if (rows[0]) {
    res.json(rows[0]);
  } else {
    res.json({});
  }
});

//Insertar datos de tipo_marca

router.post("/marca", async (req, res) => {
  try {
    const { DESC_MARCA, ACTIVO } = req.body;

    const [
      rows,
      fields,
    ] = await cnn_mysql
      .promise()
      .execute(`INSERT INTO TIPO_MARCA (DESC_MARCA, ACTIVO) VALUES (?,?)`, [
        DESC_MARCA,
        ACTIVO,
      ]);

    if (rows.affectedRows > 0) {
      res.json({
        ID_MARCA: rows.insertId,
        DESC_MARCA: DESC_MARCA,
        ACTIVO: ACTIVO,
      });
    } else {
      res.json({});
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      errorCode: e.errno,
      message: "Error en el servidor",
    });
  }
});

//Actualizar datos de tipo_marca

router.put("/marca/:id", (req, res) => {
  const { DESC_MARCA, ACTIVO } = req.body;
  const { id } = req.params.id;

  cnn_mysql.query(
    `UPDATE TIPO_MARCA SET DESC_MARCA = ?, ACTIVO = ? WHERE ID_MARCA = ?`,
    [DESC_MARCA, ACTIVO, id],
    (err, rows, fields) => {
      if (err) {
        return res
          .status(500)
          .send("Se presentó un error y no se pudieron actualizar los datos");
      } else {
        return res.send("Datos actualizados con éxito!");
      }
    }
  );
});

//Eliminar datos de tipo_marca
router.delete("/marca/:id", (req, res) => {
  const { id } = req.params;

  cnn_mysql.query(
    "DELETE FROM TIPO_MARCA WHERE ID_MARCA = ?",
    [id],
    (err, rows, fields) => {
      if (err) {
        return res
          .status(500)
          .send(
            "Se presentó un error con la base de datos, no se pudo eliminar el registro"
          );
      } else {
        res.send("Registro eliminado con éxito");
      }
    }
  );
});

//TIPO LINEA

//Traer todos los datos de tipo_linea

router.get("/linea", (req, res) => {
  cnn_mysql.query(`SELECT * FROM TIPO_LINEA`, (error, resulset, fields) => {
    if (error) {
      return res.status(500).send("Se presentó un error en la base de datos");
    } else {
      return res.json(resulset);
    }
  });
});

//Traer dato individual de tipo_linea

router.get("/linea/:id", async (req, res) => {
  const id = req.params.id;
  const [
    rows,
  ] = await cnn_mysql
    .promise()
    .query(`SELECT * FROM TIPO_LINEA WHERE ID_LINEA = ?`, [id]);

  if (rows[0]) {
    res.json(rows[0]);
  } else {
    res.json({});
  }
});

//Insertar datos de tipo_linea

router.post("/linea", async (req, res) => {
  try {
    const { DESC_LINEA, ID_MARCA, ACTIVO } = req.body;

    const [
      rows,
      fields,
    ] = await cnn_mysql
      .promise()
      .execute(
        `INSERT INTO TIPO_LINEA (DESC_LINEA, ID_MARCA, ACTIVO) VALUES (?,?,?)`,
        [DESC_LINEA, ID_MARCA, ACTIVO]
      );

    if (rows.affectedRows > 0) {
      res.json({
        ID_LINEA: rows.insertId,
        ID_MARCA: ID_MARCA,
        DESC_LINEA: DESC_LINEA,
        ACTIVO: ACTIVO,
      });
    } else {
      res.json({
        message: "Registro ingresado con éxito!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      errorCode: e.errno,
      message: "Error en el servidor",
    });
  }
});

//Actualizar datos de tipo_linea

router.put("/linea/:id", (req, res) => {
  const { DESC_LINEA, ID_MARCA, ACTIVO } = req.body;
  const id = req.params.id;

  console.log([DESC_LINEA, ID_MARCA, ACTIVO, id]);

  cnn_mysql.query(
    `UPDATE TIPO_LINEA SET DESC_LINEA = ?, ID_MARCA = ?, ACTIVO = ? WHERE ID_LINEA = ?`,
    [DESC_LINEA, ID_MARCA, ACTIVO, id],
    (err, rows, fields) => {
      if (err) {
        return res
          .status(500)
          .send("Se presentó un error y no se pudieron actualizar los datos");
      } else {
        return res.send("Datos actualizados con éxito!");
      }
    }
  );
});

//Eliminar datos de tipo_linea
router.delete("/linea/:id", (req, res) => {
  const { id } = req.params;

  cnn_mysql.query(
    "DELETE FROM TIPO_LINEA WHERE ID_LINEA = ?",
    [id],
    (err, rows, fields) => {
      if (err) {
        return res
          .status(500)
          .send(
            "Se presentó un error con la base de datos, no se pudo eliminar el registro"
          );
      } else {
        res.send("Registro eliminado con éxito");
      }
    }
  );
});

//VEHICULO

//Traer todos los datos de vehiculo

router.get("/vehiculo", (req, res) => {
  cnn_mysql.query("SELECT * FROM VEHICULO", (err, rows, fields) => {
    if (err) {
      return res.status(500).send("Se presentó un error en la base de datos");
    } else {
      return res.json(resulset);
    }
  });
});

//Traer datos individuales de vehiculo
router.get("vehiculo/:id", async (req, res) => {
  const id = req.params.id;

  const [
    rows,
  ] = await cnn_mysql
    .promise()
    .query("SELECT * FROM VEHICULO WHERE NRO_PLACA = ?", [id]);

  if (rows[0]) {
    res.json(rows[0]);
  } else {
    res.json({});
  }
});

module.exports = router;
