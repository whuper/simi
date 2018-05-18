/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50537
Source Host           : 127.0.0.1:3306
Source Database       : report_new

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2018-05-18 16:22:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `reports`
-- ----------------------------
DROP TABLE IF EXISTS `reports`;
CREATE TABLE `reports` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `userId` varchar(20) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `createTime` varchar(30) DEFAULT NULL,
  `plans` text,
  `tasks` text,
  `weekNumber` smallint(10) DEFAULT NULL,
  `lock` tinyint(5) DEFAULT '1',
  `extraTasks` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reports
-- ----------------------------
INSERT INTO `reports` VALUES ('1', '00131', '周伟', null, '[{\"title\":\"纳里医生app3.9.9 患者管理模块优化\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"纳里医生app3.9.9 医技项目预约弹框文案更改和逻辑更改\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"纳里医生app3.9.9 给随访患者分享名医live\",\"scheduledDate\":\"2018-5-17\",\"remark\":\"null\"},{\"title\":\"纳里医生app3.9.9 健康指标问题优化\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('2', '0017', '王宁武', null, '[{\"title\":\"省中服务窗用户迁移到平台\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"服务劵功能设计开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"代码review\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('3', '0019', '张肖', null, '[{\"title\":\"5月份大版本开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"直播小程序进度查看\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"运营平台数据会议评审\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"沈洪江搜索排序mq联调\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('4', '0043', '项叶峰', null, '[{\"title\":\"省中对账接口调试\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"生活号服务切换事项\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"联空支付平台接口对接\",\"scheduledDate\":\"2018-5-17\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('5', '0047', '卢芳', null, '[{\"title\":\"5月份任务安排\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"消息改造编码\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"转诊优化部分需求编码\",\"scheduledDate\":\"2018-5-17\",\"remark\":\"null\"},{\"title\":\"ehr接口编码\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"转诊模块化-部分\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('6', '0080', '左晓溪', null, '[{\"title\":\"海南中医院对账平台\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"编码完成并内测\"},{\"title\":\"添加所有的开关配置\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"出具标准文档\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('7', '0098', '蓝晓华', null, '[{\"title\":\"5月份大版本任务\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"对账平台\"},{\"title\":\"南宁健康档案（对接卫宁互联网接口）\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"\"},{\"title\":\"桐乡健康档案查询接口文案编写\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"对接：祝必上\"},{\"title\":\"南京玄武区卫计委项目健康档案对接\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"实施：谢国峰\"},{\"title\":\"运营平台纳里云数据分析数据框架确定\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('8', '0110', '张宪强', null, '[{\"title\":\"hiscenter测试\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"运营平台抽离，开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('9', '0121', '林涛', null, '[{\"title\":\"友盟埋点数据\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"3.9.9研发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('10', '0125', '丁东', null, '[{\"title\":\"天津儿童App内测版本完成\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"咨询聊天界面抽出原生\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"孕萌推送\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('11', '0128', '郑继', null, '[{\"title\":\"下版本交互修改及确定\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"下版本交互任务确定\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"其他一些未知任务\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('12', '0134', '申洋', null, '[{\"title\":\"3.9.9版本013需求医技项目预约弹框文案更改的开发\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"3.9.9版本018孕萌SDK的集成\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"3.9.9版本003需求医生反馈渠道需求配合开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('13', '0147', '王文豪', null, '[{\"title\":\"纳里医生pc4.1新需求熟悉\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"纳里医生pc4.1转诊和患者管理部分需求编码\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('14', '0148', '吴海峰', null, '[{\"title\":\"纳里健康5月份版本开发\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('15', '0163', '王飞', null, '[{\"title\":\"大版本开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"紧急版测试\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"分享\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('16', '0184', '俞云', null, '[{\"title\":\"需求评审终审\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"需求开发：咨询首页——患者端\",\"scheduledDate\":\"2018-5-17\",\"remark\":\"null\"},{\"title\":\"需求开发：药事服务新增供应商\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('17', '0195', '姚驰', null, '[{\"title\":\"3.9.9部分需求开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('18', '0196', '周赞', null, '[{\"title\":\"515紧急版项目进度跟踪\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"龙华线上号源被取消问题跟踪\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"微信端框架升级编码\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"健康4.0项目进度跟踪\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('19', '0230', '赵铁猫', null, '[{\"title\":\"紧急版发版支持\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"协助5月大版本筛选相关开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"第三方及消息推送流程培训for王武\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('20', '0248', '宋磊', null, '[{\"title\":\"天津儿童医院\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('21', '0266', '钟子轩', null, '[{\"title\":\"智能宣教任务\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"随访表单删除任务\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"医生端数据分析\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"医生反馈渠道\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('22', '0267', '洪晓君', null, '[{\"title\":\"3.8.9需求开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('23', '0281', '黄建辉', null, '[{\"title\":\"取单明细模块化\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"住院预交部分接口模块化\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('24', '0314', '宋柯', null, '[{\"title\":\"3.9.9 转诊需求开发\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"charts 绘制折线图\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"患者表单智能判断\",\"scheduledDate\":\"2018-5-17\",\"remark\":\"null\"},{\"title\":\"身边医生SDK集成\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('25', '0342', '姚鹏', null, '[{\"title\":\"515紧急版bug修改\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"515紧急版发版\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"5月份大版本需求开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('26', '0351', '袁宗瑞', null, '[{\"title\":\"微信4.0 版本评审 评价中心 功能开发（.医生评价-提交评价页（短信和微信），医生评价-评价失败页（短信和微信）医生评价-评价完成页及按钮跳转（微信））\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('27', '0352', '刘星辰', null, '[{\"title\":\"患者端APP的环信架构搭建\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"患者端APP的环信UI部分\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('28', '0353', '吴思诗', null, '[{\"title\":\"微信端五月份预约业务线需求评审(技术评审)\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"微信端五月份预约业务线开发阶段\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('29', '036', '陈乾', null, '[{\"title\":\"开发大版本需求\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('30', '0363', '廖斌', null, '[{\"title\":\"PC4.1开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"眼底镜走会诊中心模式紧急版bug修复\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('31', '0368', '罗建兵', null, '[{\"title\":\"实施和客服反馈生产环境紧急问题处理和修复；\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"运营平台对账接口功能测试以及新增测试桩接口；\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"运营平台后台服务化项目功能开发；\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('32', '0369', '沈洪江', null, '[{\"title\":\"大版本需求开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('33', '0371', '陈浩', null, '[{\"title\":\"儿童医院的打包上线\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('34', '0380', '庄友权', null, '[{\"title\":\"运营平台服务化整理\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"运营平台运营管理接口设计\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('35', '0385', '姜庭锋', null, '[{\"title\":\"代码编写\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('36', '0399', '张帅', null, '[{\"title\":\"3.9.9版本需求开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('37', '0404', '雷宁', null, '[{\"title\":\"预约、转诊过了就诊时间后点击取消，刷新页面\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"过了确认就诊时间点击确认就诊，给予提示并刷新界面\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('38', '0406', '袁斌', null, '[{\"title\":\"和测试一起大版本需求评审\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"接口文档整理\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"咨询聊天室UI统一，后台配合\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"直播分享到咨询功能初步实现\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"配合运营平台【德清】统计数据\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"配合小程序开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('39', '0409', '王韬', null, '[{\"title\":\"运营平台 3.8 开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('40', '0413', '丁华华', null, '[{\"title\":\"wx4.0  按照分配的任务进行开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('41', '0421', '刘宇昂', null, '[{\"title\":\"实名认证二期发版前bug修改\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"},{\"title\":\"5月大版本 就诊卡使用前验证his手机号接口\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"5月大版本 就诊卡发送短信验证码接口\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('42', '0423', '高勇', null, '[{\"title\":\"纳里健康V4.0 编码\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"咨询聊天室样式UI优化\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('43', '0424', '鬲引', null, '[{\"title\":\"新版本不明确需求点统计及反馈\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"},{\"title\":\"完成分支负责人新版本环境构建任务\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"6月份版本需求接口开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"},{\"title\":\"配合测试人员完成5月15日紧急版，发版工作\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('44', '0425', '杨怡', null, '[{\"title\":\"需求自我分析，提出疑问，充分理解需求\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"无\"},{\"title\":\"准备好开发环境，熟悉相关业务，做开发准备\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"无\"},{\"title\":\"着手新版本需求开发工作\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"无\"},{\"title\":\"学习微信小程序api\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"无\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('45', '0509', '曾奇峰', null, '[{\"title\":\"需求开发\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('46', '0548', '吴镇涛', null, '[{\"title\":\"5月份需求开发\",\"scheduledDate\":\"2018-5-16\",\"remark\":\"null\"},{\"title\":\"门诊缴费丶住院预交模块化\",\"scheduledDate\":\"2018-5-17\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('47', '0559', '张仲华', null, '[{\"title\":\"feature5评价业务功能开发、自测、优化\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('48', '6057', '何彬', null, '[{\"title\":\"微信五月大版开发\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('49', '930724', '李博', null, '[{\"title\":\"app3.9.9版本，医生反馈意见需求\",\"scheduledDate\":\"2018-5-17\",\"remark\":\"null\"},{\"title\":\"app3.9.9版本，随便表单删除的功能\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"null\"}]', null, '19', '1', null);
INSERT INTO `reports` VALUES ('51', '0147', '王文豪', '2018-05-17 07:21:18', '[{\"title\":\"dds\",\"scheduledDate\":\"2018-5-14\",\"remark\":\"\"}]', '[{\"title\":\"纳里医生pc4.1新需求熟悉\",\"scheduledDate\":\"2018-5-15\",\"remark\":\"\",\"finishDate\":\"2018-5-15\"},{\"title\":\"纳里医生pc4.1转诊和患者管理部分需求编码\",\"scheduledDate\":\"2018-5-18\",\"remark\":\"\",\"finishDate\":\"2018-5-18\"}]', '20', '1', '');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `team` varchar(11) DEFAULT NULL COMMENT '1.android 2.ios 3.java 4.h5',
  `role` varchar(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `sex` char(4) DEFAULT NULL,
  `birthday` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '00131', 'e10adc3949ba59abbe56e057f20f883e', '周伟', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('2', '0017', '0c8f5d44c50b2962b3dfd4185349913d', '王宁武', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('3', '0019', '5b65eaf0c1ff3cbd59b1f59835d08e6d', '张肖', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('4', '0043', 'e10adc3949ba59abbe56e057f20f883e', '项叶峰', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('5', '0047', '96e79218965eb72c92a549dd5a330112', '卢芳', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('6', '0080', 'e10adc3949ba59abbe56e057f20f883e', '左晓溪', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('7', '0098', '46f139896e211df4c8998573d392b582', '蓝晓华', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('8', '0108', '94e4320348110efd343e70a99864a535', '杨文存', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('9', '0110', 'e10adc3949ba59abbe56e057f20f883e', '张宪强', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('10', '0121', '96e79218965eb72c92a549dd5a330112', '林涛', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('11', '0125', 'b3b5eb30ee646a5f3a3869e4a24471c2', '丁东', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('12', '0128', 'e10adc3949ba59abbe56e057f20f883e', '郑继', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('13', '0134', 'fce7c8897c50a0c9d65d91cee448ec3e', '申洋', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('14', '0147', 'e10adc3949ba59abbe56e057f20f883e', '王文豪', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('15', '0148', '7925dcd1548e7fa6d8dabc703e491b00', '吴海峰', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('16', '0163', 'e10adc3949ba59abbe56e057f20f883e', '王飞', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('17', '0174', 'e10adc3949ba59abbe56e057f20f883e', '褚炜', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('18', '0181', 'd875ea081bac92287985554ea5d43f20', '吴凯', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('19', '0184', '95ca67b2d0946e8d3e048be509eb4a69', '俞云', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('20', '0195', 'aea7cce1e4c3568f500dab2122ce9908', '姚驰', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('21', '0196', 'e10adc3949ba59abbe56e057f20f883e', '周赞', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('22', '0230', 'e10adc3949ba59abbe56e057f20f883e', '赵铁猫', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('23', '0248', 'e10adc3949ba59abbe56e057f20f883e', '宋磊', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('24', '0266', '198f9e9f064617952401a90cfbff7461', '钟子轩', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('25', '0267', 'e10adc3949ba59abbe56e057f20f883e', '洪晓君', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('26', '0281', '11a28d094624f2be734336cd69a85d1d', '黄建辉', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('27', '0313', '634163d1ffb3af84a8dc3f1880d4ecbb', '翟英祥', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('28', '0314', '7177442fe90a7eddcc453c2e87e2582f', '宋柯', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('29', '0342', 'e10adc3949ba59abbe56e057f20f883e', '姚鹏', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('30', '0350', 'e10adc3949ba59abbe56e057f20f883e', '李博', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('31', '0351', '5538aa8fdcb1ab7d32e95b774cc72db5', '袁宗瑞', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('32', '0352', '21218cca77804d2ba1922c33e0151105', '刘星辰', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('33', '0353', '54e6ba9682151d1cb71c6d52eced277c', '吴思诗', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('34', '036', '2858015d63e28f413f13ad47d9199de0', '陈乾', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('35', '0363', 'e10adc3949ba59abbe56e057f20f883e', '廖斌', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('36', '0368', '9463f16ecd1c7474fe32912a7a737973', '罗建兵', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('37', '0369', 'e10adc3949ba59abbe56e057f20f883e', '沈洪江', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('38', '0371', '586c0ced2eabae87952506746c2bc54e', '陈浩', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('39', '0377', 'b59c67bf196a4758191e42f76670ceba', '叶俊杰', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('40', '0380', '5b23a2dc316b7f10e4277e47ab8eb098', '庄友权', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('41', '0385', '4e4c28c253a7aa32ee688e85fd4bc32a', '姜庭锋', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('42', '0393', '5c09d42738363fc0d7a897f78ca980ca', '何星瑜', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('43', '0399', '24b3708b5a5564fa66c162df0aa9d6f8', '张帅', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('44', '0404', 'b4d50136a88771d0c7613c016fa3afc9', '雷宁', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('45', '0405', 'e10adc3949ba59abbe56e057f20f883e', '任志锟', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('46', '0406', '6a137028861cc4dbe6861669ec56b4bc', '袁斌', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('47', '0407', 'fff2d2269b40ab90b4864fc4440ec372', '张友强', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('48', '0409', 'c2145d9a6b5bd3d2497a56b16ab1bec2', '王韬', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('49', '0413', 'e10adc3949ba59abbe56e057f20f883e', '丁华华', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('50', '0417', '614d868a738cdf812e86d85ae7eefee7', '崔亮亮', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('51', '0421', '202cb962ac59075b964b07152d234b70', '刘宇昂', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('52', '0422', '4b2183986f55bf26fb497507387c4782', '单海伦', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('53', '0423', 'f66c583bb0f57faf6eacaedc7e30834a', '高勇', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('54', '0424', '264412f8eb421b62250e80a49301c460', '鬲引', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('55', '0425', 'd72758e761b65c539d7a2cf0a1761733', '杨怡', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('56', '0426', 'fe264c4b6b94b3391e50136bfd6f0abb', '虞文捷', '2', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('57', '0509', '70aeaac92e01bc647013987f3be994a5', '曾奇峰', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('58', '0548', '0b8f4cfef519ac8c87c3f38970072f90', '吴镇涛', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('59', '0559', 'af962a1ed0a05ea6b9a9c0371a2541dd', '张仲华', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('60', '0571', 'e321643d4fc35af5dcf698d6f6fe5da6', '杜亚东', '4', '1', null, null, null, null, null);
INSERT INTO `users` VALUES ('61', '1', 'c4ca4238a0b923820dcc509a6f75849b', '杨珍', '3', '6', '0', null, null, null, null);
INSERT INTO `users` VALUES ('62', '132', 'e10adc3949ba59abbe56e057f20f883e', '杨腾蛟', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('63', '178', '0bcb5fa51acdd6f6c961d9cf638a26e0', '张宇', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('64', '193', 'bd686fd640be98efaae0091fa301e613', '富杭荣', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('65', '350', 'e10adc3949ba59abbe56e057f20f883e', '李博', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('66', '6057', 'e357c669344dab20709ad2b5a99da140', '何彬', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('67', '6059', 'b5be1c614b83bdd35bee18f216bd7687', '王锡阳', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('68', '6063', 'fa22fb87b07ae7407f5ceda208a47996', '叶轩宇', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('69', '6066', '0bcb5fa51acdd6f6c961d9cf638a26e0', '张宇', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('70', '6071', '79f1cafedc08a4018855f46d64fdc78c', '柳志洁', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('71', '6072', '99a8cef8b2c2fb9699ef5448da1a88d9', '崔小可', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('72', '6074', '21218cca77804d2ba1922c33e0151105', '刘福全', '4', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('73', '6075', '6b2244ecf5881e4aa6d4235d16be7b48', '林朗', '3', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('74', '930724', 'd068382d670468a906ff62106d1d64a7', '李博', '1', '1', '0', null, null, null, null);
INSERT INTO `users` VALUES ('76', 'wangwu', 'e10adc3949ba59abbe56e057f20f883e', '王武', '3', '1', '0', null, null, null, null);
