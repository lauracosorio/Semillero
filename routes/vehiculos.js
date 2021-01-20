const { Router } = require("express");
const { cnn_mysql } = require("../config/database");
const router = Router();

//VEHICULO

//Traer todos los datos de vehiculo

router.get("/vehiculo", (req, res) => {
    cnn_mysql.query("SELECT * FROM VEHICULOS", (err, rows, fields) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Se presentó un error en la base de datos");
      } else {
        return res.json(rows);
      }
    });
  });
  
  //Traer datos individuales de vehiculo
  
  router.get("/vehiculo/:placa", (req, res) => {
    const placa = req.params.placa;
  
    cnn_mysql.query(
      "SELECT * FROM VEHICULOS WHERE NRO_PLACA = ?",
      [placa],
      (err, rows, fields) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Se presentó un error en la base de datos");
        } else {
          return res.json(rows);
        }
      }
    );
  });
  
  //Ingresar datos vehiculo
  
  router.post("/vehiculo", async (req, res) => {
    try {
      const {
        NRO_PLACA,
        ID_LINEA,
        MODELO,
        FECHA_VEN_SEGURO,
        FECHA_VEN_TECNOMECANICA,
        FECHA_VEN_CONTRATO,
      } = req.body;
  
      const [
        rows,
        fields,
      ] = await cnn_mysql
        .promise()
        .execute(`INSERT INTO VEHICULOS VALUES (?,?,?,?,?,?)`, [
          NRO_PLACA,
          ID_LINEA,
          MODELO,
          FECHA_VEN_SEGURO,
          FECHA_VEN_TECNOMECANICA,
          FECHA_VEN_CONTRATO,
        ]);
  
      if (rows.affectedRows > 0) {
        res.json({
          NRO_PLACA: NRO_PLACA,
          ID_LINEA: ID_LINEA,
          MODELO: MODELO,
          FECHA_VEN_SEGURO: FECHA_VEN_SEGURO,
          FECHA_VEN_TECNOMECANICA: FECHA_VEN_TECNOMECANICA,
          FECHA_VEN_CONTRATO: FECHA_VEN_CONTRATO,
        });
        console.log(req.body);
      } else {
        console.log(req.params);
        res.json({});
      }
      console.log(req.params);
    } catch (e) {
      console.log(e);
      res.status(500).json({
        errorCode: e.errno,
        message: "Error en el servidor",
      });
    }
  });
  
  //Actualizar datos vehiculo
  
  router.put("/vehiculo/:placa", (req, res) => {
    const {
      NRO_PLACA,
      ID_LINEA,
      MODELO,
      FECHA_VEN_SEGURO,
      FECHA_VEN_TECNOMECANICA,
      FECHA_VEN_CONTRATO,
    } = req.body;
    const placa = req.params.placa;
  
    cnn_mysql.query(
      `UPDATE VEHICULOS SET NRO_PLACA = ?, ID_LINEA = ?, MODELO = ?, FECHA_VEN_SEGURO = ?, FECHA_VEN_TECNOMECANICA = ?, FECHA_VEN_CONTRATO = ? WHERE NRO_PLACA = ?`,
      [
        NRO_PLACA,
        ID_LINEA,
        MODELO,
        FECHA_VEN_SEGURO,
        FECHA_VEN_TECNOMECANICA,
        FECHA_VEN_CONTRATO,
        placa,
      ],
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
  
  //Eliminar datos vehiculo
  
  router.delete("/vehiculo/:placa", (req, res) => {
    const placa = req.params.placa;
  
    cnn_mysql.query(
      "DELETE FROM VEHICULOS WHERE NRO_PLACA = ?",
      [placa],
      (err, row, fields) => {
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

   router.get('/cantidad-vehiculos', (req,res)=> {
  
    cnn_mysql.query(`SELECT COUNT(*) AS 'CANTIDAD VEHICULOS' FROM VEHICULOS`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })

  //VEHICULO

router.get('/vehiculos', (req,res)=> {

    cnn_mysql.query(`SELECT NRO_PLACA,ID_LINEA,MODELO '#ModeloVehiculo: ',
    DATE_FORMAT(FECHA_VEN_SEGURO, '%d/%m/%Y') 'FECHA VENCIMIENTO SEGURO',
    DATE_FORMAT(FECHA_VEN_TECNOMECANICA, '%d/%m/%Y') 'FECHA VENCIMIENTO TECNOMECANICA',
    DATE_FORMAT(FECHA_VEN_CONTRATO, '%d/%m/%Y') 'FECHA VENCIMIENTO CONTRATO' FROM VEHICULOS WHERE ID_LINEA IS NOT NULL AND MODELO IS NOT NULL`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })
  
  //INNER JOIN LEFT JOIN
  
  router.get('/join', (req,res)=> {
  
    cnn_mysql.query(`SELECT NRO_PLACA, MODELO, DESC_LINEA, DESC_MARCA FROM VEHICULOS V INNER JOIN TIPO_LINEA TL ON V.ID_LINEA=TL.ID_LINEA LEFT JOIN TIPO_MARCA TM ON TL.ID_MARCA = TM.ID_MARCA`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })

  //RANGO DE FECHA

router.get('/fecha-ven-seguro', (req,res)=> {

    cnn_mysql.query(`SELECT * FROM VEHICULOS WHERE FECHA_VEN_SEGURO >= '2015-01-01' AND FECHA_VEN_SEGURO <= '2019-01-01'`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })

  //Crear una consulta única que tenga las siguientes columnas: NRO_PLACA, MODELO, DESC_LINEA, DESC_MARCA, traer todos los registros que coincidan en todas las tablas.

router.get('/datos', (req,res)=> {

    cnn_mysql.query(`SELECT NRO_PLACA, MODELO, DESC_MARCA, DESC_LINEA, TL.ACTIVO, TM.ACTIVO FROM VEHICULOS V, TIPO_MARCA TM, TIPO_LINEA TL WHERE TM.ID_MARCA=TL.ID_MARCA AND TL.ID_LINEA=V.ID_LINEA`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })
  
  //Crear una consulta única que tenga las siguientes columnas: NRO_PLACA, MODELO, DESC_LINEA, DESC_MARCA; traer todos los registros que coincidan en todas las tablas y que se encuentren en estado S. (Crear un servicio en Express).
  
  router.get('/datos-estado-s', (req,res)=> {
  
    cnn_mysql.query(`SELECT NRO_PLACA, MODELO, DESC_MARCA, DESC_LINEA, TL.ACTIVO 'TIPO LINEA ACTIVO', TM.ACTIVO 'TIPO MARCA ACTIVO' FROM VEHICULOS V, TIPO_MARCA TM, TIPO_LINEA TL WHERE TM.ID_MARCA=TL.ID_MARCA AND TL.ID_LINEA=V.ID_LINEA AND TL.ACTIVO='S' AND TM.ACTIVO='S'`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })
  
  module.exports = router;
