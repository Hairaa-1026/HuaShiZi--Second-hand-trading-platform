-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2021-01-06 05:59:17
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
  `pickupWay` enum('SelfPick','Delivery') COLLATE utf8_unicode_ci NOT NULL COMMENT '配送方式',
  `description` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT '详细描述',
  `quality` enum('100','95','90','80','50','under') COLLATE utf8_unicode_ci NOT NULL COMMENT '成色',
  `campus` enum('PuTuo','MinHang') COLLATE utf8_unicode_ci NOT NULL COMMENT '校区',
  `thumbnail` varchar(300) COLLATE utf8_unicode_ci NOT NULL COMMENT '略缩图位置',
  `sellState` tinyint(4) NOT NULL COMMENT '已卖/未卖出',
  `category` enum('教材','卡券','美妆','护肤','服装','食品','租借','其它') COLLATE utf8_unicode_ci NOT NULL COMMENT '商品分类',
  `type` enum('sell','buy') COLLATE utf8_unicode_ci NOT NULL COMMENT '出售/求购',
  `creatorId` int(11) NOT NULL COMMENT '创建者id',
  `modifierId` int(11) NOT NULL COMMENT '最后修改者id',
  `lastModifyTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `productinfo`
--

INSERT INTO `productinfo` (`id`, `title`, `price`, `pickupWay`, `description`, `quality`, `campus`, `thumbnail`, `sellState`, `category`, `type`, `creatorId`, `modifierId`, `lastModifyTime`, `createTime`) VALUES
(1, '韩式包包', 40, 'SelfPick', '最新款的韩式包包，值得入手！', '95', 'PuTuo', 'images/products/exm1.png', 0, '其它', 'sell', 1, 1, '2021-01-03 15:19:31', '2021-01-03 15:19:31'),
(2, '菌菇水', 20, 'SelfPick', '从朋友手里入手的，应该是正品！', '95', 'PuTuo', 'images/products/exm2.png', 0, '其它', 'sell', 1, 1, '2021-01-03 15:32:31', '2021-01-03 15:19:31'),
(3, 'LANCOME秋冬限量迷雾红管唇膏', 245, 'Delivery', '雾面质感暗红色管身，优雅而高贵', '100', 'MinHang', '/images/products/1.jpg', 0, '美妆', 'sell', 2, 2, '2021-01-06 10:18:21', '2021-01-03 15:43:47'),
(4, 'PUMA芥末绿复古老爹鞋', 529, 'SelfPick', '芥末绿色的鞋面视觉上给人一种清新感。', '100', 'PuTuo', 'images/products/exm1.png', 0, '服装', 'buy', 3, 3, '2021-01-03 15:44:32', '2021-01-03 15:44:32'),
(5, '招聘淘宝客服', 99, 'SelfPick', '找工作外包 副业赚钱 普通族 宝妈应聘 在家可做', '100', 'MinHang', 'images/products/exm1.png', 1, '其它', 'buy', 4, 4, '2021-01-04 14:23:45', '2021-01-03 15:45:38'),
(6, '郑某最喜欢的口红', 30, 'SelfPick', '室友最爱的口红，偷偷拿来卖，希望不会打死我', '90', 'MinHang', 'image/product/exm1.png', 0, '美妆', 'sell', 1, 1, '2021-01-04 19:20:42', '2021-01-04 19:18:49'),
(8, '羊毛毡diy戳戳乐', 12, 'SelfPick', '戳戳乐羊毛条工具配件新手初学套装手工DIY材料包', '95', 'MinHang', 'image/product/exm2.png', 0, '其它', 'sell', 1, 1, '2021-01-04 19:26:45', '2021-01-04 19:26:45'),
(9, '华为p40pro手机壳摄像头全包女款', 27, 'SelfPick', '撞色按键 磨砂手感 不沾指纹 镜头全包', '90', 'PuTuo', 'image/product/exm3.png', 0, '其它', 'buy', 2, 2, '2021-01-04 19:29:23', '2021-01-04 19:29:23'),
(10, '通勤大包 三层大容量商务女包软皮女款电脑公文手提单肩包托特包', 89, 'SelfPick', '口袋大 多分层', '50', 'PuTuo', 'image/product/exm4.png', 0, '其它', 'sell', 2, 2, '2021-01-04 19:31:49', '2021-01-04 19:31:49');

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
  `campus` enum('Putuo','Minhang') COLLATE utf8_unicode_ci NOT NULL COMMENT '校区',
  `authenState` tinyint(4) NOT NULL COMMENT '认证状态',
  `stuCardPhoto` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '校园卡照片',
  `modifierId` int(11) DEFAULT NULL COMMENT '修改者id',
  `creatorId` int(11) DEFAULT NULL COMMENT '创建者id',
  `lastModifyTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `userName`, `phone`, `stuNumber`, `campus`, `authenState`, `stuCardPhoto`, `modifierId`, `creatorId`, `lastModifyTime`, `createTime`) VALUES
(1, 'H', '15621927126', '1', 'Putuo', 0, 'image/user/1.jpg', 1, 1, '2021-01-02 22:36:13', '2020-12-25 16:09:27'),
(2, '郑某人', '15621927127', '10185102257', 'Putuo', 0, 'image/card/zhy.png', 2, 2, '2021-01-04 13:37:46', '2021-01-04 13:28:21'),
(3, '海海子', '15621927126', '10185102251', 'Putuo', 0, 'image/card/hr.png', 3, 3, '2021-01-04 13:37:32', '2021-01-04 13:37:32'),
(4, '海海子', '15621927126', '10185102251', 'Putuo', 0, 'image/card/hr.png', 4, 4, '2021-01-04 15:52:33', '2021-01-04 15:52:33'),
(5, 'undefined', '15621927126', '10185102251', 'Putuo', 0, 'a', 5, 5, '2021-01-06 10:23:02', '2021-01-06 10:09:15');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;