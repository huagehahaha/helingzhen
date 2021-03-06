<?php
pdo_query("CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_apiconfig` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`uniacid` int(10) unsigned NOT NULL,
`apitype` varchar(50),
`key` varchar(50),
`tpl_id` varchar(50),
`sign` varchar(50),
`aging` int(10),
`agingrepeat` tinyint(1) NOT NULL,
PRIMARY KEY (`id`),
KEY `uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_exchange` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`awardingstarttime` int(10),
`awardingendtime` int(10),
`awarding_tips` varchar(50),
`warning_tips` varchar(200),
`yidong_tips` varchar(200),
`liantong_tips` varchar(200),
`dianxin_tips` varchar(200),
`isrealname` tinyint(1) unsigned NOT NULL,
`ismobile` tinyint(1) unsigned NOT NULL,
`isqq` tinyint(1) unsigned NOT NULL,
`isemail` tinyint(1) unsigned NOT NULL,
`isaddress` tinyint(1) unsigned NOT NULL,
`isgender` tinyint(1) unsigned NOT NULL,
`istelephone` tinyint(1) unsigned NOT NULL,
`isidcard` tinyint(1) unsigned NOT NULL,
`iscompany` tinyint(1) unsigned NOT NULL,
`isoccupation` tinyint(1) unsigned NOT NULL,
`isposition` tinyint(1) unsigned NOT NULL,
`isfans` tinyint(1) unsigned NOT NULL,
`isfansname` varchar(225) NOT NULL,
`tmplmsg_participate` int(11),
`tmplmsg_help` int(11),
`tmplmsg_exchange` int(11),
`limittype` tinyint(1) unsigned NOT NULL,
`limitgender` tinyint(1) unsigned NOT NULL,
`limitcity` varchar(1000),
`limitwelfare` int(10),
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_fans` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`from_user` varchar(50) NOT NULL,
`avatar` varchar(512) NOT NULL,
`nickname` varchar(50) NOT NULL,
`realname` varchar(20) NOT NULL,
`mobile` varchar(20) NOT NULL,
`qq` varchar(15) NOT NULL,
`email` varchar(50) NOT NULL,
`address` varchar(255) NOT NULL,
`gender` tinyint(1) NOT NULL,
`telephone` varchar(15) NOT NULL,
`idcard` varchar(30) NOT NULL,
`company` varchar(50) NOT NULL,
`occupation` varchar(30) NOT NULL,
`position` varchar(30) NOT NULL,
`mobile_province` varchar(20) NOT NULL,
`mobile_city` varchar(20) NOT NULL,
`mobile_company` varchar(20) NOT NULL,
`inpoint` float(10,2) unsigned NOT NULL,
`outpoint` float(10,2) unsigned NOT NULL,
`sharepoint` float(10,2) unsigned NOT NULL,
`sharenum` int(10) unsigned NOT NULL,
`share_num` int(10) unsigned NOT NULL,
`sharetime` int(10) unsigned NOT NULL,
`createtime` int(10) unsigned NOT NULL,
`zhongjiang` tinyint(1) unsigned NOT NULL,
`xuni` tinyint(1) unsigned NOT NULL,
`status` tinyint(1) unsigned NOT NULL,
`limit` tinyint(1) unsigned NOT NULL,
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_fansaward` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`from_user` varchar(50),
`codesn` varchar(20),
`createtime` int(10),
`consumetime` int(10),
`zhongjiang` tinyint(1),
`xuni` tinyint(1) unsigned NOT NULL,
`outpoint` float(10,2) unsigned NOT NULL,
`log` varchar(500) NOT NULL,
`completed` int(11) NOT NULL,
`ticketname` varchar(30) NOT NULL,
`error_num` tinyint(1) unsigned NOT NULL,
`error_seed` tinyint(1) unsigned NOT NULL,
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_fanstmplmsg` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`from_user` varchar(50),
`tmplmsgid` int(11),
`tmplmsg` text NOT NULL,
`seednum` int(10),
`createtime` int(10),
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_prizeid` (`tmplmsgid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_mobileverify` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`realname` varchar(50) NOT NULL,
`mobile` varchar(15) NOT NULL,
`status` tinyint(1) unsigned NOT NULL,
`createtime` int(10) unsigned NOT NULL,
`verifytime` int(10) unsigned NOT NULL,
`welfare` int(10) unsigned NOT NULL,
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_redpack` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`uniacid` int(10) unsigned NOT NULL,
`appid` varchar(100),
`secret` varchar(100),
`mchid` varchar(20),
`ip` varchar(25),
`signkey` varchar(32),
PRIMARY KEY (`id`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_reply` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`templateid` int(10) unsigned NOT NULL,
`title` varchar(50),
`description` varchar(255),
`start_picurl` varchar(200),
`end_title` varchar(50),
`end_description` varchar(200),
`end_picurl` varchar(200),
`isshow` tinyint(1),
`starttime` int(10),
`endtime` int(10),
`music` tinyint(1) unsigned NOT NULL,
`musicurl` varchar(255) NOT NULL,
`mauto` tinyint(1) unsigned NOT NULL,
`mloop` tinyint(1) unsigned NOT NULL,
`issubscribe` tinyint(1) unsigned NOT NULL,
`visubscribe` tinyint(1) unsigned NOT NULL,
`sys_users` varchar(500) NOT NULL,
`sys_users_tips` varchar(300),
`fansnum` int(10),
`viewnum` int(10),
`prize_num` int(10),
`award_num` int(10),
`viewawardnum` int(10) unsigned NOT NULL,
`viewranknum` int(10) unsigned NOT NULL,
`msgadpic` varchar(1000),
`msgadpictime` tinyint(1) unsigned NOT NULL,
`intips` varchar(200),
`copyright` varchar(20),
`helptel` varchar(20),
`homeanniu` varchar(50),
`lingquanniu` varchar(50),
`lingquanniutips` varchar(50),
`helptips` varchar(50),
`helpanniu` varchar(50),
`seedredpack` tinyint(1) unsigned NOT NULL,
`redpacktype` tinyint(1) unsigned NOT NULL,
`redpackv` tinyint(1) unsigned NOT NULL,
`danwei` varchar(10),
`redpack` varchar(10),
`acthelp` varchar(10),
`redpack_meun` varchar(300),
`sharepoint` int(10) unsigned NOT NULL,
`maxsharepoint` int(10) unsigned NOT NULL,
`redpack_tips` varchar(100),
`inpointstart` float(10,2) unsigned NOT NULL,
`inpointend` float(10,2) unsigned NOT NULL,
`randompointstart` float(10,2) unsigned NOT NULL,
`randompointend` float(10,2) unsigned NOT NULL,
`addp` tinyint(1),
`power` tinyint(1) unsigned NOT NULL,
`poweravatar` varchar(3),
`powertype` tinyint(1) unsigned NOT NULL,
`limittype` tinyint(1),
`totallimit` tinyint(1),
`helptype` tinyint(1) unsigned NOT NULL,
`helpfans` tinyint(1) unsigned NOT NULL,
`helplihe` tinyint(1) unsigned NOT NULL,
`xuninum` int(10) unsigned NOT NULL,
`xuninumtime` int(10) unsigned NOT NULL,
`xuninuminitial` int(10) unsigned NOT NULL,
`xuninumending` int(10) unsigned NOT NULL,
`xuninum_time` int(10) unsigned NOT NULL,
`adpic` varchar(255),
`toppic` varchar(255),
`helppic` varchar(255),
`duihuanpic` varchar(255),
`myfanspic` varchar(255),
`homepictime` tinyint(1) unsigned NOT NULL,
`homepictype` tinyint(1) unsigned NOT NULL,
`homepic` varchar(1000) NOT NULL,
`mobileverify` tinyint(1) unsigned NOT NULL,
`smsverify` tinyint(1) unsigned NOT NULL,
`createtime` int(10),
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_share` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`acid` int(10) unsigned NOT NULL,
`help_url` varchar(255),
`share_url` varchar(255),
`share_open_close` tinyint(1) unsigned NOT NULL,
`share_title` varchar(50),
`share_desc` varchar(100),
`share_txt` text NOT NULL,
`share_img` varchar(255) NOT NULL,
`share_anniu` varchar(255) NOT NULL,
`share_anniufirend` varchar(255) NOT NULL,
`share_firend` varchar(255) NOT NULL,
`share_pic` varchar(255) NOT NULL,
`share_confirm` varchar(200),
`share_confirmurl` varchar(255),
`share_fail` varchar(200),
`share_cancel` varchar(200),
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_acid` (`acid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_sharedata` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`rid` int(10) unsigned NOT NULL,
`uniacid` int(10) unsigned NOT NULL,
`share_type` int(10) unsigned NOT NULL,
`virtual` tinyint(1) unsigned NOT NULL,
`sharepoint` float(10,2) unsigned NOT NULL,
`welfare` int(10) unsigned NOT NULL,
`from_user` varchar(50) NOT NULL,
`fromuser` varchar(50) NOT NULL,
`avatar` varchar(512) NOT NULL,
`nickname` varchar(50) NOT NULL,
`visitorsip` varchar(15) NOT NULL,
`visitorstime` int(10) unsigned NOT NULL,
`viewnum` int(10) unsigned NOT NULL,
PRIMARY KEY (`id`),
KEY `indx_rid` (`rid`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_template` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`uniacid` int(10) unsigned NOT NULL,
`title` varchar(20),
`thumb` varchar(255),
`fontsize` varchar(2),
`bgimg` varchar(255),
`bgcolor` varchar(7),
`textcolor` varchar(7),
`textcolorlink` varchar(7),
`buttoncolor` varchar(7),
`buttontextcolor` varchar(7),
`rulecolor` varchar(7),
`ruletextcolor` varchar(7),
`navcolor` varchar(7),
`navtextcolor` varchar(7),
`navactioncolor` varchar(7),
`watchcolor` varchar(7),
`watchtextcolor` varchar(7),
`awardcolor` varchar(7),
`awardtextcolor` varchar(7),
`awardscolor` varchar(7),
`awardstextcolor` varchar(7),
PRIMARY KEY (`id`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `ims_stonefish_redfunshare_tmplmsg` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`uniacid` int(10) unsigned NOT NULL,
`template_id` varchar(50),
`template_name` varchar(20),
`topcolor` varchar(7),
`first` varchar(100),
`firstcolor` varchar(7),
`keyword1` varchar(100),
`keyword1code` varchar(20),
`keyword1color` varchar(7),
`keyword2` varchar(100),
`keyword2code` varchar(20),
`keyword2color` varchar(7),
`keyword3` varchar(100),
`keyword3code` varchar(20),
`keyword3color` varchar(7),
`keyword4` varchar(100),
`keyword4code` varchar(20),
`keyword4color` varchar(7),
`keyword5` varchar(100),
`keyword5code` varchar(20),
`keyword5color` varchar(7),
`keyword6` varchar(100),
`keyword6code` varchar(20),
`keyword6color` varchar(7),
`keyword7` varchar(100),
`keyword7code` varchar(20),
`keyword7color` varchar(7),
`keyword8` varchar(100),
`keyword8code` varchar(20),
`keyword8color` varchar(7),
`keyword9` varchar(100),
`keyword9code` varchar(20),
`keyword9color` varchar(7),
`keyword10` varchar(100),
`keyword10code` varchar(20),
`keyword10color` varchar(7),
`remark` varchar(100),
`remarkcolor` varchar(7),
PRIMARY KEY (`id`),
KEY `indx_uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

");
