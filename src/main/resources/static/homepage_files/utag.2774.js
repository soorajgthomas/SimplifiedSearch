//tealium universal tag - utag.2774 ut4.0.201805041010, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(typeof utag.ut.gtagScriptRequested!=="undefined"&&utag.ut.gtagScriptRequested===true){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0){return true;}}
window.dataLayer=window.dataLayer||[];window[window.gtagRename]=function(){dataLayer.push(arguments);};window[window.gtagRename]("js",new Date());};u.initialized=u.hasgtagjs();u.scriptrequested=false;u.queue=[];u.o=window[window.gtagRename];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}return true;};u.map={"dc_order_id":"order_id","checkout.cartTotal.amount":"order_total","dcfl_activity_group":"activity_group","dcfl_activity":"activity","dcfl_counting_method":"counting_method"};u.extend=[function(a,b){try{if(1){if(typeof b['siteId']!='undefined'&&typeof b['pageInfo.funnelLocation']!='undefined'&&b['pageInfo.funnelLocation']!=null&&b['pageInfo.funnelLocation'].toString().toLowerCase().indexOf('CONFIRMATION'.toLowerCase())>-1){switch(b.siteId){case 70301:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="naus-001";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70472:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="emeac0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70473:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="emeaf0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70406:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="emead0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70420:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="emeaf00";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70463:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="emeai0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70403:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="emeau0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70465:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="emeas0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70125:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="anzau0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70129:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="anznz0";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70150:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="anzau00";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;case 70151:b['dcfl_activity_group']="naus-0";b['dcfl_activity']="anznz00";b['dcfl_counting_method']="transactions";b['dc_order_id']=b['checkout.trl']||"";break;default:break;}}}}catch(e){utag.DB(e)}}];u.loader_cb=function(a,b){utag.DB("send:2774:CALLBACK");u.initialized=true;var i,j,_event,p,key;for(i=0;i<u.data.advertiser_id.length;i++){u.o("config",u.data.advertiser_id[i]);}
if(u.data.order_id){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="purchase"){p=true;}}
if(!p){u.data.event.push("purchase");}}
var total_qty=1;if(typeof(u.data.product_quantity)==="number"){total_qty=u.data.product_quantity;}else if(u.data.product_quantity.length===1){total_qty=u.data.product_quantity[0];}else if(u.data.product_quantity.length>1){for(i=0;i<u.data.product_quantity.length;i++){total_qty+=parseInt(u.data.product_quantity[i],10);}}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];for(j=0;j<u.data.advertiser_id.length;j++){var eventIdData={};if(u.data.custom_scripts==="true"||u.data.custom_scripts){eventIdData.allow_custom_scripts=true;}else if(u.data.custom_scripts==="false"||!u.data.custom_scripts){eventIdData.allow_custom_scripts=false;}
if(u.data.session_id.length===1&&u.data.session_id[0]!==""){eventIdData.session_id=u.data.session_id[0];}else if(u.data.session_id[j]!==""){eventIdData.session_id=u.data.session_id[j];}
if(u.data.order_total){eventIdData.value=u.data.order_total;eventIdData.transaction_id=u.data.order_id;}
if(u.data.product_quantity){eventIdData.quantity=total_qty;}
for(key in u.data.custom){eventIdData[key]=u.data.custom[key];}
if(!u.isEmptyObject(u.data.dc_custom_params)){eventIdData.dc_custom_params={};for(key in u.data.dc_custom_params){eventIdData.dc_custom_params[key]=u.data.dc_custom_params[key];}}
eventIdData.send_to=u.data.advertiser_id[j]+"/"+u.data.activity_group[j]+"/"+u.data.activity[j]+"+"+u.data.counting_method[j];if(_event==="purchase"){u.o("event","purchase",eventIdData);}
if(_event==="conversion"){u.o("event","conversion",eventIdData);}}}
utag.DB("send:2774:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b);}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:2774");utag.DB(b);var d,e,f,h;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.googletagmanager.com/gtag/js","advertiser_id":"DC-6769901","activity_group":"","activity":"","counting_method":"","custom_scripts":"true","session_id":"","product_quantity":[],"dc_custom_params":{},"event_name":"","event":[],"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:2774:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:2774:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof(u.data.advertiser_id)==="string"){u.data.advertiser_id=u.data.advertiser_id.split(",");}
if(typeof(u.data.activity_group)==="string"){u.data.activity_group=u.data.activity_group.split(",");}
if(typeof(u.data.activity)==="string"){u.data.activity=u.data.activity.split(",");}
if(typeof(u.data.counting_method)==="string"){u.data.counting_method=u.data.counting_method.split(",");}
if(typeof(u.data.session_id)==="string"){u.data.session_id=u.data.session_id.split(",");}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.data.base_url+="?id="+(u.data.advertiser_id[0]);if(u.initialized){u.loader_cb(a,b);}else{u.queue.push({"data":u.data,"a":a,"b":b});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_2774","attrs":{}});}}
utag.DB("send:2774:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("2774","expedia.main"));}catch(error){utag.DB(error);}
