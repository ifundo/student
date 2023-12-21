/*
 Navicat Premium Data Transfer

 Source Server         : IFundo
 Source Server Type    : MySQL
 Source Server Version : 80100 (8.1.0)
 Source Host           : localhost:3306
 Source Schema         : student

 Target Server Type    : MySQL
 Target Server Version : 80100 (8.1.0)
 File Encoding         : 65001

 Date: 21/12/2023 13:26:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '账号',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名称',
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '角色',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理员';

-- ----------------------------
-- Records of admin
-- ----------------------------
BEGIN;
INSERT INTO `admin` (`id`, `username`, `password`, `name`, `role`) VALUES (1, 'admin', 'admin', 'ADMIN', 'ADMIN');
INSERT INTO `admin` (`id`, `username`, `password`, `name`, `role`) VALUES (2, 'lilei', 'lilei', 'ADMIN', 'ADMIN');
COMMIT;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课程名称',
  `no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课程编号',
  `descr` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课程描述',
  `times` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课时',
  `teacher` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '任课老师',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='课程信息';

-- ----------------------------
-- Records of course
-- ----------------------------
BEGIN;
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (1, '大学英语', 'CS1001', '学习英语', '20', '张三');
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (2, '高等数学', 'CS1002', '学习数学', '30', '李四');
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (3, '大学物理', 'CS1003', '学习物理', '20', '王五');
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (4, '线性代数', 'CS1004', '学习线代', '20', '孙六');
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (5, 'Java', 'CS1005', '学习Java', '30', '好老师');
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (6, 'C++', 'CS1006', '学习C++', '20', '坏老师');
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (7, '1', '1', '1', '1', '1');
INSERT INTO `course` (`id`, `name`, `no`, `descr`, `times`, `teacher`) VALUES (10, '2', '2', '2', '2', '2');
COMMIT;

-- ----------------------------
-- Table structure for grade
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `courseId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课程ID',
  `studentId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '学生ID',
  `score` double(10,1) DEFAULT NULL COMMENT '分数',
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '教师评语',
  `feedback` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '学生反馈',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of grade
-- ----------------------------
BEGIN;
INSERT INTO `grade` (`id`, `courseId`, `studentId`, `score`, `comment`, `feedback`) VALUES (3, '2', '002', 90.0, 'bucuo', NULL);
INSERT INTO `grade` (`id`, `courseId`, `studentId`, `score`, `comment`, `feedback`) VALUES (4, '3', '003', 90.0, 'da ', NULL);
COMMIT;

-- ----------------------------
-- Table structure for selectcourse
-- ----------------------------
DROP TABLE IF EXISTS `selectcourse`;
CREATE TABLE `selectcourse` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `courseName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '测试',
  `courseNo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课程编号',
  `studentId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课程名称',
  `courseId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '课程ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='学生选课';

-- ----------------------------
-- Records of selectcourse
-- ----------------------------
BEGIN;
INSERT INTO `selectcourse` (`id`, `courseName`, `courseNo`, `studentId`, `courseId`) VALUES (2, '英语', 'cs002', '002', '2');
INSERT INTO `selectcourse` (`id`, `courseName`, `courseNo`, `studentId`, `courseId`) VALUES (3, '物理', 'cs003', '003', '3');
INSERT INTO `selectcourse` (`id`, `courseName`, `courseNo`, `studentId`, `courseId`) VALUES (4, '化学', 'cs004', '004', '4');
INSERT INTO `selectcourse` (`id`, `courseName`, `courseNo`, `studentId`, `courseId`) VALUES (6, NULL, NULL, NULL, NULL);
INSERT INTO `selectcourse` (`id`, `courseName`, `courseNo`, `studentId`, `courseId`) VALUES (10, '高等数学', 'CS1002', '1', '2');
INSERT INTO `selectcourse` (`id`, `courseName`, `courseNo`, `studentId`, `courseId`) VALUES (11, '大学物理', 'CS1003', '1', '3');
INSERT INTO `selectcourse` (`id`, `courseName`, `courseNo`, `studentId`, `courseId`) VALUES (12, '大学英语', 'CS1001', '1', '1');
COMMIT;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '学号',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名称',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手机号',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '邮箱',
  `sex` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '性别',
  `birth` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '生日',
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '头像',
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '角色',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='学生信息';

-- ----------------------------
-- Records of student
-- ----------------------------
BEGIN;
INSERT INTO `student` (`id`, `username`, `password`, `name`, `phone`, `email`, `sex`, `birth`, `avatar`, `role`) VALUES (1, 'lilei', 'lilei', '学生：李磊', '166', '903@qq.com', '女', '2002-01-03', 'http://localhost:9090/files/downloadFile?file=1703059061626_ml2.jpg', 'STUDENT');
INSERT INTO `student` (`id`, `username`, `password`, `name`, `phone`, `email`, `sex`, `birth`, `avatar`, `role`) VALUES (2, 'demo2', '23', 'test', '432423', 'asldj?@ad', '女', '2023-12-13', 'http://localhost:9090/files/downloadFile?file=1702972043248_ml2.jpg', 'STUDENT');
INSERT INTO `student` (`id`, `username`, `password`, `name`, `phone`, `email`, `sex`, `birth`, `avatar`, `role`) VALUES (3, 'demo', 'demo', 'test2', NULL, NULL, NULL, NULL, 'http://localhost:9090/files/downloadFile?file=1702748518251_ml1.jpg', 'STUDENT');
INSERT INTO `student` (`id`, `username`, `password`, `name`, `phone`, `email`, `sex`, `birth`, `avatar`, `role`) VALUES (4, 'test-003', '003', 'test', NULL, NULL, NULL, NULL, 'http://localhost:9090/files/downloadFile?file=1702626074961_ml1.jpg', 'STUDENT');
INSERT INTO `student` (`id`, `username`, `password`, `name`, `phone`, `email`, `sex`, `birth`, `avatar`, `role`) VALUES (5, 'test-004', '004', 'test', NULL, NULL, NULL, NULL, NULL, 'STUDENT');
INSERT INTO `student` (`id`, `username`, `password`, `name`, `phone`, `email`, `sex`, `birth`, `avatar`, `role`) VALUES (8, 'test-demo', '123', 'test', NULL, NULL, NULL, NULL, 'http://localhost:9090/files/downloadFile?file=1702622860999_ml2.jpg', 'STUDENT');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
