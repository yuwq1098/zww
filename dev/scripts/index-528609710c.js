"use strict";$(function(){var a=function(e){return new Promise(function(n,a){var t=new Image;t.src=e,t.onload=function(){n(!0)},t.onerror=function(){a(new Error("Could not load image at "+e))}})},t=0;a("../imgs/zww_logo_030.png").then(function(n){$(".m-logo").append(n)}).catch(function(n){t<3&&(console.log("第几次"+t),a("../imgs/zww_logo_030.png")),console.error(n),t++});!function(){var n=new Set;n.add({lab_name:"首页"}),n.add({lab_name:"关于"}),n.add({lab_name:"作品"}),n.add({lab_name:"爱好"}),n.add({lab_name:"联系"});var a="",t=0,e=!0,l=!1,o=void 0;try{for(var i,r=n[Symbol.iterator]();!(e=(i=r.next()).done);e=!0)a+='<li class="lm-item'+(0==t?" active":"")+'"><a href="javascript:;" class="u-link">'+i.value.lab_name+"</a></li>",t++}catch(n){l=!0,o=n}finally{try{!e&&r.return&&r.return()}finally{if(l)throw o}}a='<ul class="lm-list">'+a+"</ul>",$(".m-left-menu").append(a)}(),$(".m-left-menu .lm-item").on("click",function(){$(this).addClass("active").siblings(".lm-item").removeClass("active")});var e;e="",[{tit:"github",link:"https://github.com/yuwq1098"},{tit:"CSDN博客",link:"https://blog.csdn.net/yuwq123"}].forEach(function(n){e+='<a href="'+n.link+'" class="u-link" target="_blank">'+n.tit+"</a>"}),e+='<span class="u-producer">Made by yu wenqiang.</a>',$(".m-foot-note").append(e)});