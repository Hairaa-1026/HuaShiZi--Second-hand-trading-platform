-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2021-01-06 06:17:38
-- 服务器版本： 5.7.26
-- PHP 版本： 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `sourceId` int(11) NOT NULL COMMENT '源信息id',
  `owner` int(11) NOT NULL COMMENT '收藏者',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `invitationcomment`
--

DROP TABLE IF EXISTS `invitationcomment`;
CREATE TABLE IF NOT EXISTS `invitationcomment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品评论id',
  `sourceId` int(11) NOT NULL COMMENT '源帖子id',
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
  `sourceId` int(11) NOT NULL COMMENT '源信息id',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `productcollection`
--

INSERT INTO `productcollection` (`id`, `sourceId`, `modifierId`, `creatorId`, `createTime`, `lastModifyTime`) VALUES
(1, 1, 1, 1, '2020-12-25 12:24:04', '2020-12-25 12:24:04'),
(2, 2, 1, 1, '2020-12-25 12:47:29', '2021-01-03 15:26:46'),
(3, 1, 2, 2, '2021-01-04 14:09:56', '2021-01-04 14:09:56'),
(4, 6, 2, 2, '2021-01-04 14:10:16', '2021-01-04 14:10:16');

-- --------------------------------------------------------

--
-- 表的结构 `productcomment`
--

DROP TABLE IF EXISTS `productcomment`;
CREATE TABLE IF NOT EXISTS `productcomment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品评论id',
  `sourceCommentId` int(11) DEFAULT NULL COMMENT '源评论id',
  `sourceInfoId` int(11) NOT NULL COMMENT '源信息id',
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `productinfo`
--

DROP TABLE IF EXISTS `productinfo`;
CREATE TABLE IF NOT EXISTS `productinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `title` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `price` int(11) NOT NULL COMMENT '价格',
  `pickupWay` enum('自提','送货上门') COLLATE utf8_unicode_ci NOT NULL COMMENT '配送方式',
  `description` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT '详细描述',
  `quality` enum('全新','几乎全新','九成新','八成新','五成新','五成新以下') COLLATE utf8_unicode_ci NOT NULL COMMENT '成色',
  `campus` enum('中北校区','闵行校区') COLLATE utf8_unicode_ci NOT NULL COMMENT '校区',
  `thumbnail` varchar(300) COLLATE utf8_unicode_ci NOT NULL COMMENT '略缩图位置',
  `sellState` tinyint(4) NOT NULL COMMENT '已卖/未卖出',
  `category` enum('教材','卡券','美妆','护肤','服装','食品','租借','其它') COLLATE utf8_unicode_ci NOT NULL COMMENT '商品分类',
  `type` enum('出售','求购') COLLATE utf8_unicode_ci NOT NULL COMMENT '出售/求购',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `lastModifyTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `productinfo`
--

INSERT INTO `productinfo` (`id`, `title`, `price`, `pickupWay`, `description`, `quality`, `campus`, `thumbnail`, `sellState`, `category`, `type`, `creatorId`, `modifierId`, `lastModifyTime`, `createTime`) VALUES
(11, '苹果XR超薄透明手机壳', 10, '自提', '超越裸机手感', '全新', '中北校区', '/images/products/2.jpg', 0, '其它', '出售', 1, 1, '2021-01-06 14:12:33', '2021-01-06 14:12:33');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userName` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `phone` char(11) COLLATE utf8_unicode_ci NOT NULL COMMENT '手机号码',
  `stuNumber` varchar(11) COLLATE utf8_unicode_ci NOT NULL COMMENT '学号',
  `campus` enum('中北校区','闵行校区') COLLATE utf8_unicode_ci NOT NULL COMMENT '校区',
  `authenState` tinyint(4) NOT NULL COMMENT '认证状态',
  `stuCardPhoto` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '校园卡照片',
  `modifierId` int(11) DEFAULT NULL COMMENT '修改者id',
  `creatorId` int(11) DEFAULT NULL COMMENT '创建者id',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
