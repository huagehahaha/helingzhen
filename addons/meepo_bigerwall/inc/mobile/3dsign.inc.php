<?php
global $_W,$_GPC;
$weid  = $_W['uniacid'];
$rid = intval($_GPC['rid']);
if(empty($rid)){
	message('规则不存在或是已经被删除！');
}
$ridwall = pdo_fetch("SELECT * FROM ".tablename('weixin_wall_reply')." WHERE weid=:weid AND rid = :rid", array(':weid'=>$weid,':rid'=>$rid));
if(empty($ridwall)){
	message('规则不存在或是已经被删除！');
}

if(TIMESTAMP<$ridwall['activity_starttime']){
			$msg='活动在'.date('Y-m-d H:i:s',$ridwall['activity_starttime']).'开始,到时再来哦';
			message($msg);
}
if(TIMESTAMP>$ridwall['activity_endtime']){
	$msg='活动在'.date('Y-m-d H:i:s',$ridwall['activity_endtime']).'结束啦!';
	message($msg);
}
$signtotal = pdo_fetchcolumn('SELECT COUNT(*) FROM ' . tablename('weixin_signs') . " WHERE weid = '{$weid}' AND status=1 AND rid='{$rid}'");
 $signusers = pdo_fetchall('SELECT * FROM ' . tablename('weixin_signs') . " WHERE weid = '{$weid}' AND rid='{$rid}' AND status=1 ORDER BY createtime DESC ");
		if(is_array($signusers)){
			foreach($signusers as &$row){
							$row['image'] = $row['avatar'];
							$row['name'] = $row['nickname'];
						  $row['text'] = $row['content'];
							$row['company'] = '';
							$row['position'] = '';
			}
			unset($row);
		}
include $this->template('3dsign2');