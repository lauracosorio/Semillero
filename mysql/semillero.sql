USE bsns9y7g8haty8vshbnw;
DROP TABLE TIPO_MARCA;
DROP TABLE TIPO_LINEA;
DROP TABLE VEHICULOS;
CREATE TABLE TIPO_MARCA
(
  ID_MARCA INT
  UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  DESC_MARCA VARCHAR
  (255) NOT NULL,
  ACTIVO ENUM
  ('S', 'N')
);
  CREATE TABLE TIPO_LINEA
  (
    ID_LINEA INT
    UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  DESC_LINEA VARCHAR
    (255) NULL COMMENT "La descripción es opcional, no es estrictamente necesario",
  ID_MARCA INT UNSIGNED,
  ACTIVO ENUM
    ('S', 'N'),
  CONSTRAINT FK_ML FOREIGN KEY
    (ID_MARCA) REFERENCES TIPO_MARCA
    (ID_MARCA)
);
    CREATE TABLE VEHICULOS
    (
      NRO_PLACA VARCHAR(6) PRIMARY KEY,
      ID_LINEA INT
      UNSIGNED,
  MODELO ENUM
      (
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021'
  ) NULL COMMENT "El modelo es opcional, no es estrictamente necesario debido a que en otros documentos se puede saber esta información",
  FECHA_VEN_SEGURO TIMESTAMP NOT NULL,
  FECHA_VEN_TECNOMECANICA TIMESTAMP NOT NULL,
  FECHA_VEN_CONTRATO TIMESTAMP NOT NULL,
  CONSTRAINT FK_VL FOREIGN KEY
      (ID_LINEA) REFERENCES TIPO_LINEA
      (ID_LINEA)
);
SHOW FULL TABLES
FROM
  bsns9y7g8haty8vshbnw;
      INSERT INTO
  TIPO_MARCA
        (DESC_MARCA, ACTIVO)
      VALUES
        ('Chevrolet', 'S'),
        ('Logan', 'N'),
        ('Renault', 'S'),
        ('Aveo', 'S'),
        ('KIA', 'N');
      SELECT
        *
      FROM
        TIPO_MARCA;
      INSERT INTO
  TIPO_LINEA
        (DESC_LINEA, ID_MARCA, ACTIVO)
      VALUES
        ("Electrico", 1, "N"),
        ("Linea principal", 1, "S"),
        ("Automatico", 1, "S"),
        ("Deportivo", 1, "S"),
        ("Linea secundaria", 3, "N"),
        ("Automovil", 4, "S"),
        ("Camioneta", 2, "S"),
        ("Campero", 1, "S"),
        ("Campero", 1, "S"),
        ("Vova", 2, "N"),
        ("De carrera", 5, "S"),
        ("Rally", 3, "S"),
        ("Cupra", 3, "N"),
        ("Golf", 2, "S"),
        ("Spark", 2, "N"),
        ("Sail", 4, "S"),
        ("Logan", 5, "S"),
        ("Rio", 5, "N"),
        ("Optimo", 5, "S"),
        ("XCeed", 5, "S")
      SELECT
        *
      FROM
        TIPO_LINEA;
      INSERT INTO
  VEHICULOS
      VALUES
        (
          "JJH123","1","2018","2022-05-12","2022-05-12","2022-05-12"
  ),
        (
          "QWE223","2","2015","2022-02-11","2022-02-11","2022-02-11"
  ),
        (
          "RTE432","3","2020","2019-05-12","2019-05-12","2019-05-12"
  ),
        (
          "BVG876","1","2016","2020-01-12","2020-01-12","2020-01-12"
  ),
        (
          "KMJ564","2","2018","2020-01-12","2020-01-12","2020-01-12"
  ),
        (
          "VCF435","5","2017","2023-04-10","2023-04-10","2023-04-10"
  ),
        (
          "LMK325","4","2016","2017-04-2","2017-04-2","2017-04-2"
  ),
        (
          "RGT543","1","2020","2021-03-13","2021-03-13","2021-03-13"
  ),
        (
          "MKJ666","2","2015","2016-02-02","2016-02-02","2016-02-02"
  ),
        (
          "MJK123","5","2018","2019-06-06","2019-06-06","2019-06-06"
  ),
        (
          "LAU584","1","2020","2021-11-04","2021-11-04","2021-11-04"
  ),
        (
          "JFF344","4","2016","2017-02-25","2017-02-25","2017-02-25"
  ),
        (
          "JAR908","2","2019","2020-08-18","2020-08-18","2020-08-18"
  ),
        (
          "EOG786","3","2015","2017-02-08","2017-02-08","2017-02-08"
  ),
        (
          "MGO546","2","2016","2018-02-27","2018-02-27","2018-02-27"
  ),
        (
          "STL154","5",NULL,"2016-09-10","2016-09-10","2016-09-10"
  ),
        (
          "KHR768","6","2017","2018-09-19","2018-09-19","2018-09-19"
  ),
        (
          "CIG031","20",NULL,"2016-03-15","2016-03-15","2016-03-15"
  ),
        (
          "HAO066",NULL,NULL,"2017-06-05","2017-06-05","2017-06-05"
  ),
        (
          "PSV506","15","2021","2022-05-12","2022-05-12","2022-05-12"
  ),
        (
          "CTL524","19","2015","2016-05-28","2016-05-28","2016-05-28"
  ),
        (
          "AOC654","11",NULL,"2022-07-12","2022-07-12","2022-07-12"
  ),
        (
          "OAP987","17","2019","2019-11-02","2019-11-02","2019-11-02"
  ),
        (
          "APL497","10","2019","2020-03-26","2020-03-26","2020-03-26"
  ),
        (
          "JAM026","15","2017","2020-03-01","2020-03-01","2020-03-01"
  ),
        (
          "CDM546","12",NULL,"2016-04-09","2016-04-09","2016-04-09"
  ),
        (
          "TIA765",NULL,"2021","2022-05-27","2022-05-27","2022-05-27"
  ),
        (
          "LAM000","17","2015","2016-10-23","2016-10-23","2016-10-23"
  ),
        (
          "NAM023","13","2017","2018-02-26","2018-02-26","2018-02-26"
  ),
        (
          "JPA214","14","2019","2020-09-14","2020-09-14","2020-09-14"
  )
      