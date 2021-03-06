<?php
/**
* @author 木兰东 http://mulandong.duapp.com/
*/
defined('IN_IA') or exit('Access Denied');
include_once("CommonUtil.php");
include_once("SDKRuntimeException.class.php");
include_once("MD5SignUtil.php");
class WxHongBaoHelper
{
	var $parameters;
	function __construct()
	{
		
	}
	function setParameter($parameter, $parameterValue) {
		$this->parameters[CommonUtil::trimString($parameter)] = CommonUtil::trimString($parameterValue);
	}
	function getParameter($parameter) {
		return $this->parameters[$parameter];
	}
	protected function create_noncestr( $length = 16 ) {  
		$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";  
		$str ="";  
		for ( $i = 0; $i < $length; $i++ )  {  
			$str.= substr($chars, mt_rand(0, strlen($chars)-1), 1);   
		}  
		return $str;  
	}
	function check_sign_parameters(){
		if($this->parameters["nonce_str"] == null || 
			$this->parameters["mch_billno"] == null || 
			$this->parameters["mch_id"] == null || 
			$this->parameters["wxappid"] == null || 
			$this->parameters["nick_name"] == null || 
			$this->parameters["send_name"] == null ||
			$this->parameters["re_openid"] == null || 
			$this->parameters["total_amount"] == null || 
			$this->parameters["max_value"] == null || 
			$this->parameters["total_num"] == null || 
			$this->parameters["wishing"] == null || 
			$this->parameters["client_ip"] == null || 
			$this->parameters["act_name"] == null || 
			$this->parameters["remark"] == null || 
			$this->parameters["min_value"] == null
			)
		{
			return false;
		}
		return true;

	}
	protected function get_sign(){
		try {
			if (null == PARTNERKEY || "" == PARTNERKEY ) {
				throw new SDKRuntimeException("密钥不能为空！" . "<br>");
			}
			if($this->check_sign_parameters() == false) {
			   throw new SDKRuntimeException("生成签名参数缺失！" . "<br>");
		    }
			$commonUtil = new CommonUtil();
			ksort($this->parameters);
			$unSignParaString = $commonUtil->formatQueryParaMap($this->parameters, false);

			$md5SignUtil = new MD5SignUtil();
			return $md5SignUtil->sign($unSignParaString,$commonUtil->trimString(PARTNERKEY));
		}catch (SDKRuntimeException $e)
		{
			die($e->errorMessage());
		}

	}
	function create_hongbao_xml($retcode = 0, $reterrmsg = "ok"){
		 try {
		    $this->setParameter('sign', $this->get_sign());
		    $commonUtil = new CommonUtil();
		    return  $commonUtil->arrayToXml($this->parameters);
		   
		}catch (SDKRuntimeException $e)
		{
			die($e->errorMessage());
		}
	}
	
	function curl_post_ssl($url, $vars, $second=30,$aHeader=array())
	{
		$ch = curl_init();
		curl_setopt($ch,CURLOPT_TIMEOUT,$second);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
		//这里设置代理，如果有的话
		//curl_setopt($ch,CURLOPT_PROXY, '10.206.30.98');
		//curl_setopt($ch,CURLOPT_PROXYPORT, 8080);
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
		curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);
		//以下两种方式需选择一种
		//第一种方法，cert 与 key 分别属于两个.pem文件
		curl_setopt($ch,CURLOPT_SSLCERT,ATTACHMENT_ROOT.'/certs/' . apiclient_cert);
 		curl_setopt($ch,CURLOPT_SSLKEY,ATTACHMENT_ROOT.'/certs/' . apiclient_key);
		curl_setopt($ch,CURLOPT_CAINFO,ATTACHMENT_ROOT.'/certs/' . rootca);
		if( count($aHeader) >= 1 ){
			curl_setopt($ch, CURLOPT_HTTPHEADER, $aHeader);
		}
		curl_setopt($ch,CURLOPT_POST, 1);
		curl_setopt($ch,CURLOPT_POSTFIELDS,$vars);
		$data = curl_exec($ch);
		if($data){
			curl_close($ch);
			return $data;
		}
		else { 
			$error = curl_errno($ch);
			curl_close($ch);
			return false;
		}
	}
}

?>