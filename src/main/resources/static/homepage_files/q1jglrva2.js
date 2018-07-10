



/* ControlTag Loader for Expedia.com 3d8e4b51-b537-4841-9086-4f59862457c6 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.36.0","schema_version":3},"confid":"q1jglrva2","context_terms":[],"publisher":{"name":"Expedia.com","active":true,"uuid":"3d8e4b51-b537-4841-9086-4f59862457c6","version_bucket":"stable","id":2021},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":true,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"buckets":"meso","optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"prioritized_segments":false,"context_terms":false,"optout_button_id":"kx-optout-button","controltag_interchange_segment_buckets":"meso","dfp_premium":true,"control_tag_namespace":"expedia"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/3d8e4b51-b537-4841-9086-4f59862457c6","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/3d8e4b51-b537-4841-9086-4f59862457c6","consent_set":"https://consumer.krxd.net/consent/set/3d8e4b51-b537-4841-9086-4f59862457c6","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/3d8e4b51-b537-4841-9086-4f59862457c6","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Expedia Site","cap":255,"id":1520109,"organization_id":2021,"uid":"q1jglrva2"},"tags":[{"id":21861,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21862,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21863,"name":"Krux DTC Standard","content":"<script>\n(function(){\n    \n    Krux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n    Krux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n    Krux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n    Krux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n    var domain = Krux('scrape',{'page_attr_domain':{url_domain: '2'}}).page_attr_domain;\n    if(domain.match(/^com?\\./)){\n         Krux('scrape',{'page_attr_domain':{url_domain: '3'}});\n    }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":26557,"name":"Krux DataLayer Ingester","content":"<script>\n(function() {\n    var page = ['device.device.type', 'pageInfo.language', 'activityId', 'activityName', 'currencyCode', 'checkout.cartTotal.amount', 'bookingDateinUTC', 'carVendor', 'carType', 'carPickUpLocationCode', 'carDropOffLocationCode', 'cruiseLine', 'cabinClass', 'cruiseTitle', 'departureMonth', 'carrierCodes', 'lengthOfFlight', 'starRating', 'guestRating', 'hotelBrand', 'hotelName', 'hotelId', 'numberOfRooms', 'roomType', 'roomDescription', 'packageType', 'SiteBrand', 'pointofsales', 'pageType', 'lob.domain', 'siteName', 'siteId', 'adults', 'childrenCount', 'numberOfGuests', 'destination', 'regionId', 'destinationAirportCode', 'origin', 'originAirportCode', 'bookingWindow', 'lengthOfStay', 'checkInDate', 'checkOutDate', 'city', 'state', 'stateProvinceCode', 'country', 'countryCode', 'roomNights', 'isInternationalBooking', 'tripType', 'context.marketingAttribution.restrictedLastTouch'];\n\n    var user = ['rewardsStatus.membershipTier', 'loggedUser', 'device.device.type', 'context.user.expUserProfileId', 'pageInfo.language', 'tuid', 'guid', 'checkout.trl', 'checkout.customerFacingItineraryNumber'];\n\n    var checkOver = function(arr, dl, type) {\n        var i, len = arr.length;\n        for (i = 0; i < len; i++) {\n            if (arr.hasOwnProperty(i) && dl[arr[i]]) {\n                dataObj[type][arr[i]] = dl[arr[i]];\n            }\n        }\n    };\n\n    if (window.utag_data) {\n        var dl = window.utag_data;\n        var dataObj = { page: {}, user: {} };\n        checkOver(page, dl, 'page');\n        checkOver(user, dl, 'user');\n        var omitKeys = '',\n            custDelimit = '',\n            prefix = '',\n            config = {\n                'userKeys': user,\n                'omitKeys': omitKeys ? omitKeys.split(',') : [],\n                'customDelimited': custDelimit ? custDelimit.split(',') : undefined,\n                'caseSensitive': true,\n                'useFullPath': true,\n                'useLastValue': false,\n                convertAttrNames: [{\n                    pattern: /page_attr_page.carDropOffLocationCode|page_attr_page.destinationAirportCode/,\n                    replacement: 'page_attr_page.mergedDestinationCode'\n                }, {\n                    pattern: /page_attr_page.originAirportCode|page_attr_page.carPickUpLocationCode/,\n                    replacement: 'page_attr_page.mergedOriginCode'\n                }, {\n                    pattern: /user_attr_page.device.device.type/,\n                    replacement: 'page_attr_page.site.platform'\n                }, {\n                    pattern: /user_attr_page.pageInfo.language/,\n                    replacement: 'page_attr_page.language'\n                }, {\n                    pattern: /context.marketingAttribution.restrictedLastTouch/,\n                    replacement: 'extension_contex.marketingAttribution.restrictedLastTouch'\n                }]\n            };\n\n        if (!prefix.match(/^$|null|undefined|false/)) {\n            config.convertAttrNames.push({\n                pattern: /((?:page|user)_attr_)/,\n                replacement: '$1' + prefix\n            });\n        }\n        config.omitKeys.push(/gtm\\./);\n        Krux('ingestDataLayer', dataObj, config);\n    }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":25,"name":"eXelate Media","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: \"//loadm.exelator.com/load\",\r\n      data: {\r\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\r\n          buid: kuid,\r\n          p: '204',\r\n          g: '270',\r\n          j: '0'\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":45,"name":"TubeMogul user match","content":"<script>\r\n    (function() {\r\n        new Image().src = location.protocol + '//sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + encodeURIComponent('https://beacon.krxd.net/usermatch.gif?partner_id=cb276571-e0d9-4438-9fd4-80a1ff034b01&puid=${TM_USER_ID}');\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":16,"name":"Turn S2S User Match","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      (new Image()).src='//d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMjg0OTE3NDgvdC8y/dpuid/' + kuid;\r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":66,"name":"Infectious Media Usermatch","content":"<script>\n(function(){\n  var prefix = window.location.protocol == 'https:' ? 'https' : 'http';\n  var partner_url = prefix +'://pix.impdesk.com/csync/krux';\n  new Image().src = partner_url;\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":55,"name":"Acxiom APAC Usermatch","content":"<script>\r\n(function(){\r\n\tvar liveramp_url = '//s.acxiomapac.com/sci',\r\n\tdata = {\r\n\t\tpid: 90010,\r\n\t\tuid: Krux('get','user')\r\n\t};\r\n\tif(data.uid){\r\n\t\tKrux('require:http').pixel({\r\n\t\t\turl: liveramp_url,\r\n\t\t\tdata: data\r\n\t\t});\r\n\t}\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":82,"name":"DataLogix - Legacy","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.8f9c5605187855d5a137991abae6f700', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
