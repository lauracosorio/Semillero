const { Router } = require("express");
const { cnn_mysql } = require("../config/database");
const router = Router();

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
  
  //CANTIDADES SOLICITADAS

  router.get('/cantidad-tipo-linea', (req,res)=> {
  
    cnn_mysql.query(`SELECT COUNT(*) AS 'CANTIDAD TIPO LINEA' FROM TIPO_LINEA`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })
  
 //REGISTROS ACTIVOS E INACTIVOS

router.get('/registros', (req,res)=> {

    cnn_mysql.query(`SELECT SUM(IF(ACTIVO='S',1,0)) 'ACTIVO', SUM(IF(ACTIVO='N',1,0)) 'INACTIVOS' FROM TIPO_LINEA`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })
  
  //TIPO LINEA 
  
  router.get('/tipo-linea', (req,res)=> {
  
    cnn_mysql.query(`SELECT * FROM TIPO_LINEA WHERE DESC_LINEA IS NOT NULL AND ID_MARCA IS NOT NULL and ACTIVO IS NOT NULL`, (err,resulset,fields)=>{
      if(err){
        console.log(err)
        return res.status(500).send('No se pudo realizar la consulta')
      }else{
        return res.json(resulset)
      }
    })
  })

module.exports = router;
