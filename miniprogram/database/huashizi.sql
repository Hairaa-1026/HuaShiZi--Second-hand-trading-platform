-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2021-01-06 07:30:23
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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `productinfo`
--

INSERT INTO `productinfo` (`id`, `title`, `price`, `pickupWay`, `description`, `quality`, `campus`, `thumbnail`, `sellState`, `category`, `type`, `creatorId`, `modifierId`, `lastModifyTime`, `createTime`) VALUES
(1, '苹果XR超薄透明手机壳', 10, '自提', '超越裸机手感', '全新', '中北校区', '/images/products/2.jpg', 0, '其它', '出售', 1, 1, '2021-01-06 14:21:56', '2021-01-06 14:12:33'),
(2, '龙王豆浆粉', 35, '自提', ' 非转基因豆浆粉冲饮小包甜味豆粉早餐豆浆粉', '全新', '闵行校区', '/images/products/3.jpg', 0, '食品', '出售', 1, 1, '2021-01-06 14:22:09', '2021-01-06 14:21:51'),
(4, '兰蔻菁纯柔雾哑光唇膏196胡萝卜色', 269, '送货上门', '求购，收正品带小票', '九成新', '中北校区', '/images/products/1.jpg', 0, '美妆', '求购', 1, 1, '2021-01-06 14:26:27', '2021-01-06 14:26:27'),
(13, 'ipadair3保护套', 30, '自提', '透明防摔气囊第八代', '几乎全新', '闵行校区', '/images/products/4.jpg', 0, '其它', '求购', 1, 1, '2021-01-06 14:24:13', '2021-01-06 14:24:13'),
(14, '一兆韦德5年健身卡转让', 8500, '自提', '原价12000，除one T店外，其它门店通用，五年卡，还剩4.5年。游泳健身都可。', '全新', '中北校区', '/images/products/5.jpg', 0, '卡券', '出售', 1, 1, '2021-01-06 14:37:59', '2021-01-06 14:37:59'),
(15, '单色舞蹈卡求购', 2999, '自提', '想学舞蹈，零基础，预算3000左右', '全新', '中北校区', '/images/products/7.jpg', 0, '卡券', '求购', 1, 1, '2021-01-06 14:39:34', '2021-01-06 14:39:34'),
(16, '永和大王优惠券', 99, '自提', '可以兑换100个蒸饺，平均1元1个，超值！', '全新', '中北校区', '/images/products/6.png', 0, '卡券', '求购', 1, 1, '2021-01-06 14:41:07', '2021-01-06 14:41:07'),
(17, '面向使用的软件设计', 30, '自提', '这本书棒棒棒！', '九成新', '闵行校区', '/images/products/book1.jpg', 0, '教材', '求购', 1, 1, '2021-01-06 14:48:37', '2021-01-06 14:48:37'),
(18, '软件工程--实践者的研究方法', 49, '送货上门', '经典黑皮书，从入门到入土，代代相传', '五成新', '中北校区', '/images/products/book2.jpg', 0, '教材', '求购', 1, 1, '2021-01-06 14:49:42', '2021-01-06 14:49:42'),
(19, '数据库重构', 19, '送货上门', '经典书籍，值得拥有', '五成新', '中北校区', '/images/products/book4.jpg', 0, '教材', '求购', 1, 1, '2021-01-06 14:50:14', '2021-01-06 14:50:14'),
(20, '软件工程-项目管理实用技术与常用模板', 28, '送货上门', '这是真的吗？不妨来看看', '五成新', '中北校区', '/images/products/book3.jpg', 0, '教材', '求购', 1, 1, '2021-01-06 14:50:50', '2021-01-06 14:50:50'),
(21, 'Judydoll橘朵三色巧克力拼盘眼影盘', 40, '送货上门', '#05色号 焦糖海盐松露', '几乎全新', '中北校区', '/images/products/6.jpg', 0, '美妆', '求购', 1, 1, '2021-01-06 14:55:26', '2021-01-06 14:55:26'),
(22, '花西子彩妆套装', 449, '送货上门', '初学者学生新手全套淡妆礼盒化妆品组合', '几乎全新', '中北校区', '/images/products/8.jpg', 0, '美妆', '求购', 1, 1, '2021-01-06 14:57:04', '2021-01-06 14:57:04'),
(23, '自然堂雪润护肤品套装', 199, '送货上门', '美白淡斑祛斑补水水乳', '几乎全新', '中北校区', '/images/products/9.jpg', 0, '护肤', '求购', 1, 1, '2021-01-06 14:58:56', '2021-01-06 14:58:56'),
(24, '自然堂面膜5片', 40, '送货上门', '补水保湿美白淡斑抗皱紧致', '几乎全新', '中北校区', '/images/products/10.jpg', 0, '护肤', '求购', 1, 1, '2021-01-06 15:16:00', '2021-01-06 15:16:00'),
(25, '程序媛必备格子衫M号，码力upup', 59, '自提', '优衣库 女装 法兰绒格子衬衫(长袖) 436536 UNIQLO', '全新', '中北校区', '/images/products/11.jpg', 0, '服装', '出售', 1, 1, '2021-01-06 15:18:57', '2021-01-06 15:18:57'),
(26, '红黑格子衫L号', 99, '自提', '优衣库 女装 法兰绒格子衬衫(长袖)  UNIQLO', '全新', '中北校区', '/images/products/12.jpg', 0, '服装', '出售', 1, 1, '2021-01-06 15:19:59', '2021-01-06 15:19:59'),
(27, '时尚的格子衫，跟普通程序员不同', 99, '自提', '优衣库 女装 法兰绒格子衬衫(长袖)  UNIQLO', '全新', '中北校区', '/images/products/13.jpg', 0, '服装', '出售', 1, 1, '2021-01-06 15:21:02', '2021-01-06 15:21:02'),
(28, '卫龙辣条套装', 25, '自提', '经典辣条组合 独立小包便携 休闲辣味零食', '全新', '中北校区', '/images/products/14.jpg', 0, '食品', '出售', 1, 1, '2021-01-06 15:24:19', '2021-01-06 15:22:55'),
(29, '乐事桶装薯片3个', 16, '自提', '微微厚 大满足', '全新', '中北校区', '/images/products/15.jpg', 0, '食品', '出售', 1, 1, '2021-01-06 15:24:07', '2021-01-06 15:24:07'),
(30, '2021年北京大学考研初试精品资料', 488, '自提', '2021考研 专注学科专业科目 华研考研', '全新', '中北校区', '/images/products/16.jpg', 0, '租借', '出售', 1, 1, '2021-01-06 15:27:03', '2021-01-06 15:27:03'),
(31, '有偿借用46级耳机', 5, '自提', '一键考试 柔软大耳罩 正品带防伪', '全新', '中北校区', '/images/products/17.jpg', 0, '租借', '求购', 1, 1, '2021-01-06 15:28:40', '2021-01-06 15:28:08');

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

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `userName`, `phone`, `stuNumber`, `campus`, `authenState`, `stuCardPhoto`, `modifierId`, `creatorId`, `lastModifyTime`, `createTime`) VALUES
(1, '海海子', '15621927126', '10185102251', '中北校区', 1, '/images/user/10185102251.jpg', 1, 1, '2021-01-06 14:29:59', '2021-01-06 14:29:59');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
