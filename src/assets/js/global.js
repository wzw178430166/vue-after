/*
 * @Author: wen 
 * @Date: 2021-07-05 17:30:49 
 * @Last Modified by: wen
 * @Last Modified time: 2021-07-05 18:50:56
 */

 /**  
 *  version : 2.0.7
 *	添加 通过生日计算年龄
 *  version : 2.0.6
 *	getUrlParam 添加 default_retur 为空时返回值
 *  version : 2.0.6
 * 修改timeFormat, 参数顺序
 *  version : 2.0.5
 * 修改addUrlParam, 未空时不添加
 */
var this_site = '//wen.openadc.top/';
var shopUrl = '//hui.openadc.top/'; //首页商品图片
var cookie_pre = 'GkvUM_';
//var userid_ = getCookie(cookie_pre + '__userid') + '';
var iosP = false;
var startTime = Date.parse(new Date()) / 1000;
//var Tapp_ = getTapp();
//
/**
 * 常用:
 * getUrlParam(name, url)			=>取url 参数
 * addUrlParam(name, value, url)	=>url 添加参数
 * delUrlParam(name, url)			=>url 添加参数
 * goo(url, full)					==>万能跳转
 * goback()							==> 统一返回方法
 * logout(forward)					==> 退出登录
 * checkLogin()
 * L()								==>语言包获取
 * ==> cookie操作
 * setCookie(name, value, time, domain, path)
 * getCookie(name)
 * delCookie(name)
 * getsec(str)
 * checkLogin("golink");
 * 
 * 工具:
 * randomtrade(len, is_date)		==>生成随机数
 * Base64() 						==>base 转换
 * json_decode(str_json)
 * json_encode(mixed_val)
 * isWeiXin() 
 * isInclude(name)
 * timeFormat(format,nS)
 * formatMoney(number, places, symbol, thousand, decimal)
 * getAge(strAge);					==>通过生日计算年龄
 * copyText(node) 					==>复制文字
 * delayimg(obj, nosize)
 * getTapp()
 * noPassByMobile(phone)			==>手机隐藏 * 
 * 
 * APP:
 * close_toobar()
 * sync_member(forward)
 * home()
 * 
 **/
//取url 参数

// export function goo(params) {
// 	this.$router.push({
// 		path: parsem.path,
// 		query: parsem.query
// 	  });
//   }
//@click="$router.push('/testDemo')"
// 星号处理手机号
export function noPassByMobile(str) {
	if (null != str && str != undefined) {
		var pat = /(\d{3})\d*(\d{4})/;
		return str.replace(pat, '$1****$2');
	} else {
		return "";
	}
}

