//tealium universal tag - utag.2954 ut4.0.201807060709, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(typeof window[window.gtagRename]==="function"){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0){return true;}}
window.dataLayer=window.dataLayer||[];window[window.gtagRename]=function(){dataLayer.push(arguments);};window[window.gtagRename]("js",new Date());};u.initialized=u.hasgtagjs();u.scriptrequested=false;u.queue=[];u.o=window[window.gtagRename];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.map={"main_margin":"conversion_value","Itin_GUID_concatenated":"custom.order_id","mx_aw_conversion_label":"conversion_label"};u.extend=[function(a,b){try{if((b['siteId']=='12'&&typeof b['pageInfo.funnelLocation']!='undefined'&&b['pageInfo.funnelLocation'].toString().toLowerCase()=='CONFIRMATION'.toLowerCase())){b['mx_aw_conversion_label']='hUeACLCxzoQBEJ6i0P0C'}}catch(e){utag.DB(e)}}];u.loader_cb=function(){utag.DB("send:2954:CALLBACK");u.initialized=true;var g={};if(u.data.conversion_label){g.send_to=u.data.conversion_id+"/"+u.data.conversion_label;if(u.data.order_subtotal){g.value=u.data.order_subtotal;g.currency=u.data.order_currency;g.transaction_id=u.data.order_id;}
for(var key in u.data.custom){g[key]=u.data.custom[key];}
u.o("event","conversion",g);}
utag.DB("send:2954:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb();}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:2954");utag.DB(b);var d,e,f;u.data={"base_url":"https://www.googletagmanager.com/gtag/js","conversion_id":"AW-800330014","conversion_label":"","conversion_value":"","custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:2954:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}}
utag.DB("send:2954:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.conversion_value||u.data.order_subtotal||b._csubtotal||"";u.data.order_currency=u.data.conversion_currency||u.data.order_currency||b._ccurrency||"";if(u.data.order_currency!==u.data.order_currency.toUpperCase()){u.data.order_currency=u.data.order_currency.toUpperCase();utag.DB('Currency not supplied in uppercase - automatically converting');}
if(!u.data.conversion_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.data.base_url+="?id="+u.data.conversion_id;u.o("config",u.data.conversion_id);if(u.initialized){u.loader_cb();}else{u.queue.push({"data":u.data});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"loc":"script","cb":u.callBack,"id":"utag_2954","attrs":{}});}}
utag.DB("send:2954:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("2954","expedia.main"));}catch(error){utag.DB(error);}