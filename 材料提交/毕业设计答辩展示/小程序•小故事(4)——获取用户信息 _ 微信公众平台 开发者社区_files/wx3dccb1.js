!function(e){
if(e.BJ_REPORT){
var n,t=function(n,t){
n&&n.stack&&(n.stack="[tryCatch]["+t+"]"+n.stack),e.BJ_REPORT.report(n);
},o=e.BJ_REPORT.tryJs=function(e){
return e&&(t=e),o;
},r=function(e,n){
var t;
for(t in n)e[t]=n[t];
},i=function(e){
return"function"==typeof e;
},a=function(o,r,i){
return function(){
try{
return o.apply(this,r||arguments);
}catch(a){
if(t(a,i||""),a.stack&&console&&console.error&&console.error("[BJ-REPORT]",a.stack),
!n){
var s=e.onerror;
e.onerror=function(){},n=setTimeout(function(){
e.onerror=s,n=null;
},50);
}
throw a;
}
};
},s=function(e){
return function(){
for(var n,t=[],o=0,r=arguments.length;r>o;o++)n=arguments[o],i(n)&&(n=a(n,null,"catArgs")),
t.push(n);
return e.apply(this,t);
};
},c=function(e){
return function(n,t){
if("string"==typeof n)try{
n=new Function(n);
}catch(o){
throw o;
}
var r=[].slice.call(arguments,2);
return n=a(n,r.length&&r,"timeout"),e(n,t);
};
},u=function(e,n){
return function(){
for(var t,o,r=[],s=0,c=arguments.length;c>s;s++)t=arguments[s],i(t)&&(o=a(t,null,"argsTry"))&&(t.tryWrap=o)&&(t=o),
r.push(t);
return e.apply(n||this,r);
};
},l=function(e){
var n,t;
for(n in e)t=e[n],i(t)&&(e[n]=a(t,null,"objTry"));
return e;
};
o.spyJquery=function(){
var n=e.$;
if(!n||!n.event)return o;
var t=n.event.add,r=n.ajax,a=n.event.remove;
if(t&&(n.event.add=u(t),n.event.remove=function(){
for(var e,n=[],t=0,o=arguments.length;o>t;t++)e=arguments[t],i(e)&&(e=e.tryWrap),
n.push(e);
return a.apply(this,n);
}),r&&(n.ajax=function(e,t){
return t||(t=e,e=void 0),l(t),e?r.call(n,e,t):r.call(n,t);
}),$.zepto){
var s=n.fn.on,c=n.fn.off;
n.fn.on=u(s),n.fn.off=function(){
for(var e,n=[],t=0,o=arguments.length;o>t;t++)e=arguments[t],i(e)&&(e=e.tryWrap),
n.push(e);
return c.apply(this,n);
};
}
return o;
},o.spyModules=function(){
var n=e.require,t=e.define;
return t&&t.amd&&n&&(e.require=s(n),r(e.require,n),e.define=s(t),r(e.define,t)),
e.seajs&&t&&(e.define=function(){
for(var e,n=[],o=0,r=arguments.length;r>o;o++)e=arguments[o],i(e)&&(e=a(e,null,"defineTry"),
e.toString=function(e){
return function(){
return e.toString();
};
}(arguments[o])),n.push(e);
return t.apply(this,n);
},e.seajs.use=s(e.seajs.use),r(e.define,t)),o;
},o.spySystem=function(){
return e.setTimeout=c(e.setTimeout),e.setInterval=c(e.setInterval),o;
},o.spyCustom=function(e){
return i(e)?a(e):l(e);
},o.spyAll=function(){
return o.spyJquery().spyModules().spySystem(),o;
},o.spyAll();
}
}(window),function(e){
return/msie 6/i.test(navigator.userAgent)?void(window.location="/cgi-bin/readtemplate?t=err/noie6_tmpl"):(window.console||(window.console={
log:function(){},
error:function(){},
info:function(){}
}),e.wx=e.wx||{},wx.T=function(e,n){
return template.compile(e)(n);
},wx.url=function(e){
if(e.startsWith("javasript:"))return e;
var n=wx.data.param;
return-1!=e.indexOf("?")?e+n:e+"?1=1"+n;
},wx.getUrl=function(e){
var n=(window.location+"&").match(new RegExp("(?:\\?|\\&)"+e+"=(.*?)\\&"));
return n&&n[1]?String(n[1]).html(!0):void 0;
},$.fn.setClass=function(e){
this.attr("class",e);
},$("img").error(function(){
BJ_REPORT&&BJ_REPORT.monitor(1);
}),wx.jslog=function(e,n,t){
t=t||3;
var o=new Image,r=[];
n&&jQuery.each(["message","stack","lineNumber"],function(e,t){
r.push(t+":"+(n[t]||""));
}),r.push("level:2"),o.src="https://badjs.weixinbridge.com/badjs?id=61&uin="+wx.data.uin+"&msg="+encodeURIComponent(r.join(";").replace(/\s/g," "))+"&from="+encodeURIComponent(location.href)+"&_t="+ +new Date,
console&&console.error&&n&&console.error(n);
},setTimeout(function(){},5e3),wx.resPath="mp.weixin.qq.com"==location.hostname?"https://res.wx.qq.com":"",
jQuery(function(){
var e=['<div class="scale_tips" id="zoom_tips" style="display:none;">','<div class="scale_tips_inner">','<i class="icon_scale_tips"></i>','<p class="scale_tips_content"><span id="zoom_msg"></span><a href="javascript:;" id="zoom_prompt">不再提示</a></p>',"</div>","</div>"].join("\n");
jQuery("body").append(e);
var n='<object type="application/x-shockwave-flash" data="{swfpath}" width="10" height="10" id="{id}">{param}</object>',t={
swfpath:wx.path.zoom,
id:"ZoomFlash",
param:""
},o={
movie:t.swfpath,
allowscriptaccess:"always",
wmode:"transparent",
scale:"noScale"
};
jQuery.each(o,function(e,n){
t.param+='<param name="'+e+'" value="'+n+'">';
}),$('<div style="position: absolute; right: 0px; bottom: 0px; display: none;"></div>').html(n.format(t)).appendTo("body"),
seajs.use("biz_web/lib/store.js",function(e){
jQuery(window).on("load resize",function(){
if(!e.get("__zoom_tips__")){
var n=document.getElementById("ZoomFlash").height,t=n,o=1;
try{
t=document.getElementById("ZoomFlash").getFlashStageRect().height,o=~window.navigator.userAgent.toLowerCase().indexOf("msie")&&screen.deviceXDPI&&screen.logicalXDPI?screen.deviceXDPI/screen.logicalXDPI:t/n,
.9>o?(jQuery("#zoom_msg").text("您的浏览器目前处于缩小状态，会导致公众平台网页显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。"),
jQuery("#zoom_tips").show(),jQuery("body").addClass("scaled")):o>1.1?(jQuery("#zoom_msg").text("您的浏览器目前处于放大状态，会导致公众平台网页显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。"),
jQuery("#zoom_tips").show(),jQuery("body").addClass("scaled")):(jQuery("#zoom_tips").hide(),
jQuery("body").removeClass("scaled"));
}catch(r){}
}
});
}),jQuery(window).on("keyup",function(e){
e.ctrlKey&&(96==e.keyCode||48==e.keyCode)&&(jQuery("#zoom_tips").hide(),jQuery("body").removeClass("scaled"));
}),jQuery("#zoom_prompt").on("click",function(){
seajs.use("biz_web/lib  /store.js",function(e){
e.set("__zoom_tips__",!0);
}),jQuery("#zoom_tips").hide(),jQuery("body").removeClass("scaled");
});
}),!function(e,n){
function t(e){
var t,o=n.createElement("iframe"),r="https://open.weixin.qq.com/connect/qrconnect?appid="+e.appid+"&scope="+e.scope+"&redirect_uri="+e.redirect_uri+"&state="+e.state+"&login_type=jssdk";
r+=e.style?"&style="+e.style:"",r+=e.href?"&href="+e.href:"",o.setAttribute("sandbox","allow-scripts allow-top-navigation allow-same-origin"),
o.src=r,o.frameBorder="0",o.allowTransparency="true",o.scrolling="no",o.width="300px",
o.height="400px",t=n.getElementById(e.id),t.innerHTML="",t.appendChild(o);
}
e.WxLogin=t;
}(window,document),window.showWxlogin=function(e,n,t){
var o=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");
new window.WxLogin({
id:"wxlogin-wrapper",
appid:e,
scope:"snsapi_login",
redirect_uri:encodeURIComponent(o+"/welogin?redirect_url="+encodeURIComponent(t||location.pathname+location.search)),
state:n,
style:"",
href:""
});
},jQuery(document.body).on("click",".js_redirect_to_loginpage",function(e){
e.preventDefault(),location.href="/weloginpage?redirect_url="+encodeURIComponent(location.pathname+location.search);
}),seajs.use("common/wx/noticeBox.js",function(e){
var n=$(".js_head_box .js_account_notice_box");
n.hide();
e({
container:n,
switchBtn:$(".js_head_box .js_notice_box_switch")
});
}),void function(){
try{
var e=jQuery(window).height();
750>e&&jQuery(document.body).addClass("screen_small");
}catch(n){}
}());
}(window);;$.fn.disable=function(t){
t=t||"btn_disabled";
var s=this.hasClass("btn_input")?this.find("button"):this;
return s.attr("disabled","disabled"),this.parent().hasClass("btn_input")?this.parent().addClass(t):this.addClass(t),
this;
},$.fn.enable=function(t){
t=t||"btn_disabled";
var s=this.hasClass("btn_input")?this.find("button"):this;
return s.attr("disabled",!1),this.parent().hasClass("btn_input")?this.parent().removeClass(t):this.removeClass(t),
this;
},function(){
var t=function(t,s){
if(t=t||"btn_loading",!s||$.support.leadingWhitespace){
var i=this.hasClass("btn_input")?this.find("button"):this;
i.prepend("<i></i>");
}
return this.disable(t),this;
},s=function(t,s){
if(t=t||"btn_loading",!s||$.support.leadingWhitespace){
var i=this.hasClass("btn_input")?this.find("button"):this;
i.find("i:first-child").remove();
}
return this.enable(t),this;
};
$.fn.btn=function(i,n,a){
return i?s.call(this,n,a):t.call(this,n,a);
};
}();;$.fn.extend({
serializeObject:function(){
var e=this.serializeArray(),i={};
return $(e).each(function(e,n){
i[n.name]=n.value;
}),i;
}
}),define("common/jquery.plugin/serializeObject.js",[],function(){
"use strict";
});;!function(){
function t(t,n){
for(var r in n)t[r]=n[r];
return t;
}
function n(n,r){
if(r===!0){
var e;
if(Object.isArray(n)){
e=[];
for(var i in n)n.hasOwnProperty(i)&&e.push(Object.isObject(n[i])?Object.clone(n[i],!0):n[i]);
}else{
e={};
for(var i in n)n.hasOwnProperty(i)&&(e[i]=Object.isObject(n[i])?Object.clone(n[i],!0):n[i]);
}
return e;
}
return t({},n);
}
function r(t){
return!(!this||1!=t.nodeType);
}
function e(t){
return Object.prototype.toString.call(t)===m;
}
function i(t){
return Object.prototype.toString.call(t)===b;
}
function o(t){
return Object.prototype.toString.call(t)===h;
}
function c(t){
return Object.prototype.toString.call(t)===g;
}
function u(t){
return Object.prototype.toString.call(t)===l;
}
function a(t){
return Object.prototype.toString.call(t)===y;
}
function s(t){
return"undefined"==typeof t;
}
function p(t,n){
var r=[];
for(var e in t)t.hasOwnProperty(e)&&r.push(n===!0?[encodeURIComponent(e),"=",encodeURIComponent(t[e]),"&"].join(""):[e,"=",t[e],"&"].join(""));
return r.join("").slice(0,-1);
}
function f(t,n){
if("undefined"!=typeof n)for(var r in t)if(t.hasOwnProperty(r)&&n(t[r],r)===!1)break;
}
var h="[object Function]",l="[object Number]",g="[object String]",b="[object Array]",m="[object Object]",y="[object Date]";
t(Object,{
extend:t,
clone:n,
isObject:e,
isElement:r,
isArray:i,
isFunction:o,
isString:c,
isNumber:u,
isDate:a,
isUndefined:s,
param:p,
each:f
});
}(),Object.extend(String.prototype,function(){
function t(t){
return this.replace(/\{(\w+)\}/g,function(n,r){
return void 0!==t[r]?t[r]:n;
});
}
function n(){
return this.replace(/[^\x00-\xff]/g,"**").length;
}
function r(t,n){
return t=t||30,n=Object.isUndefined(n)?"...":n,this.length>t?this.slice(0,t-n.length)+n:String(this);
}
function e(t){
return t===!0?this.replace(/^\s+/,""):t===!1?this.replace(/\s+$/,""):this.replace(/^\s+/,"").replace(/\s+$/,"");
}
function i(t){
var n=["&","&amp;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;"];
t===!1&&n.reverse();
for(var r=0,e=this;r<n.length;r+=2)e=e.replace(new RegExp(n[r],"g"),n[1+r]);
return e;
}
function o(t){
return this.indexOf(t)>-1;
}
function c(t){
return 0===this.lastIndexOf(t,0);
}
function u(t){
var n=this.length-t.length;
return n>=0&&this.indexOf(t,n)===n;
}
function a(){
return""==this;
}
function s(){
return this.replace(/<\/?[^>]*\/?>/g,"");
}
function p(){
return/^\s*$/.test(this);
}
function f(){
var t,n,r,e=this,i=arguments.length;
if(1>i)return s;
for(t=0;i>t;)e=e.replace(/%s/,"{#"+t++ +"#}");
for(e.replace("%s",""),t=0;void 0!==(n=arguments[t]);)r=new RegExp("{#"+t+"#}","g"),
e=e.replace(r,n),t++;
return e;
}
function h(){
for(var t,n=this,r=0,e=0;t=n.charAt(r++);)e+=t.charCodeAt().toString(16).length/2;
return e;
}
function l(t,n){
if("function"==typeof this.split){
var r=this.split(n||"&"),e={};
return r.each(function(n){
arr=n.split("="),2==arr.length&&arr[0]&&arr[1]&&(t===!0?e[decodeURIComponent(arr[0])]=decodeURIComponent(arr[1]):e[arr[0]]=arr[1]);
}),e;
}
}
document.createElement("div");
return{
format:t,
sprintf:f,
text:s,
len:n,
truncate:r,
trim:String.prototype.trim||e,
https2http:function(){
return this.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/");
},
http2https:function(){
return this.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qlogo.cn/");
},
html:i,
has:o,
startsWith:c,
endsWith:u,
param:l,
empty:a,
blank:p,
bytes:h
};
}()),Object.extend(Function.prototype,function(){
function t(t,n){
for(var r=t.length,e=n.length;e--;)t[r+e]=n[e];
return t;
}
function n(n,r){
return n=a.call(n,0),t(n,r);
}
function r(t){
if(arguments.length<2&&Object.isUndefined(arguments[0]))return this;
var r=this,e=a.call(arguments,1);
return function(){
var i=n(e,arguments);
return r.apply(t,i);
};
}
function e(t,n){
var r=this;
return args=a.call(arguments,2),t=1e3*t,window.setTimeout(function(){
return r.apply(n||r,args);
},t);
}
function i(){
var n=t([.01,null],arguments);
return this.delay.apply(this,n);
}
function o(t){
var n=this;
return function(){
return t.apply(this,arguments)===!1?!1:n.apply(this,arguments);
};
}
function c(n){
var r=this;
return function(){
var e=r.apply(this,arguments),i=t([e],arguments);
return n.apply(this,i),e;
};
}
function u(n){
var r=this;
return function(){
var e=t([r.bind(this)],arguments);
return n.apply(this,e);
};
}
var a=Array.prototype.slice;
return{
bind:r,
delay:e,
defer:i,
before:o,
after:c,
wrap:u
};
}()),function(){
function t(t,n){
for(var r=0,e=this.length>>>0;e>r;r++)r in this&&t.call(n,this[r],r,this);
}
function n(){
return this[this.length-1];
}
function r(t){
return t===!0?Object.clone.apply(this,arguments):c.call(this,0);
}
function e(t){
var n=[];
return this.each(function(r,e){
n.push(t(r,e));
}),n;
}
function i(t){
var n=-1;
return this.each(function(r,e){
return t==r?(n=e,!1):void 0;
}),n;
}
var o=Array.prototype,c=o.slice;
Object.extend(o,{
each:Array.prototype.forEach||t,
indexOf:Array.prototype.indexOf||i,
last:n,
clone:r,
map:e
});
}();;define("common/utils/Class.js",[],function(t,n){
"use strict";
n.create=function(t){
var n=function(){
this.construct&&this.construct.apply(this,arguments);
};
return t.apply(n.prototype,arguments),n;
},function(){
function t(t){
for(var n=1,r=arguments.length;r>n;n++)for(var e in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],e)&&(t[e]=arguments[n][e]);
return t;
}
function r(){
return this.__instance__||(this.__instance__=new this(arguments[0],arguments[1],arguments[2]));
}
function e(t){
var n=i.call(this,t);
return n.prototype.parent=this,n;
}
function i(n){
var i="function"==typeof this?this:function(){},o=function(){
function t(n,e){
n.Super&&t(n.Super,e),n.init&&n.init.apply(e,r);
}
var n=this,r=arguments;
n.Root=i.__base__,n.Super=i.prototype,t(n,n);
};
return t(o.prototype,i.prototype||{},n),o.__base__=i.__base__||o.prototype,o.GetStaticInstance=r,
o.Inherit=o.inherit=e,o;
}
n.declare=i;
}();
});;!function(e){
function t(e){
return e>=49&&90>=e;
}
function n(e){
return(e||"").toLowerCase().split("+").sort().join("").replace(/\s/gi,"");
}
function o(e){
var t=e.type;
return"mousewheel"==t||"DOMMouseScroll"==t;
}
function r(e){
return e.wheelDelta>0||e.detail<0?"mousewheelup":"mousewheeldown";
}
function u(e){
var n=e.keyCode,u=f[n],s=!u&&t(n)&&String.fromCharCode(n).toLowerCase()||o(e)&&r(e),a=e.ctrlKey,c=e.shiftKey,i=e.altKey,p=c&&(l[s]||l[u]),h=[];
return a||i||!p||(u=p,c=s=null),a&&h.push("ctrl"),c&&h.push("shift"),i&&h.push("alt"),
u&&h.push(u),s&&h.push(s),h.join("+");
}
function s(e,t){
return n(u(e))==n(t);
}
var f={
27:"esc",
9:"tab",
32:"space",
13:"enter",
8:"backspace",
145:"scroll",
20:"capslock",
144:"numlock",
19:"pause",
45:"insert",
36:"home",
46:"del",
35:"end",
33:"pageup",
34:"pagedown",
37:"left",
38:"up",
39:"right",
40:"down",
107:"=",
109:"-",
112:"f1",
113:"f2",
114:"f3",
115:"f4",
116:"f5",
117:"f6",
118:"f7",
119:"f8",
120:"f9",
121:"f10",
122:"f11",
123:"f12",
188:"<",
190:">",
191:"/",
192:"`",
219:"[",
220:"\\",
221:"]",
222:"'"
},l={
"`":"~",
1:"!",
2:"@",
3:"#",
4:"$",
5:"%",
6:"^",
7:"&",
8:"*",
9:"(",
0:")",
"-":"_",
"=":"+",
";":":",
"'":'"',
",":"<",
".":">",
"/":"?",
"\\":"|"
};
e.wx=e.wx||{},e.wx.hotkeyStr=u,e.wx.isHotkey=s;
}(window);;define("common/wx/Tips.js",[],function(e,r){
"use strict";
function n(e,r,n){
$(".JS_TIPS").remove(),s=$(template.compile('<div class="JS_TIPS page_tips {type}" id="wxTips_'+(new Date).getTime()+'"><div class="inner">{=msg}</div></div>')({
type:e||"error",
msg:r
})).appendTo("body").fadeIn(),t.delay(n||l.delay,null,s);
}
function t(e){
e&&e.length>0&&e.fadeOut({
complete:function(){
e.remove();
}
});
}
function c(e){
if("string"!=typeof e)return e;
var r="";
return 0==e.length?"":(r=e.replace(/&/g,"&gt;"),r=r.replace(/</g,"&lt;"),r=r.replace(/>/g,"&gt;"),
r=r.replace(/ /g,"&nbsp;"),r=r.replace(/\'/g,"&#39;"),r=r.replace(/\"/g,"&quot;"),
r=r.replace(/\n/g,"<br>"));
}
var s,i=r,l={
errMsg:"系统发生错误，请稍后重试",
sucMsg:"操作成功",
delay:2
};
i.err=function(e,r){
n("error",c(e)||l.errMsg,r);
},i.suc=function(e,r){
n("success",c(e)||l.sucMsg,r);
},i.remove=function(){
s&&(s.remove(),s=null);
};
});;define("common/wx/dialog.js",["biz_common/jquery.ui/jquery.ui.draggable.js","tpl/dialog.html.js"],function(t,e){
"use strict";
function i(t){
var e=this;
"string"==typeof t&&(t={
msg:t
}),t=$.extend(!0,{},o,t),e.id=t.id=[s.uiName,"_",++s.uid].join(""),t.icon=s.iconClass[t.type||"warn"];
var i=[];
i=t.msg.split("|"),t.msg=i[0]?i[1]?{
title:i[0],
text:i[1],
msgClass:""
}:{
title:t.msg,
msgClass:"single_line"
}:{
text:i[1],
msgClass:"single_line"
},$.each(t.buttons,function(t,e){
e.type=s.btTypes[e.type||"primary"];
}),e.opt=t,$(template.compile(s.html)(t)).appendTo("body"),e.dom=$("#"+this.id).parent(),
e.dom.css("margin-left",-1*e.dom.outerWidth()/2).css("margin-top",-1*e.dom.outerHeight()/2),
e.dom.fadeIn(),t.draggable&&e.dom.draggable({
handle:".dialog_hd"
}),function(){
$.each($("#"+e.id+" .js_btn"),function(i,o){
t.buttons[i].click&&$(o).click(function(){
return t.buttons[i].click.apply(e),!1;
});
}),$("#"+e.id+" .pop_closed").click(function(){
return t.close&&"function"==typeof t.close?void(t.close()&&e.remove()):void e.remove();
});
}();
}
t("biz_common/jquery.ui/jquery.ui.draggable.js");
var o={
title:"温馨提示",
type:"warn",
msg:"错误信息|对不起，系统繁忙请稍后尝试。",
buttons:[{
text:"确定",
click:function(t){
this.remove(t);
}
}],
width:720,
height:0,
draggable:!0,
mask:!0,
className:""
},s={
uid:0,
uiName:"wxDialog",
iconClass:{
succ:"success",
err:"error",
warn:"warn",
info:"info"
},
btTypes:{
primary:"btn_primary",
normal:"btn_default",
disabled:"btn_disabled"
}
};
s.html=t("tpl/dialog.html.js"),i.prototype={
hide:function(){
this.opt.mask&&this.dom.next().remove(),this.dom.fadeOut();
},
remove:function(){
this.opt.mask&&this.dom.next().remove(),this.dom.remove();
},
resetPos:function(){
var t=this;
t.dom.css("margin-left",-1*t.dom.outerWidth()/2).css("margin-top",-1*t.dom.outerHeight()/2);
}
},e.show=function(t){
return new i(t);
};
});;define("common/wx/popup.js",["common/wx/widgetBridge.js","biz_common/jquery.ui/jquery.ui.draggable.js","tpl/popup.html.js"],function(t){
"use strict";
t("common/wx/widgetBridge.js"),t("biz_common/jquery.ui/jquery.ui.draggable.js");
var i=t("tpl/popup.html.js"),o=template.compile(i),n={
disabled:"btn_disabled",
primary:"btn_primary",
"default":"btn_default"
};
$.widgetBridge("popup",{
$dialogWrp:null,
options:{
title:"温馨提示",
width:726,
height:null,
template:template.compile,
data:{},
buttons:[],
onHide:null,
onShow:null,
onOK:null,
onCancel:null,
mask:!0,
autoShow:!0
},
_create:function(){
var t=this,i=$.extend(!0,{},this.options),e=function(){
t.hide();
};
i.buttons&&!$.isArray(i.buttons)&&(i.buttons=[i.buttons]),!i.buttons.length&&i.onOK&&(i.buttons=[{
text:"确定",
type:"primary",
click:function(){
var t=i.onOK&&i.onOK.call(this);
!t&&e();
}
},{
text:"取消",
click:function(){
var t=i.onCancel&&i.onCancel.call(this);
!t&&e();
}
}]),$.each(i.buttons,function(t,i){
i.type=n[i.type||"default"];
});
var l;
if(this.element.is("script[type=text/html]"))l=this.element.html(),this.options.data&&this.options.template&&(l=this.options.template(l)(this.options.data));else{
var s=$("<div></div>").append(this.element.clone()),l=s.html();
this.options.data&&this.options.template&&(l=this.options.template(l)(this.options.data));
}
if(i.content=l,this.$dialogWrp=$(o(i)).appendTo("body"),this.$dialogWrp.find(".dialog_bd").children(":first").show(),
i.autoShow||this.$dialogWrp.hide(),this.$dialogWrp.find(".pop_closed").click(i.onClose||e),
this.$dialogWrp.find(".js_btn").each(function(o){
var n=i.buttons[o].click,e=n?function(i){
n.call(t,i);
}:function(){};
$(this).click(e);
}),this.resetPosition(),i.autoShow){
var a=t.options.onShow;
"function"==typeof a&&a.call(t);
}
return this.$dialogWrp.draggable({
handle:".dialog_hd"
}),this.get();
},
show:function(){
var t=this,i=t.options.onShow,o=!0;
this.$dialogWrp.fadeIn(function(){
o&&("function"==typeof i&&i.call(t),o=!1);
});
},
resetPosition:function(){
$(this.$dialogWrp.get(0)).css({
"margin-left":-1*this.$dialogWrp.outerWidth()/2,
"margin-top":-1*this.$dialogWrp.outerHeight()/2
});
},
get:function(){
return this.$dialogWrp.filter(".dialog_wrp");
},
hide:function(){
var t=this,i=t.options.onHide||t.options.close,o=!0;
this.$dialogWrp.fadeOut(function(){
o&&("function"==typeof i&&i.call(t),o=!1);
});
},
remove:function(){
this.destroy(),this.$dialogWrp.remove();
}
});
});;"object"!=typeof JSON&&(JSON={}),function(){
"use strict";
function f(t){
return 10>t?"0"+t:t;
}
function quote(t){
return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){
var e=meta[t];
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})+'"':'"'+t+'"';
}
function str(t,e){
var n,r,o,f,u,i=gap,p=e[t];
switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),
typeof p){
case"string":
return quote(p);

case"number":
return isFinite(p)?String(p):"null";

case"boolean":
case"null":
return String(p);

case"object":
if(!p)return"null";
if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){
for(f=p.length,n=0;f>n;n+=1)u[n]=str(n,p)||"null";
return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",
gap=i,o;
}
if(rep&&"object"==typeof rep)for(f=rep.length,n=0;f>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],
o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));else for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(o=str(r,p),
o&&u.push(quote(r)+(gap?": ":":")+o));
return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",
gap=i,o;
}
}
"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){
return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){
return this.valueOf();
});
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
},rep;
JSON.stringify2=function(t,e,n){
var r;
if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);
if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");
return str("",{
"":t
});
},"function"!=typeof JSON.stringify&&(JSON.stringify=JSON.stringify2),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){
function walk(t,e){
var n,r,o=t[e];
if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r=walk(o,n),
void 0!==r?o[n]=r:delete o[n]);
return reviver.call(t,e,o);
}
var j;
if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){
return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),
"function"==typeof reviver?walk({
"":j
},""):j;
throw new SyntaxError("JSON.parse");
});
}();;