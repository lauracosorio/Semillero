USE bsns9y7g8haty8vshbnw;
DROP TABLE TIPO_MARCA;
DROP TABLE TIPO_LINEA;
DROP TABLE VEHICULOS;
CREATE TABLE TIPO_MARCA(
  ID_MARCA INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  DESC_MARCA VARCHAR(255) NOT NULL,
  ACTIVO ENUM('S', 'N')
);
CREATE TABLE TIPO_LINEA(
  ID_LINEA INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  DESC_LINEA VARCHAR(255) NULL COMMENT "La descripción es opcional, no es estrictamente necesario",
  ID_MARCA INT UNSIGNED,
  ACTIVO ENUM('S', 'N'),
  CONSTRAINT FK_ML FOREIGN KEY (ID_MARCA) REFERENCES TIPO_MARCA(ID_MARCA)
);
CREATE TABLE VEHICULOS(
  NRO_PLACA VARCHAR(6) PRIMARY KEY,
  ID_LINEA INT UNSIGNED,
  MODELO ENUM (
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
  CONSTRAINT FK_VL FOREIGN KEY (ID_LINEA) REFERENCES TIPO_LINEA(ID_LINEA)
);
SHOW FULL TABLES
FROM
  bsns9y7g8haty8vshbnw;
INSERT INTO
  TIPO_MARCA (DESC_MARCA, ACTIVO)
VALUES
  ('Chevrolet', 'S'),('Logan', 'N'),
  ('Renault', 'S'),
  ('Aveo', 'S'),('KIA', 'N');
SELECT
  *
FROM
  TIPO_MARCA;
INSERT INTO
  TIPO_LINEA (DESC_LINEA, ID_MARCA, ACTIVO)
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