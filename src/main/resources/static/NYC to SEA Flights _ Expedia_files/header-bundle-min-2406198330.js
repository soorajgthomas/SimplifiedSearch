if(typeof xp==="undefined"){var xp={};}if(typeof xp.namespace==="undefined"){xp.namespace=function(){var c=arguments,a=null,b;for(i=0;i<c.length;i=i+1){b=c[i].split(".");a=window;for(j=0;j<b.length;j=j+1){a[b[j]]=a[b[j]]||{};a=a[b[j]];}}return a;};}xp.namespace("xp.nav");xp.nav.trackAnalytics=function(b,a,c){if("undefined"!=typeof(s_exp_trackClick)&&s_exp_trackClick){s_exp_trackClick(b,a,c);}return true;};xp.nav.trackAnalyticsLanguageLinkWithLangID=function(a,b){if(window.dctk&&dctk.onReady){dctk.onReady(function(){dctk.trackAction(a,null,{prop30:b,eVar54:b});});}};xp.nav.handleResendEmailLink=function(){$("#header-trip-menu").addClass("open-resend");$("#trip-menu .menu").css({"opacity":"1","display":"block","visibility":"visible"});$("#email_resend_link_wrapper").hide();$("#email_resend_button_wrapper").show();};xp.nav.closeResendButton=function(){$("#email_resend_button_wrapper").hide();$("#email_resend_success_wrapper").hide();$("#email_resend_link_wrapper").show();$("#trip-menu .menu").css({"opacity":"","display":""});$("#header-trip-menu").removeClass("open-resend");};xp.nav.retrunMenuControl=function(){$("#trip-menu .menu").css({"opacity":"0","display":"none"});};xp.nav.handleResendButton=function(){var a=$("#email_resend_input").val().trim();if(xp.nav.isEmail(a)){$("#email_resend_button_wrapper").hide();$("#email_resend_success_wrapper").show();$("#resend-itinerary-form").submit();}};xp.nav.isEmail=function(b){if(b){var a=/^([a-zA-Z0-9_-]|(\.))+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;return a.test(b);}return false;};xp.namespace("xp.nav.event");xp.nav.event.onDOMReady=function(b){if(window.addEventListener){window.addEventListener("load",b,false);}else{if(window.attachEvent){window.attachEvent("onload",b);}else{if(window.onload!=null){var a=window.onload;window.onload=function(c){a(c);window[b]();};}else{window.onload=b;}}}};fillTestOverrideParams=function(){var a=window.location.pathname+window.location.search+window.location.hash;if(a.indexOf("ue2e")!=-1){document.getElementById("header-itineraries").href+=a;}};langRedirectionUrl=function(d){var a="/pub/agent.dll?qscr=chlg&lang={langID}&ovrd=3&rurl=",l=window.location.pathname,k=window.location.hostname,g=d.href.split("?langid=")[1],m=window.location.search,c=window.location.hash,e=d.href;var h=(l.indexOf("agent.dll")>-1)||(l.indexOf("/daily/")>-1);var b=window["header_feedDomain"];var f=(k.indexOf("ebookers")>-1)||(k.indexOf("mrjet")>-1);a=a.replace("{langID}",g);if(h&&!f){e=a+encodeURIComponent(window.location);}if(b){if(f){e="http:"+window["header_feedDomain"]+"/?langid="+g;}else{e="http:"+window["header_feedDomain"]+a+encodeURIComponent("http:"+window["header_feedDomain"]+"/");}}else{if(m===""){m="?";}if(m.indexOf("langid=")>-1){m=m.replace(/langid=\d+/,"langid="+g);}else{m=m+"&langid="+g;}e=l+m+c;}window.location.href=e;};appendRedirectionUrl=function(d,g,a){var g=g||this,h=h||g.location.pathname,f=(/uurl=([^&]+)/.exec(g.location.search)||[])[1],b,e,k,c=g["header_feedDomain"],a=a||d.href;if(a.indexOf("/user/signin")!=-1){b="/user/signin?ckoflag=0";}else{if(a.indexOf("/user/login")!=-1){b="/user/login?ckoflag=0";}else{if(a.indexOf("/user/createaccount")!=-1){b="/user/createaccount?fromheader=true";}else{b="/user/logout?";}}}if(c){b="http:"+g["header_feedDomain"]+b+"&uurl=http:"+g["header_feedDomain"];}else{if(f&&f.indexOf("e3id")!==-1){b=b+"&uurl="+f;}else{if(h==="/Hotel-Search"){e=h+g.location.search+g.location.hash.replace("#",(g.location.search===""?"?":"&"));k="&uurl="+encodeURIComponent("e3id=redr&rurl="+e);b=b+k;}else{if(h!=="/"){e=h.concat(g.location.search,g.location.hash);k="&uurl="+encodeURIComponent("e3id=redr&rurl="+e);b=b+k;}}}}g.location.href=b.replace(/\'/g,"").replace(/\"/g,"");};addScratchpadBadge=function(c){function b(){var d;if(window.XMLHttpRequest){d=new XMLHttpRequest();}else{d=new ActiveXObject("Microsoft.XMLHTTP");}d.onreadystatechange=function(){if(d.readyState==4&&d.status==200){if(d.responseText){var f=JSON.parse(d.responseText);var g=document.getElementById("scratchpad-badge");if(f.count>0){if(f.count>30){f.count=30;}g.textContent=f.count;g.className=g.className.replace("visuallyhidden","");}else{g.textContent="0";}}}};var e=document.getElementById("scratchpad-badge");if(e.textContent.length==0){d.open("GET","/api/userhistory/count",true);d.send();}}function a(){if($("#scratchpad-badge").text().length==0){$.ajax({dataType:"json",url:"/api/userhistory/count",success:function(d){if(d.count>0){if(d.count>30){d.count=30;}$("#scratchpad-badge").removeClass("visuallyhidden").text(d.count);}else{$("#scratchpad-badge").text("0");}},cache:false,timeout:500});}}if(window.isScratchpadTrayEnabled&&(!!isScratchpadTrayEnabled||c)){if(typeof $=="function"&&typeof $.ajax=="function"){a();}else{b();}}};currencyRedirectionUrl=function(g){var h=window.location.pathname,k=window.location.search,b=window.location.hash,e=window.location.pathname;var c=window["header_feedDomain"];g=g+"&rfrr=Header.Currency."+g;if(c){e="http:"+window["header_feedDomain"]+"/?currency="+g;}else{if(k===""){k="?";}if(k.indexOf("currency=")>-1){k=k.replace(/currency=[A-Z]{3}&rfrr=Header.Currency.[A-Z]{3}/,"currency="+g);}else{if(k.indexOf("rfrr")>-1){var a=k.split("&");for(var d=0;d<a.length;d++){if(a[d].indexOf("rfrr")>-1){a.splice(d,1);d--;}}k=a.join("&")+"&currency="+g;if(k.indexOf("?")!==0){k="?"+k;}}else{k=k+"&currency="+g;}}e=h+k+b;}if(document.cookie.indexOf("tpidCurrency=")>=0&&typeof oip==="object"&&oip.canTrack){var f={"GBP":3,"INR":27,"USD":1,"CNY":75,"CAD":4};document.cookie="tpidCurrency="+f[g]+"|"+g;document.cookie="currency="+g;}window.location.href=e;};var script=document.createElement("script");script.type="text/javascript";script.src="https://a.travel-assets.com/oip/oip.js";script.defer=true;script.async=true;document.getElementsByTagName("head")[0].appendChild(script);function headerFeedback(m){var c=screen.width,f=screen.height,o=(document.getElementById("home-page")!==null),g=OpinionLab_FB.O_HT(),a,d="ModalPopUp",h,b="/p/info-other/feedback.htm";var n=((f-192)/2),k=((c-535)/2);if(o){g=g.replace("Homepage.html","Homepage-new.html");}if(window["header_feedBackUrl"]!==undefined){b=header_feedBackUrl;}a=b+"?referer="+g+"&prev="+OpinionLab_FB.O_PRV();h=["toolbar=no","scrollbars=yes","location=no","statusbar=no","menubar=no","resizable=no","width=635px","height=280px","screenX="+k,"screenY="+n,"left="+k,"top="+n].join(",");var l=window.open(a,d,h);l.focus();}(function(b,d){var c=document.getElementById("redirectBanner");if(c){var a=c.querySelectorAll("button.btn-close")[0];if(!a.addEventListener){a.attachEvent("onclick",function(){xp.nav.trackAnalytics(this,"a","Header:IPSniff:Close");s_exp_trackClick(this,"o","Header:IPSniff:Close");},false);}else{a.addEventListener("click",function(){xp.nav.trackAnalytics(this,"a","Header:IPSniff:Close");s_exp_trackClick(this,"o","Header:IPSniff:Close");},false);}}}(window));function closeBanner(){return true;}var OpinionLab_FB=(function(){var custom_var,_sp="%3A\\/\\/",_rp="%3A//",_poE=0,_poX=0,_sH=screen.height,_d=document,_w=window,_ht=escape(_w.location.href),_hr=_d.referrer,_tm=(new Date()).getTime(),_kp=0,_sW=screen.width;function _fC(_u){_aT=_sp+",\\/,\\.,-,_,"+_rp+",%2F,%2E,%2D,%5F";_aA=_aT.split(",");for(i=0;i<5;i++){eval("_u=_u.replace(/"+_aA[i]+"/g,_aA[i+5])");}return _u;}function _fPe(){if(Math.random()>=1-_poE){O_LC();_poX=0;}}function _fPx(){if(Math.random()>=1-_poX){O_LC();}}function _populateCustomVar(){var t="";var g="";if((typeof(dctk)!=="undefined")&&(typeof(dctk.omtr)!=="undefined")){t=(typeof(dctk.omtr.prop11)!=="undefined")?dctk.omtr.prop11:"";g=(typeof(dctk.omtr.prop12)!=="undefined")?dctk.omtr.prop12:"";}else{if(typeof(s_exp)!=="undefined"){t=(typeof(s_exp.prop11)!=="undefined")?s_exp.prop11:"";g=(typeof(s_exp.prop12)!=="undefined")?s_exp.prop12:"";}else{t=(typeof(s_prop11)!=="undefined")?s_prop11:"";g=(typeof(s_prop12)!=="undefined")?s_prop12:"";}}custom_var=g+"|"+t;}function _replacePageName(){var page_name=null;page_name=((typeof(dctk)!=="undefined")&&(typeof(dctk.omtr)!=="undefined"))?escape(dctk.omtr.pageName)+".html":((typeof(s_exp)!=="undefined")&&(typeof(s_exp.pageName)!=="undefined"))?escape(s_exp.pageName)+".html":(typeof(s_pageName)!=="undefined")?escape(s_pageName)+".html":null;
if(page_name){var l_page_name=page_name.toLowerCase();if(l_page_name.search("infosite")>=0){page_name=null;}}if(page_name){_domain=_ht.replace("https%3A//","").replace("http%3A//","");_ht=_ht.substr(0,_ht.indexOf("%3A//"))+"%3A//"+_domain.substr(0,_domain.indexOf("/"))+"/"+page_name;}if(typeof(bIsCAFR)!="undefined"){if(bIsCAFR==true){_lG="fr-CA.";_rp="%3A//"+_lG;}}if(typeof(bIsMSMY)!="undefined"){if(bIsMSMY==true){_lG="ms-my.";_rp="%3A//"+_lG;}}if(typeof(OlAltLang)!="undefined"){if(OlAltLang!=null){_lG=OlAltLang;_rp="%3A//"+_lG;}}}return{O_HT:function(){_replacePageName();return _ht;},O_CV:function(){_populateCustomVar();return custom_var;},O_PRV:function(){if(_hr==null||_hr.length<1){return"null";}return escape(_hr);},O_LC:function(target,referer,customvar,prev){_replacePageName();_populateCustomVar();if(target==null||target.length<1){target="comments";}if(referer==null||referer.length<1){referer=_ht;}if(customvar==null||customvar.length<1){customvar=custom_var;}if(prev==null||prev.length<1){prev=_fC(escape(_hr));}else{if(prev=="null"){prev="";}else{prev=_fC(escape(prev));}}_w.open("https://secure.opinionlab.com/ccc01/comment_card.asp?time1="+_tm+"&time2="+(new Date()).getTime()+"&prev="+prev+"&referer="+_fC(referer)+"&height="+_sH+"&width="+_sW+"&custom_var="+customvar,target,"width=535,height=192,screenX="+((_sW-535)/2)+",screenY="+((_sH-192)/2)+",top="+((_sH-192)/2)+",left="+((_sW-535)/2)+",resizable=yes,copyhistory=yes,scrollbars=no");},O_GoT:function(_p){_d.write("<a href='javascript:O_LC()'>"+_p+"</a>");}};})();var footernamespace=footernamespace||{};footernamespace.collapseFooterOnBreakpoint=function(){if(window.uitk){var a="collapse_footer";uitk.mediaquery.register("(max-width: 492px)",a);uitk.subscribe("mediaquery.matched",function(b,c){if(c.key===a){d();}function d(){var e=$("#site-footer-wrap");if(e.length>0){e.find(".toggle").removeClass("open");}}});uitk.mediaquery.publishAgain();}};footernamespace.collapseFooterOnBreakpoint();
/*!  generated on 2018-07-08 22:14:15.887 PDT(-0700) in 3 ms  */

/*!  served in 0 ms  */
