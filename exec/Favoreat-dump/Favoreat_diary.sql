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
-- Table structure for table `diary`
--

DROP TABLE IF EXISTS `diary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `no` int NOT NULL,
  `title` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `content` varchar(4000) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `emotion` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `registed_date` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_diary_users_no_idx` (`no`) USING BTREE,
  CONSTRAINT `FK_diary_users_no` FOREIGN KEY (`no`) REFERENCES `users` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diary`
--

LOCK TABLES `diary` WRITE;
/*!40000 ALTER TABLE `diary` DISABLE KEYS */;
INSERT INTO `diary` VALUES (60,106,'hi1','hello1','1','1680509700409'),(61,106,'hi1','hello1','1','1680509703334'),(62,106,'hi1','hello1','1','1680509704183'),(63,106,'hi1','hello1','1','1680509705742'),(64,104,'hi1','hello1','1','1680510236045'),(65,104,'hi1','hello1','1','1680510236881'),(66,104,'hi1','hello1','1','1680510237665'),(67,104,'hi2','hello2','2','1680510916716'),(68,104,'hi2','hello2','2','1680510917198'),(69,104,'hi2','hello2','2','1680510917514'),(70,104,'hi2','hello2','2','1680510917886'),(71,104,'hi2','hello2','2','1680510918221'),(72,104,'hi2','hello2','2','1680510918534'),(73,104,'hi3','hello3','3','1680510923721'),(74,104,'hi3','hello3','3','1680510924057'),(75,104,'hi3','hello3','3','1680510924383'),(76,104,'hi3','hello3','3','1680510924747'),(77,104,'hi3','hello3','3','1680510925096'),(78,104,'hi3','hello3','3','1680510925401'),(79,104,'hi3','hello3','3','1680510925803'),(80,104,'hi4','hello4','4','1680510930501'),(81,104,'hi4','hello4','4','1680510930836'),(82,104,'hi4','hello4','4','1680510931137'),(83,104,'hi4','hello4','4','1680510931512'),(84,104,'hi4','hello4','4','1680510931862'),(85,104,'hi4','hello4','4','1680510932192'),(86,104,'hi5','hello5','5','1680510936797'),(87,104,'hi5','hello5','5','1680510937166'),(88,104,'hi5','hello5','5','1680510937530'),(89,104,'hi5','hello5','5','1680510937858'),(90,104,'hi5','hello5','5','1680510938215'),(91,104,'hi5','hello5','5','1680510938550'),(92,104,'hi5','hello5','5','1680510938854'),(93,104,'hi5','hello5','5','1680510939195'),(94,101,'hi5','hello5','5','1680512120945'),(95,101,'hi5','hello5','5','1680512122580'),(96,101,'hi5','hello5','5','1680512123749'),(97,101,'hi5','hello5','5','1680532663033'),(98,101,'hi5','hello5','5','1680532958133'),(100,101,'thank you','thank you god','5','1680534670346'),(101,101,'thank you','thank you god','5','1680588723769'),(103,101,'thank you','123453','5','1680588753394'),(109,103,'일기를 써요','왜 안대지','4','1680683330789'),(112,104,'','','3','1680695823970');
/*!40000 ALTER TABLE `diary` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-06 10:32:38
