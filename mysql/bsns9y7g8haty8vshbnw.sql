-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bsns9y7g8haty8vshbnw-mysql.services.clever-cloud.com:3306
-- Generation Time: Jan 20, 2021 at 02:57 AM
-- Server version: 8.0.13-3
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bsns9y7g8haty8vshbnw`
--

-- --------------------------------------------------------

--
-- Table structure for table `TIPO_LINEA`
--

CREATE TABLE `TIPO_LINEA` (
  `ID_LINEA` int(10) UNSIGNED NOT NULL,
  `DESC_LINEA` varchar(255) DEFAULT NULL COMMENT 'La descripción es opcional, no es estrictamente necesario',
  `ID_MARCA` int(10) UNSIGNED DEFAULT NULL,
  `ACTIVO` enum('S','N') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TIPO_LINEA`
--

INSERT INTO `TIPO_LINEA` (`ID_LINEA`, `DESC_LINEA`, `ID_MARCA`, `ACTIVO`) VALUES
(1, 'Electrico', 1, 'N'),
(2, 'Linea principal', 1, 'S'),
(3, 'Automatico', 1, 'S'),
(4, 'Deportivo', 1, 'S'),
(5, 'Linea secundaria', 3, 'N'),
(6, 'Automovil', 4, 'S'),
(7, 'Camioneta', 2, 'S'),
(8, 'Campero', 1, 'S'),
(9, 'Campero', 1, 'S'),
(10, 'Vova', 2, 'N'),
(11, 'De carrera', 5, 'S'),
(12, 'Rally', 3, 'S'),
(13, 'Cupra', 3, 'N'),
(14, 'Golf', 2, 'S'),
(15, 'Spark', 2, 'N'),
(16, 'Sail', 4, 'S'),
(17, 'Logan', 5, 'S'),
(18, 'Rio', 5, 'N'),
(19, 'Optimo', 5, 'S'),
(20, 'XCeed', 5, 'S');

-- --------------------------------------------------------

--
-- Table structure for table `TIPO_MARCA`
--

CREATE TABLE `TIPO_MARCA` (
  `ID_MARCA` int(10) UNSIGNED NOT NULL,
  `DESC_MARCA` varchar(255) NOT NULL,
  `ACTIVO` enum('S','N') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TIPO_MARCA`
--

INSERT INTO `TIPO_MARCA` (`ID_MARCA`, `DESC_MARCA`, `ACTIVO`) VALUES
(1, 'Chevrolet', 'S'),
(2, 'Logan', 'N'),
(3, 'Renault Sandero', 'N'),
(4, 'Aveo', 'S'),
(5, 'KIA', 'N');

-- --------------------------------------------------------

--
-- Table structure for table `VEHICULOS`
--

CREATE TABLE `VEHICULOS` (
  `NRO_PLACA` varchar(6) NOT NULL,
  `ID_LINEA` int(10) UNSIGNED DEFAULT NULL,
  `MODELO` enum('2015','2016','2017','2018','2019','2020','2021') DEFAULT NULL COMMENT 'El modelo es opcional, no es estrictamente necesario debido a que en otros documentos se puede saber esta información',
  `FECHA_VEN_SEGURO` timestamp NOT NULL,
  `FECHA_VEN_TECNOMECANICA` timestamp NOT NULL,
  `FECHA_VEN_CONTRATO` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `VEHICULOS`
--

INSERT INTO `VEHICULOS` (`NRO_PLACA`, `ID_LINEA`, `MODELO`, `FECHA_VEN_SEGURO`, `FECHA_VEN_TECNOMECANICA`, `FECHA_VEN_CONTRATO`) VALUES
('AOC654', 11, NULL, '2022-07-12 00:00:00', '2022-07-12 00:00:00', '2022-07-12 00:00:00'),
('APL497', 10, '2019', '2020-03-26 00:00:00', '2020-03-26 00:00:00', '2020-03-26 00:00:00'),
('BVG876', 1, '2016', '2020-01-12 00:00:00', '2020-01-12 00:00:00', '2020-01-12 00:00:00'),
('CDM546', 12, NULL, '2016-04-09 00:00:00', '2016-04-09 00:00:00', '2016-04-09 00:00:00'),
('CIG031', 20, NULL, '2016-03-15 00:00:00', '2016-03-15 00:00:00', '2016-03-15 00:00:00'),
('CTL524', 19, '2015', '2016-05-28 00:00:00', '2016-05-28 00:00:00', '2016-05-28 00:00:00'),
('EOG786', 3, '2015', '2017-02-08 00:00:00', '2017-02-08 00:00:00', '2017-02-08 00:00:00'),
('HAO066', NULL, NULL, '2017-06-05 00:00:00', '2017-06-05 00:00:00', '2017-06-05 00:00:00'),
('JAM026', 15, '2017', '2020-03-01 00:00:00', '2020-03-01 00:00:00', '2020-03-01 00:00:00'),
('JAR908', 2, '2019', '2020-08-18 00:00:00', '2020-08-18 00:00:00', '2020-08-18 00:00:00'),
('JFF344', 4, '2016', '2017-02-25 00:00:00', '2017-02-25 00:00:00', '2017-02-25 00:00:00'),
('JJH123', 1, '2018', '2022-05-12 00:00:00', '2022-05-12 00:00:00', '2022-05-12 00:00:00'),
('JPA214', 14, '2019', '2020-09-14 00:00:00', '2020-09-14 00:00:00', '2020-09-14 00:00:00'),
('KHR768', 6, '2017', '2018-09-19 00:00:00', '2018-09-19 00:00:00', '2018-09-19 00:00:00'),
('KMJ564', 2, '2018', '2020-01-12 00:00:00', '2020-01-12 00:00:00', '2020-01-12 00:00:00'),
('LAM000', 17, '2015', '2016-10-23 00:00:00', '2016-10-23 00:00:00', '2016-10-23 00:00:00'),
('LAU584', 1, '2020', '2021-11-04 00:00:00', '2021-11-04 00:00:00', '2021-11-04 00:00:00'),
('LMK325', 4, '2016', '2017-04-02 00:00:00', '2017-04-02 00:00:00', '2017-04-02 00:00:00'),
('MGO546', 2, '2016', '2018-02-27 00:00:00', '2018-02-27 00:00:00', '2018-02-27 00:00:00'),
('MJK123', 5, '2018', '2019-06-06 00:00:00', '2019-06-06 00:00:00', '2019-06-06 00:00:00'),
('MKJ666', 2, '2015', '2016-02-02 00:00:00', '2016-02-02 00:00:00', '2016-02-02 00:00:00'),
('NAM023', 13, '2017', '2018-02-26 00:00:00', '2018-02-26 00:00:00', '2018-02-26 00:00:00'),
('OAP987', 17, '2019', '2019-11-02 00:00:00', '2019-11-02 00:00:00', '2019-11-02 00:00:00'),
('PSV506', 15, '2021', '2022-05-12 00:00:00', '2022-05-12 00:00:00', '2022-05-12 00:00:00'),
('QWE223', 2, '2015', '2022-02-11 00:00:00', '2022-02-11 00:00:00', '2022-02-11 00:00:00'),
('RGT543', 1, '2020', '2021-03-13 00:00:00', '2021-03-13 00:00:00', '2021-03-13 00:00:00'),
('RTE432', 3, '2020', '2019-05-12 00:00:00', '2019-05-12 00:00:00', '2019-05-12 00:00:00'),
('STL154', 5, NULL, '2016-09-10 00:00:00', '2016-09-10 00:00:00', '2016-09-10 00:00:00'),
('TIA765', NULL, '2021', '2022-05-27 00:00:00', '2022-05-27 00:00:00', '2022-05-27 00:00:00'),
('VCF435', 5, '2017', '2023-04-10 00:00:00', '2023-04-10 00:00:00', '2023-04-10 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `TIPO_LINEA`
--
ALTER TABLE `TIPO_LINEA`
  ADD PRIMARY KEY (`ID_LINEA`),
  ADD KEY `FK_ML` (`ID_MARCA`);

--
-- Indexes for table `TIPO_MARCA`
--
ALTER TABLE `TIPO_MARCA`
  ADD PRIMARY KEY (`ID_MARCA`);

--
-- Indexes for table `VEHICULOS`
--
ALTER TABLE `VEHICULOS`
  ADD PRIMARY KEY (`NRO_PLACA`),
  ADD KEY `FK_VL` (`ID_LINEA`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `TIPO_LINEA`
--
ALTER TABLE `TIPO_LINEA`
  MODIFY `ID_LINEA` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `TIPO_MARCA`
--
ALTER TABLE `TIPO_MARCA`
  MODIFY `ID_MARCA` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `TIPO_LINEA`
--
ALTER TABLE `TIPO_LINEA`
  ADD CONSTRAINT `FK_ML` FOREIGN KEY (`ID_MARCA`) REFERENCES `TIPO_MARCA` (`id_marca`);

--
-- Constraints for table `VEHICULOS`
--
ALTER TABLE `VEHICULOS`
  ADD CONSTRAINT `FK_VL` FOREIGN KEY (`ID_LINEA`) REFERENCES `TIPO_LINEA` (`id_linea`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
