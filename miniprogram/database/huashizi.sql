-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2020-12-25 04:13:20
-- 服务器版本： 5.7.31
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `huashizi`
--

-- --------------------------------------------------------

--
-- 表的结构 `buyinginfo`
--

DROP TABLE IF EXISTS `buyinginfo`;
CREATE TABLE IF NOT EXISTS `buyinginfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `title` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `price` int(11) NOT NULL COMMENT '价格',
  `pickupWay` enum('SelfPick','Delivery') COLLATE utf8_unicode_ci NOT NULL COMMENT '提取方式',
  `class_id` int(11) NOT NULL COMMENT '分类id',
  `description` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT '详细描述',
  `state` tinyint(4) NOT NULL COMMENT '认证状态',
  `quality` enum('100','95','90','80','50','under') COLLATE utf8_unicode_ci NOT NULL COMMENT '成色',
  `campus` enum('PuTuo','MinHang') COLLATE utf8_unicode_ci NOT NULL COMMENT '校区',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `invitation`
--

DROP TABLE IF EXISTS `invitation`;
CREATE TABLE IF NOT EXISTS `invitation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `class` int(11) NOT NULL COMMENT '分类',
  `context` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT '帖子内容',
  `tag` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '帖子tag',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `invitationcollection`
--

DROP TABLE IF EXISTS `invitationcollection`;
CREATE TABLE IF NOT EXISTS `invitationcollection` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收藏id',
  `source_id` int(11) NOT NULL COMMENT '源信息id',
  `owner` int(11) NOT NULL COMMENT '收藏者',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `invitationcomment`
--

DROP TABLE IF EXISTS `invitationcomment`;
CREATE TABLE IF NOT EXISTS `invitationcomment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品评论id',
  `source_id` int(11) NOT NULL COMMENT '源帖子id',
  `context` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论内容',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `productcollection`
--

DROP TABLE IF EXISTS `productcollection`;
CREATE TABLE IF NOT EXISTS `productcollection` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收藏id',
  `source_id` int(11) NOT NULL COMMENT '源信息id',
  `owner` int(11) NOT NULL COMMENT '收藏者',
  `category` enum('sell','buy') COLLATE utf8_unicode_ci NOT NULL COMMENT '标记收藏产品是求购/出售',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `productcomment`
--

DROP TABLE IF EXISTS `productcomment`;
CREATE TABLE IF NOT EXISTS `productcomment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品评论id',
  `source_Comment_id` int(11) DEFAULT NULL COMMENT '源评论id',
  `source_Info_id` int(11) NOT NULL COMMENT '源信息id',
  `context` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '评论内容',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `productimage`
--

DROP TABLE IF EXISTS `productimage`;
CREATE TABLE IF NOT EXISTS `productimage` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图片id',
  `productId` int(11) NOT NULL COMMENT '商品id',
  `imageAddress` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '图片地址',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `sellinginfo`
--

DROP TABLE IF EXISTS `sellinginfo`;
CREATE TABLE IF NOT EXISTS `sellinginfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `title` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `price` int(11) NOT NULL COMMENT '价格',
  `pickupWay` enum('SelfPick','Delivery') COLLATE utf8_unicode_ci NOT NULL COMMENT '配送方式',
  `class_id` int(11) NOT NULL COMMENT '分类',
  `description` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT '详细描述',
  `state` tinyint(4) NOT NULL COMMENT '出售状态',
  `quality` enum('100','95','90','80','50','under') COLLATE utf8_unicode_ci NOT NULL COMMENT '成色',
  `campus` enum('PuTuo','MinHang') COLLATE utf8_unicode_ci NOT NULL COMMENT '校区',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `lastModifyTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `phone` char(11) COLLATE utf8_unicode_ci NOT NULL COMMENT '手机号码',
  `stu_Number` int(11) NOT NULL COMMENT '学号',
  `campus` enum('Putuo','Minhang') COLLATE utf8_unicode_ci NOT NULL COMMENT '校区',
  `authen_State` tinyint(4) NOT NULL COMMENT '认证状态',
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '公共数据库密码',
  `modifierId` int(11) NOT NULL COMMENT '修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
