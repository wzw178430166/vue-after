/*
 * @Author: sleepingsnake 
 * @Date: 2021-07-05 17:30:49 
 * @Last Modified by: sleepingsnake
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
var this_site = '//ypmm.yjxun.cn';
var shopUrl = '//ypshop.yjxun.cn/'; //首页商品图片
var cookie_pre = 'GkvUM_';
var userid_ = getCookie(cookie_pre + '__userid') + '';
var iosP = false;
var startTime = Date.parse(new Date()) / 1000;
var Tapp_ = getTapp();
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
function getQueryString(name, url) {
	return getUrlParam(name, url);
}

function getUrlParam(name, url, default_retur = null) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var reg2 = new RegExp("(^|/?)" + name + "=([^&]*)(&|$)");
	if (!url || url == '') {
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURIComponent(r[2]);
		return default_retur;
	} else {
		var r = url.match(reg);
		var r2 = url.match(reg2);
		if (r != null) {
			return decodeURIComponent(r[2]);
		} else if (r2 != null) {
			return decodeURIComponent(r2[2]); //unescape
		}
		return default_retur;
	}
}

// url 添加参数
function addUrlParam(name, value, url) {
	if (value == null) {
		return url;
	}
	url = url ? url : window.location.href;
	url = delUrlParam(name, url);
	if (url.indexOf('?') != -1) {
		url += '&' + name + '=' + value;
	} else {
		url += '?' + name + '=' + value;
	}
	return url;
}

function delUrlParam(name, url) {
	url = url ? url : window.location.href;
	var reg = new RegExp("[&|#]" + name + "=([^&|\\s]*)", "g");
	var reg2 = new RegExp("\\?" + name + "=([^&|\\s]*)", "g");
	url = url.replace(reg, '');
	url = url.replace(reg2, '?');
	return url;
}
/**
 * 跳转类
 **/
//万能跳转
function goo(url, opt_) {
	opt = {
		'full': false, //自动补全url
		'notback': false, //跳转不返回
		'push': false, //修改url不跳转
		'replace': false, //修改url不跳转
		'blank': false, //修改url不跳转
	};
	if (typeof (opt_) == 'number') {
		opt.full = 1;
	} else if (!opt_ || typeof (opt_) != 'object') {
		opt_ = {};
	}

	if (opt_.hasOwnProperty("full")) {
		opt.full = true;
	}
	if (opt_.hasOwnProperty("notback")) {
		opt.notback = true;
	}
	if (opt_.hasOwnProperty("push")) {
		opt.push = true;
	}
	if (opt_.hasOwnProperty("replace")) {
		opt.replace = true;
	}
	if (opt_.hasOwnProperty("blank")) {
		opt.blank = true;
	}

	//
	if (url != '#') {

		if (opt.full) {
			if (url.indexOf("http://") <= 0 && url.indexOf(this_site) <= 0) {
				url = this_site + url;
			}
		}
		if (getUrlParam('target', url) == 'top') {
			window.parent.location.href = url;
			return;
		}

		url = delUrlParam('target',url);

		if (Tapp_ != false) {
			if (url.indexOf("dapp://") == 0) {
				location.href = url;
				return;
			}
			url = addUrlParam('mobile', getUrlParam('mobile'), url);
			url = addUrlParam('version', getUrlParam('version'), url);
			location.href = url;
			return;
		}

		if (opt.push) {
			history.pushState({}, 0, url);
			return;
		}
		if (opt.replace) {
			url = addUrlParam('target','_self',url);
			history.replaceState({}, 0, url);
			return;
		}
		if (opt.blank) {
			window.open(url);
			return;
		}

		console.log(url);
		if (opt.notback) {
			location.replace(url);
			return;
		}
		location.href = url;
	}
}
//手机端返回键

function goback() {
	try {
		$('html,body', parent.document).removeClass('ovfHiden');

	} catch (e) { }

	if (getUrlParam('go_top') == 1) {
		update_top_window();
		return;
	}

	// 	if(getUrlParam('mobile')=='ios'){ 
	// 		goo('ios://goback');	 
	// 		//return;
	// 	}

	if (Tapp_ != false) {
		var endTime = (Date.parse(new Date()) / 1000) - startTime;
		$.ajax({
			url: this_site + '/?m=myim&c=temp&a=addBugLog&onpagehide=1&duration=' + endTime + '&title=' + $(
				'title').text() + '&toUrl=' + encodeURIComponent(window.location.href),
			async: false
		});

		goo('dapp://goback');
		return;
	}

	window.history.back();

}

function update_top_window() {

	//运行在iframe框架中

	//$('#index_edit',parent.document).attr('src','');

	var num = $('html', parent.document).find('.tixing_user').text();

	//$('html',parent.document).find('.tixing_user').text(Number(num) + 1);

	$('body', parent.document).scrollTop($('body', parent.document).attr('scrolltop'));

	$('.application-mange', parent.document).css({
		"animation": "mangeright 0.4s 1",
		"-webkit-animation": "mangeright 0.4s 1",
		"animation-fill-mode": "forwards",
		"-webkit-animation-fill-mode": "forwards"
	});

}

/**
 * 退出
 * @param {*} forward 
 * @param {*} success 
 */
function logout(forward, success) {
	setCookie('port', 0, '/');
	$.get('/index.php?m=member&a=logout&app=1&forward=');
	setTimeout(function () {
		try {
			jstojava.logout();
		} catch (d) {}

		do{
			if (success) {
				if(typeof(success)=='function'){
					success();
					break;
				}
				goo('/member/login.html?forward=' + forward,{"replace":1});
			}
			break;
		}while(false);
	}, 300);
}
//登录情况检测
// checkLogin("golink");
function checkLogin(ac) {
	var status, erro;
	var auth = getCookie(cookie_pre + 'auth');
	if (ac && ac.indexOf('golink') > -1 && !auth) {
		goo('/member/login.html?forward=' + encodeURIComponent(window.location.href));
		return false;
	}
	if (auth) {
		status = 'SUCCESS';
		erro = '';
	} else {
		status = 'FAIL';
		erro = '';
	}
	return {
		status: status,
		erro: erro
	};
}

function L2(language, param) {
	var language = arguments[0] ? arguments[0] : 'no_language'; //语言KEY
	var param = arguments[1] ? arguments[1] : {
		replace: {}
	};
	var lang = 'zh-cn'; //当前语言类型
	var languagePack = {}; //语言包
	if (languagePack[param.language]) {
		language = languagePack[param.language];
		if (0 < Object.keys(param.replace).length) {
			for (var k in param.replace) {
				var value = param.replace[k];
				language = language.replace('{' + k + '}', value);
			}
		}
	}
	return language;
}
//JS操作cookies方法! 
/**
 *
 * 写cookies 
 * 这是有设定过期时间的使用示例：
 * s20是代表20秒
 * h是指小时，如12小时则是：h12
 * d是天数，30天则：d30
 *
 **/
function setCookie(name, value, time, domain, path) {
	var exp = new Date(),
		timestr = "";
	if (time) {
		var strsec = getsec(time);
		exp.setTime(exp.getTime() + strsec * 1);
		timestr = ";expires=" + exp.toGMTString();
	}
	domain = domain ? ";domain=" + domain : '';
	document.cookie = name + "=" + escape(value) + timestr + ";path=/" + domain;
}

function setCookie2(name, value) //cookies设置
{
	var argv = setCookie2.arguments;
	var argc = setCookie2.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if (expires != null) {
		var LargeExpDate = new Date();
		LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
	}
	document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate
		.toGMTString())) + ';path=/';
}

function getCookie2(Name) //cookies读取
{
	var search = Name + "="
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search)
		if (offset != -1) {
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if (end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		} else return ""
	}
}
//读取cookies 
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) {
		if (arr[2].indexOf('%') != -1) {
			arr[2] = decodeURIComponent(arr[2]);
			return unescape(arr[2]);
		} else {
			return arr[2];
		}
	} else return null;
}
//删除cookies 
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
//转化为秒数
function getsec(str) {
	var str1 = str.substring(1, str.length) * 1;
	var str2 = str.substring(0, 1);
	if (str2 == "s") {
		return str1 * 1000;
	} else if (str2 == "h") {
		return str1 * 60 * 60 * 1000;
	} else if (str2 == "d") {
		return str1 * 24 * 60 * 60 * 1000;
	}
}
/**
 * 工具类
 **/
//随机数
function randomtrade(len, is_date) {
	var timeStr = '';
	var is_date = arguments[1] ? arguments[1] : 0;
	if (is_date > 0) {
		var date = new Date();
		var month = (date.getMonth() + 1);
		month = month < 10 ? '0' + month : month;
		var day = date.getDate();
		day = day < 10 ? '0' + day : day;
		var hours = date.getHours();
		hours = hours < 10 ? '0' + hours : hours;
		var minu = date.getMinutes();
		minu = minu < 10 ? '0' + minu : minu;
		var second = date.getSeconds();
		second = second < 10 ? '0' + second : second;
		var timeStr = String(date.getFullYear()) + String(month) + String(day) + String(hours) + String(minu) + String(
			second);
	}
	len = len || 32;
	var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	var maxPos = $chars.length;
	var str = '';
	for (var i = 0; i < len; i++) {
		str += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return timeStr + str;
}

function Base64() {
	// private property 
	var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	// public method for encoding 
	this.encode = function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = _utf8_encode(input);
		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(
				enc4);
		}
		return output;
	}
	// public method for decoding 
	this.decode = function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	}
	// private method for UTF-8 encoding 
	_utf8_encode = function (string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
		return utftext;
	}
	// private method for UTF-8 decoding 
	_utf8_decode = function (utftext) {
		var string = "";
		var i = 0;
		var c1, c2, c3;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}

function json_decode(str_json) {
	var json = this.window.JSON;
	if (typeof json === 'object' && typeof json.parse === 'function') {
		return json.parse(str_json);
	}
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	var j;
	var text = str_json;
	cx.lastIndex = 0;
	if (cx.test(text)) {
		text = text.replace(cx, function (a) {
			return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		});
	}
	if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(
		/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g,
			''))) {
		j = eval('(' + text + ')');
		return j;
	}
	// If the text is not JSON parseable, then a SyntaxError is thrown. 
	throw new SyntaxError('json_decode');
}

function json_encode(mixed_val) {
	var json = this.window.JSON;
	if (typeof json === 'object' && typeof json.stringify === 'function') {
		return json.stringify(mixed_val);
	}
	var value = mixed_val;
	var quote = function (string) {
		var escapable =
			/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		var meta = { // table of character substitutions 
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"': '\\"',
			'\\': '\\\\'
		};
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' : '"' + string + '"';
	};
	var str = function (key, holder) {
		var gap = '';
		var indent = ' ';
		var i = 0; // The loop counter. 
		var k = ''; // The member key. 
		var v = ''; // The member value. 
		var length = 0;
		var mind = gap;
		var partial = [];
		var value = holder[key];
		// If the value has a toJSON method, call it to obtain a replacement value. 
		if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}
		// What happens next depends on the value's type. 
		switch (typeof value) {
			case 'string':
				return quote(value);
			case 'number':
				return isFinite(value) ? String(value) : 'null';
			case 'boolean':
			case 'null':
				return String(value);
			case 'object':
				if (!value) {
					return 'null';
				}
				// Make an array to hold the partial results of stringifying this object value. 
				gap += indent;
				partial = [];
				// Is the value an array? 
				if (Object.prototype.toString.apply(value) === '[object Array]') {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || 'null';
					}
					v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind +
						']' : '[' +
						partial.join(',') + ']';
					gap = mind;
					return v;
				}
				// Iterate through all of the keys in the object. 
				for (k in value) {
					if (Object.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
				// Join all of the member texts together, separated with commas, 
				// and wrap them in braces. 
				v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind +
					'}' : '{' +
					partial.join(',') + '}';
				gap = mind;
				return v;
		}
	};
	return str('', {
		'': value
	});
}

function isWeiXin() {
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}

function isInclude(name) {
	/*判断js或css是否加载*/
	var js = /js$/i.test(name);
	var es = document.getElementsByTagName(js ? 'script' : 'link');
	for (var i = 0; i < es.length; i++)
		if (es[i][js ? 'src' : 'href'].indexOf(name) != -1) return true;
	return false;
}
/*
 * timeFormat('Y-m-d',时间戳);
 */
function timeFormat(format, nS) {
	nSs = nS + '';
	nS = parseInt(nS);
	console.log(nSs.length);
	if (nSs.length < 13) {
		nS *= 1000;
	}
	var date = new Date(nS) // 时间戳为10位需乘1000，为13位则不用
	var Y = date.getFullYear() // 年
	var y = date.getYear() // 年
	var m = date.getMonth() + 1 // 月
	var M = m < 10 ? '0' + m : m // 月
	var d = date.getDate() // 日
	var D = d < 10 ? '0' + d + '' : d + '' // 日
	var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 时
	var i = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分
	var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
	format = format.replace('Y', Y);
	format = format.replace('y', y);
	format = format.replace('M', M);
	format = format.replace('m', m);
	format = format.replace('D', D);
	format = format.replace('d', d);
	format = format.replace('h', h);
	format = format.replace('i', i);
	format = format.replace('s', s);
	return format;
}
/**
 * @param {float} number 货币
 * @param {int} places 保留小数
 * @param {string} symbol表示前面表示的标志是￥ 可以写成 formatMoney(542986,2,"$")
 * @param {string} thousand表示每几位用,隔开,是货币标识
 * @param {string} decimal表示小数点
 * */
function formatMoney(number, places = 0, symbol = '', thousand = ',', decimal = '.') {
	number = number || 0;
	//保留的小位数 可以写成 formatMoney(542986,3) 后面的是保留的小位数，否则默 认保留两位
	//places = !isNaN(places = Math.abs(places)) ? places : 0;
	//symbol = symbol !== undefined ? symbol : "￥";
	//thousand = thousand || ",";
	//decimal = decimal || ".";
	//negative表示如果钱是负数有就显示“-”如果不是负数 就不显示负号
	//i表示处理过的纯数字
	var negative = number < 0 ? "-" : "",
		i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") +
		i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal +
			Math.abs(number - i).toFixed(places).slice(2) : "");
}
/**
 * 通过出生日期计算年龄
 * @param {string} strAge 2019-01-01
 * @returns 
 */
function getAge(strAge) {
	if(strAge==null || strAge=='null'){
		return strAge;
	}
	// if (strAge!=strAge.match(/\d{4}-\d{2}-\d{2}/ig))	{
	// 	//alert('请输入日期格式为：yyyy-mm-dd!');
	// 	return strAge;
	// }

	var birArr = strAge.split("-"); 
	var birYear = birArr[0];
	var birMonth = birArr[1];
	var birDay = birArr[2];

	d = new Date(); 
	var nowYear = d.getFullYear();
	var nowMonth = d.getMonth() + 1; //记得加1
	var nowDay = d.getDate();
	var returnAge;

	if (birArr == null) {
		return false
	};
	var d = new Date(birYear, birMonth - 1, birDay);
	if (d.getFullYear() == birYear && (d.getMonth() + 1) == birMonth && d.getDate() == birDay) {
		if (nowYear == birYear) {
			returnAge = 0; // 
		} else {
			var ageDiff = nowYear - birYear; // 
			if (ageDiff > 0) {
				if (nowMonth == birMonth) {
					var dayDiff = nowDay - birDay; // 
					if (dayDiff < 0) {
						returnAge = ageDiff - 1;
					} else {
						returnAge = ageDiff;
					}
				} else {
					var monthDiff = nowMonth - birMonth; // 
					if (monthDiff < 0) {
						returnAge = ageDiff - 1;
					} else {
						returnAge = ageDiff;
					}
				}
			} else {
				return "出生日期晚于今天，数据有误"; //返回-1 表示出生日期输入错误 晚于今天
			}
		}
		return returnAge;
	} else {
		return ("输入的日期格式错误！");
	}
}
/**复制文本 */
function copyText(node) {
	if (!node) {
		return;
	}
	var result;
	// 将复制内容添加到临时textarea元素中
	var tempTextarea = document.createElement('textarea');
	document.body.appendChild(tempTextarea);
	if (typeof (node) == 'object') {
		// 复制节点中内容
		// 是否表单
		if (node.value) {
			tempTextarea.value = node.value;
		} else {
			tempTextarea.value = node.innerHTML;
		}
	} else {
		// 直接复制文本
		tempTextarea.value = node;
	}
	// 判断设备
	var u = navigator.userAgent;
	if (u.match(/(iPhone|iPod|iPad);?/i)) {
		// iOS
		// 移除已选择的元素
		window.getSelection().removeAllRanges();
		// 创建一个Range对象
		var range = document.createRange();
		// 选中
		range.selectNode(tempTextarea);
		// 执行选中元素
		window.getSelection().addRange(range);
		// 复制
		result = document.execCommand('copy');
		// 移除选中元素
		window.getSelection().removeAllRanges();

	} else {
		// 选中    
		tempTextarea.select();
		// 复制
		result = document.execCommand('Copy');
	}
	// 移除临时文本域
	document.body.removeChild(tempTextarea);
	if (result) {
		try {
			layer.msg('复制成功');
		} catch (e) {
			console.log('复制成功');
		}
	} else {
		try {
			layer.msg('复制失败');
		} catch (e) {
			console.log('复制失败');
		}
	}

	return result;
}
function delayimg(obj, nosize) {
	var url = $(obj).attr('data-src');
	var img = new Image();
	img.src = url;
	img.onload = function () {
		obj.src = img.src;
		$(obj).addClass('delayimg');
		obj.onload = null; //控制不要一直跳动
	}
}

function getTapp() {
	var s = navigator.userAgent;
	var arr, reg = new RegExp("Tapp=([^/*]).*/.*Tapp_version=([^/]*)");

	if (arr = s.match(reg)) {
		return arr;
	} else {
		return false;
	}
}
/*------------------
 *  App
 **/
function close_toobar() {
	try {
		jstojava.close_toobar();
	} catch (e) { }
}

function sync_member(forward) {
	var p = {};
	p.auth = getCookie(cookie_pre + 'auth');
	p.status = 1;
	p.forward = forward ? forward : "";
	p.username = getCookie(cookie_pre + '__username');
	p.userid = getCookie(cookie_pre + '_userid');
	p.avatar = getCookie(cookie_pre + '__avatar');
	p.nickname = getCookie(cookie_pre + '__nickame');
	p.portrait = getCookie(cookie_pre + '__portrait');

	goo('dapp://setlogin=>' + json_encode(p));
}

function home() {
	try {
		jstojava.home();
	} catch (e) {
		var url = '../';
		if (getUrlParam('mobile')) {
			url = addUrlParam('mobile', getUrlParam('mobile'), url);
		}
		if (getUrlParam('version')) {
			url = addUrlParam('version', getUrlParam('version'), url);
		}
		window.location.href = url;
	}
}

function goo2(url) {
	try {
		jstojava.isok();
		goo(url);
	} catch (e) {
		if (getUrlParam('mobile') == 'ios' && Number(getUrlParam('version')) >= 2019081502) {
			url += url.indexOf('?') == -1 ? "?go_top=1" : "&go_top=1";
			url += '&ta=self&random=' + (new Date().getTime());
			$('body').attr('scrolltop', $(document).scrollTop());
			$('#index_edit').attr('src', url);
			$('.application-mange').css({
				"animation": "mangeleft 0.4s 1",
				"-webkit-animation": "mangeleft 0.4s 1",
				"animation-fill-mode": "forwards",
				"-webkit-animation-fill-mode": "forwards"
			});
			return;
		}
		if (url != '#' && getUrlParam('mobile') != 'ios') {
			url += url.indexOf('?') == -1 ? "?go_top=1" : "&go_top=1";
			url += '&random=' + (new Date().getTime());
			$('body').attr('scrolltop', $(document).scrollTop());
			$('#index_edit').attr('src', url);
			$('.application-mange').css({
				"animation": "mangeleft 0.4s 1",
				"-webkit-animation": "mangeleft 0.4s 1",
				"animation-fill-mode": "forwards",
				"-webkit-animation-fill-mode": "forwards"
			});
		} else {
			//url += '&target=_self';
			goo(url);
		}
	}
}

// 星号处理手机号
function noPassByMobile(str) {
	if (null != str && str != undefined) {
		var pat = /(\d{3})\d*(\d{4})/;
		return str.replace(pat, '$1****$2');
	} else {
		return "";
	}
}

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

function goshare(url, title, content, image, auth) {
	var str = share_(url, title, content, image, auth);
	console.log(str);
	try {
		//JSON.stringify(str) 
		jstojava.share(str);
	} catch (e) {

	}
	if (isiOS) {
		str = share_2(url, title, content, image, auth);
		window.location.href = "dapp://goshare=>" + str;
	}
}

function share_(url, title, content, image, auth) {
	var str = {};
	//str = JSON.parse(str);
	url = url ? url : location.href;
	title = title ? title : '分享标题';
	content = content ? content : '分享内容';
	image = image ? image : '/statics/images/no_img.jpg';
	auth = auth ? auth : '';
	str = '{"url":"' + (url) + '","title":"' + (title) + '","content":"' + (content) + '","image":"' + image +
		'","auth":"' + (auth) + '"}';
	return str;
}

function share_2(url, title, content, image, auth) {
	var str = share_(url, encodeURI(title), encodeURI(content), image, auth)
	return str;
}

function isios() {
	return iosP;
	if (getCookie('ios')) {
		alert('ok');
	}
}