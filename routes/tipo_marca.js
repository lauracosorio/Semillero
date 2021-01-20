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
        console.log(req.params);
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

 //CANTIDADES SOLICITADAS

 router.get('/cantidad-tipo-marca', (req,res)=> {

  cnn_mysql.query(`SELECT COUNT(*) AS 'CANTIDAD TIPO MARCA' FROM TIPO_MARCA`, (err,resulset,fields)=>{
    if(err){
      console.log(err)
      return res.status(500).send('No se pudo realizar la consulta')
    }else{
      return res.json(resulset)
    }
  })
})

//Se debe generar una consulta que contenga DESC_MARCA, DESC_LINEA y cantidad, para saber cuántas líneas repetidas por marca están almacenadas. (Crear un servicio en Express que devuelva dicha información).

router.get('/cantidad-marca', (req,res)=> {

  cnn_mysql.query(`SELECT DESC_MARCA, DESC_LINEA, TM.ID_MARCA, COUNT(*) CANTIDAD FROM TIPO_MARCA TM, TIPO_LINEA TL WHERE TM.ID_MARCA = TL.ID_MARCA GROUP BY TM.ID_MARCA`, (err,resulset,fields)=>{
    if(err){
      console.log(err)
      return res.status(500).send('No se pudo realizar la consulta')
    }else{
      return res.json(resulset)
    }
  })
})

//TIPO MARCA
router.get('/tipo-marca', (req,res)=> {

  cnn_mysql.query(`SELECT ID_MARCA, DESC_MARCA, IF(ACTIVO='S','ACTIVO','INACTIVO') AS 'ACTIVO' FROM TIPO_MARCA WHERE ACTIVO IS NOT NULL`, (err,resulset,fields)=>{
    if(err){
      console.log(err)
      return res.status(500).send('No se pudo realizar la consulta')
    }else{
      return res.json(resulset)
    }
  })
})

//MODELO

//MODELO MÁXIMO Y MÍNIMO

router.get('/modelo-max-min', (req,res)=> {

  cnn_mysql.query(`SELECT MAX(MODELO) AS 'MODELO MÁXIMO', MIN(MODELO) AS 'MODELO MÍNIMO' FROM VEHICULOS`, (err,resulset,fields)=>{
    if(err){
      console.log(err)
      return res.status(500).send('No se pudo realizar la consulta')
    }else{
      return res.json(resulset)
    }
  })
})

//RANGO MODELO
router.get('/modelos', (req,res)=> {

  cnn_mysql.query(`SELECT * FROM VEHICULOS WHERE MODELO >= '2018' AND MODELO <= '2021'`, (err,resulset,fields)=>{
    if(err){
      console.log(err)
      return res.status(500).send('No se pudo realizar la consulta')
    }else{
      return res.json(resulset)
    }
  })
})

//SUMA MODELOS

router.get('/suma-modelos', (req,res)=> {

  cnn_mysql.query(`SELECT SUM(IFNULL(MODELO,0)) 'SUMA MODELOS' FROM VEHICULOS`, (err,resulset,fields)=>{
    if(err){
      console.log(err)
      return res.status(500).send('No se pudo realizar la consulta')
    }else{
      return res.json(resulset)
    }
  })
})

//PROMEDIO MODELOS 

router.get('/promedio-modelos', (req,res)=> {

  cnn_mysql.query(`SELECT AVG(IFNULL(MODELO,0)) 'PROMEDIO MODELOS' FROM VEHICULOS`, (err,resulset,fields)=>{
    if(err){
      console.log(err)
      return res.status(500).send('No se pudo realizar la consulta')
    }else{
      return res.json(resulset)
    }
  })
})




module.exports = router;
