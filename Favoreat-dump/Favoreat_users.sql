-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: j8d108.p.ssafy.io    Database: Favoreat
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `no` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `token` varchar(1000) DEFAULT NULL,
  `alarm` bit(1) NOT NULL DEFAULT b'0',
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `userscol_UNIQUE` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user0@example.com','user0',NULL,_binary '\0','GUEST'),(2,'user1@example.com','user1',NULL,_binary '\0','GUEST'),(3,'user2@example.com','user2',NULL,_binary '\0','GUEST'),(4,'user3@example.com','user3',NULL,_binary '\0','GUEST'),(5,'user4@example.com','user4',NULL,_binary '\0','GUEST'),(6,'user5@example.com','user5',NULL,_binary '\0','GUEST'),(7,'user6@example.com','user6',NULL,_binary '\0','GUEST'),(8,'user7@example.com','user7',NULL,_binary '\0','GUEST'),(9,'user8@example.com','user8',NULL,_binary '\0','GUEST'),(10,'user9@example.com','user9',NULL,_binary '\0','GUEST'),(11,'user10@example.com','user10',NULL,_binary '\0','GUEST'),(12,'user11@example.com','user11',NULL,_binary '\0','GUEST'),(13,'user12@example.com','user12',NULL,_binary '\0','GUEST'),(14,'user13@example.com','user13',NULL,_binary '\0','GUEST'),(15,'user14@example.com','user14',NULL,_binary '\0','GUEST'),(16,'user15@example.com','user15',NULL,_binary '\0','GUEST'),(17,'user16@example.com','user16',NULL,_binary '\0','GUEST'),(18,'user17@example.com','user17',NULL,_binary '\0','GUEST'),(19,'user18@example.com','user18',NULL,_binary '\0','GUEST'),(20,'user19@example.com','user19',NULL,_binary '\0','GUEST'),(21,'user20@example.com','user20',NULL,_binary '\0','GUEST'),(22,'user21@example.com','user21',NULL,_binary '\0','GUEST'),(23,'user22@example.com','user22',NULL,_binary '\0','GUEST'),(24,'user23@example.com','user23',NULL,_binary '\0','GUEST'),(25,'user24@example.com','user24',NULL,_binary '\0','GUEST'),(26,'user25@example.com','user25',NULL,_binary '\0','GUEST'),(27,'user26@example.com','user26',NULL,_binary '\0','GUEST'),(28,'user27@example.com','user27',NULL,_binary '\0','GUEST'),(29,'user28@example.com','user28',NULL,_binary '\0','GUEST'),(30,'user29@example.com','user29',NULL,_binary '\0','GUEST'),(31,'user30@example.com','user30',NULL,_binary '\0','GUEST'),(32,'user31@example.com','user31',NULL,_binary '\0','GUEST'),(33,'user32@example.com','user32',NULL,_binary '\0','GUEST'),(34,'user33@example.com','user33',NULL,_binary '\0','GUEST'),(35,'user34@example.com','user34',NULL,_binary '\0','GUEST'),(36,'user35@example.com','user35',NULL,_binary '\0','GUEST'),(37,'user36@example.com','user36',NULL,_binary '\0','GUEST'),(38,'user37@example.com','user37',NULL,_binary '\0','GUEST'),(39,'user38@example.com','user38',NULL,_binary '\0','GUEST'),(40,'user39@example.com','user39',NULL,_binary '\0','GUEST'),(41,'user40@example.com','user40',NULL,_binary '\0','GUEST'),(42,'user41@example.com','user41',NULL,_binary '\0','GUEST'),(43,'user42@example.com','user42',NULL,_binary '\0','GUEST'),(44,'user43@example.com','user43',NULL,_binary '\0','GUEST'),(45,'user44@example.com','user44',NULL,_binary '\0','GUEST'),(46,'user45@example.com','user45',NULL,_binary '\0','GUEST'),(47,'user46@example.com','user46',NULL,_binary '\0','GUEST'),(48,'user47@example.com','user47',NULL,_binary '\0','GUEST'),(49,'user48@example.com','user48',NULL,_binary '\0','GUEST'),(50,'user49@example.com','user49',NULL,_binary '\0','GUEST'),(51,'user50@example.com','user50',NULL,_binary '\0','GUEST'),(52,'user51@example.com','user51',NULL,_binary '\0','GUEST'),(53,'user52@example.com','user52',NULL,_binary '\0','GUEST'),(54,'user53@example.com','user53',NULL,_binary '\0','GUEST'),(55,'user54@example.com','user54',NULL,_binary '\0','GUEST'),(56,'user55@example.com','user55',NULL,_binary '\0','GUEST'),(57,'user56@example.com','user56',NULL,_binary '\0','GUEST'),(58,'user57@example.com','user57',NULL,_binary '\0','GUEST'),(59,'user58@example.com','user58',NULL,_binary '\0','GUEST'),(60,'user59@example.com','user59',NULL,_binary '\0','GUEST'),(61,'user60@example.com','user60',NULL,_binary '\0','GUEST'),(62,'user61@example.com','user61',NULL,_binary '\0','GUEST'),(63,'user62@example.com','user62',NULL,_binary '\0','GUEST'),(64,'user63@example.com','user63',NULL,_binary '\0','GUEST'),(65,'user64@example.com','user64',NULL,_binary '\0','GUEST'),(66,'user65@example.com','user65',NULL,_binary '\0','GUEST'),(67,'user66@example.com','user66',NULL,_binary '\0','GUEST'),(68,'user67@example.com','user67',NULL,_binary '\0','GUEST'),(69,'user68@example.com','user68',NULL,_binary '\0','GUEST'),(70,'user69@example.com','user69',NULL,_binary '\0','GUEST'),(71,'user70@example.com','user70',NULL,_binary '\0','GUEST'),(72,'user71@example.com','user71',NULL,_binary '\0','GUEST'),(73,'user72@example.com','user72',NULL,_binary '\0','GUEST'),(74,'user73@example.com','user73',NULL,_binary '\0','GUEST'),(75,'user74@example.com','user74',NULL,_binary '\0','GUEST'),(76,'user75@example.com','user75',NULL,_binary '\0','GUEST'),(77,'user76@example.com','user76',NULL,_binary '\0','GUEST'),(78,'user77@example.com','user77',NULL,_binary '\0','GUEST'),(79,'user78@example.com','user78',NULL,_binary '\0','GUEST'),(80,'user79@example.com','user79',NULL,_binary '\0','GUEST'),(81,'user80@example.com','user80',NULL,_binary '\0','GUEST'),(82,'user81@example.com','user81',NULL,_binary '\0','GUEST'),(83,'user82@example.com','user82',NULL,_binary '\0','GUEST'),(84,'user83@example.com','user83',NULL,_binary '\0','GUEST'),(85,'user84@example.com','user84',NULL,_binary '\0','GUEST'),(86,'user85@example.com','user85',NULL,_binary '\0','GUEST'),(87,'user86@example.com','user86',NULL,_binary '\0','GUEST'),(88,'user87@example.com','user87',NULL,_binary '\0','GUEST'),(89,'user88@example.com','user88',NULL,_binary '\0','GUEST'),(90,'user89@example.com','user89',NULL,_binary '\0','GUEST'),(91,'user90@example.com','user90',NULL,_binary '\0','GUEST'),(92,'user91@example.com','user91',NULL,_binary '\0','GUEST'),(93,'user92@example.com','user92',NULL,_binary '\0','GUEST'),(94,'user93@example.com','user93',NULL,_binary '\0','GUEST'),(95,'user94@example.com','user94',NULL,_binary '\0','GUEST'),(96,'user95@example.com','user95',NULL,_binary '\0','GUEST'),(97,'user96@example.com','user96',NULL,_binary '\0','GUEST'),(98,'user97@example.com','user97',NULL,_binary '\0','GUEST'),(99,'user98@example.com','user98',NULL,_binary '\0','GUEST'),(100,'user99@example.com','user99',NULL,_binary '\0','GUEST'),(101,'cmlee0913@naver.com','이창민','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE5MDgwMjN9.PrZVQRiiuM7o6i9IgE5h4GeVq65_YDI1EIoLGzhwe2sePsqbLi_5D2f2rZi1cjq91kD92pW4QJdpdSEMlvrbtw',_binary '\0','USER'),(103,'sige_tank@naver.com','오민준','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE4OTI5MDB9.U2ElokrjxPjdl3o7Lxuz65CMW0pER6ToxOY3IUqxKpNwgJPMDNP4J82zLvi20AIBrb2uk9W1wtwifisOyU3FZg',_binary '\0','USER'),(104,'dpdms2148@naver.com','장예은','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE5NTM5OTZ9.zKW1uCLXbBAA7IZBV14EMe_TvmiJmSNdWKoBXDpBcl_GiOe4MY24gzYcV7uSfSlXDOJYZkcxy6i4V8M_vOCWHQ',_binary '\0','USER'),(105,'ymj06073@naver.com','김희진',NULL,_binary '\0','GUEST'),(106,'way693@naver.com','이지은',NULL,_binary '\0','GUEST'),(107,'rlaghrbs1633@naver.com','김호균','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE4OTk2Njl9.SQZyUvTLfPQyojtgyLmjH_uz7HSmTSB5cGT_nVVVTMLHVx9HZ7olmfSi-2zwQQnvzaT1u9M9BQOCa4RhEuMnCg',_binary '\0','USER'),(108,'tjwjd4560@naver.com','양서정','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE4OTIyNTF9.XHeqzkSnwG3ecTSO9900FcNvjLhqwJu9vroWd2FxVwGOw6ONNleItHoyHVMoNaqlYEq63-UjLxTdCWt6uIeAHg',_binary '\0','USER'),(109,'pjh5699@nate.com','박재현',NULL,_binary '\0','USER'),(110,'sky834459@gmail.com','김태훈','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE3ODU0MDd9.8LvS4hhT-yF0ahMD9ECMuOKeD8_F34ghNg2xLQOIpSxy2Shob5y446-BF-NVZLiq70VUv3HDbl3HiM4T__Qgig',_binary '\0','USER'),(111,'tatybir@naver.com','이희수','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE4MTQxODh9.b8yxKvlhfZPUOOtFW6Nbyn64jvgkK6-Gch27zYXTANc1xdSMXRdXFNImoFbTOfGGv8H4pOQv9Y04H0W3CAGx8g',_binary '\0','USER'),(112,'sohee03719@naver.com','박소희','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE4OTM1MTB9.PaHT4j8kgh3YsekVV1rTCHKYt4KW3K5WUgRkaaPuHRlBBN-Zch_qga6ToJt7PuBRc0775ljfJ5zab-VmPaBzeg',_binary '\0','USER'),(113,'tmfdhddl2006@naver.com','이병수','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE5MDIyOTZ9.SOZjcB4Km00fXCZY68KJ4Ijq6pUffTQ6dREj3Y8jdcK2ASBEoBaZ0yxfl6REN6b6O2893uQHWS2gAF0_5XLSbA',_binary '\0','GUEST'),(114,'leehyojin200@naver.com','이효진','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE5MDI1ODZ9.iqBiGSMGMXPhpXtkPb_Y9SxTzkCpSpheH4iSwt6IbX_sByOAsI9yXktByyKveQDkkiP8FByWDra5DDeZW1mL7g',_binary '\0','GUEST'),(115,'jaehe0413@naver.com','박재희','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2ODE5NTM4MjV9.UQ7v0BFhOcwwVp5U01I2SDECQzKgIQBKnHEz3VtKT8_qgeKnwb2ehy_0ifNeBj0itzlJPFVllJ86IrbNI_SnUA',_binary '\0','USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-06 10:32:39
