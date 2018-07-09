(function(){var g=Handlebars.template({1:function(f,a,d,g,e){var c,b;return'\x3cdiv id\x3d"cupid-destinations-wrapper"\x3e\n  \x3cspan class\x3d"visuallyhidden" role\x3d"heading" aria-level\x3d"2"\x3e'+f.escapeExpression((b=null!=(b=d.title||(null!=a?a.title:a))?b:d.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"title",hash:{},data:e}):b))+'\x3c/span\x3e\n  \x3cheader class\x3d"cols-row-header section-header cf"\x3e\n    \x3ch3 id\x3d"cupid-destinations-title" class\x3d"section-header-main"\x3e'+f.escapeExpression((b=null!=(b=d.title||(null!=a?a.title:a))?b:d.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"title",hash:{},data:e}):b))+'\x3c/h3\x3e\n  \x3c/header\x3e\n  \x3csection id\x3d"cupid-destinations-carousel" class\x3d"uitk-carousel" data-control\x3d"uitk-carousel"\x3e\n    \x3cdiv class\x3d"uitk-carousel-wrap"\x3e\n      \x3cdiv class\x3d"uitk-carousel-items uitk-grid all-grid-nowrap mobile-col-1-1 smalltablet-col-1-2 tablet-col-1-3 desktop-col-1-3 all-x-gutter-12"\x3e\n'+(null!=(c=d.each.call(null!=a?a:{},null!=a?a.destinations:a,{name:"each",hash:{},fn:f.program(2,e,0),inverse:f.noop,data:e}))?c:"")+"      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/section\x3e\n\x3c/div\x3e\n"},2:function(f,a,d,g,e){var c,b;return'          \x3cdiv id\x3d"cupid-destinations-'+f.escapeExpression((b=null!=(b=d.regionId||(null!=a?a.regionId:a))?b:d.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"regionId",hash:{},data:e}):b))+'" class\x3d"uitk-carousel-item uitk-col"\x3e\n            \x3cdiv class\x3d"flex-card flex-tile has-link"\x3e\n              \x3cdiv class\x3d"flex-figure"\x3e\n'+(null!=(c=d["with"].call(null!=a?a:{},null!=a?a.image:a,{name:"with",hash:{},fn:f.program(3,e,0),inverse:f.noop,data:e}))?c:"")+'              \x3c/div\x3e\n              \x3cdiv class\x3d"flex-content"\x3e\n                \x3cdiv class\x3d"flex-area-primary"\x3e\n                  \x3cdiv class\x3d"header-stuff"\x3e\n                    \x3cdiv class\x3d"header-stuff-wrapper"\x3e\n                      \x3ch1 class\x3d"header-title"\x3e\n                        \x3cspan\x3e'+f.escapeExpression((b=null!=(b=d.cityName||(null!=a?a.cityName:a))?b:d.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"cityName",hash:{},data:e}):b))+'\x3c/span\x3e\n                      \x3c/h1\x3e\n                      \x3cp class\x3d"intro-blurb"\x3e\n'+(null!=(c=d.each.call(null!=a?a:{},null!=a?a.affinities:a,{name:"each",hash:{},fn:f.program(5,e,0),inverse:f.noop,data:e}))?c:"")+'                      \x3c/p\x3e\n                    \x3c/div\x3e\n                  \x3c/div\x3e\n                \x3c/div\x3e\n              \x3c/div\x3e\n              \x3ca class\x3d"flex-link" href\x3d"'+f.escapeExpression((b=null!=(b=d.hostName||(null!=a?a.hostName:a))?b:d.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"hostName",hash:{},data:e}):b))+"/lp/destinations/"+f.escapeExpression((b=null!=(b=d.regionId||(null!=a?a.regionId:a))?b:d.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"regionId",hash:{},data:e}):b))+"?rfrr\x3dHP.LP.Dest.DestinationPage."+f.escapeExpression((b=null!=(b=d.index||e&&e.index)?b:d.helperMissing,"function"===typeof b?b.call(null!=a?a:{},{name:"index",hash:{},data:e}):b))+'" target\x3d"_blank"\x3e\x3c/a\x3e\n            \x3c/div\x3e\n          \x3c/div\x3e\n'},3:function(f,a,d,g,e){var c;return'                  \x3cfigure\n                    class\x3d"image background aspect-ratio16-9"\n                    data-media-type\x3d"image"\n                    data-late\x3d"true"\n                    data-aspect-ratio\x3d"16-9"\n                    data-src\x3d"'+f.escapeExpression((c=null!=(c=d.url||(null!=a?a.url:a))?c:d.helperMissing,"function"===typeof c?c.call(null!=a?a:{},{name:"url",hash:{},data:e}):c))+'"\n                    data-alt\x3d"'+f.escapeExpression((c=null!=(c=d.alt||(null!=a?a.alt:a))?c:d.helperMissing,"function"===typeof c?c.call(null!=a?a:{},{name:"alt",hash:{},data:e}):c))+'"\n                    data-class\x3d"tile-media"\x3e\n                    \x3cspan class\x3d"media-loader"\x3e\n                      \x3cspan class\x3d"loader-primary loader-light loader-static loading" aria-hidden\x3d"true" title\x3d"Loading..."\x3e\x3c/span\x3e\n                    \x3c/span\x3e\n                  \x3c/figure\x3e\n'},5:function(f,a,d,g,e){var c;return'                          \x3cspan class\x3d"border-text"\x3e'+f.escapeExpression((c=null!=(c=d.displayedName||(null!=a?a.displayedName:a))?c:d.helperMissing,"function"===typeof c?c.call(null!=a?a:{},{name:"displayedName",hash:{},data:e}):c))+"\x3c/span\x3e\n"},compiler:[7,"\x3e\x3d 4.0.0"],main:function(f,a,d,g,e){var c;return null!=(c=d["if"].call(null!=a?a:{},null!=(c=null!=a?a.destinations:a)?c.length:c,{name:"if",hash:{},fn:f.program(1,e,0),inverse:f.noop,data:e}))?c:""},useData:!0});Handlebars.templates=Handlebars.templates||{};Handlebars.templates.cupidDestinations=g;Handlebars.partials=Handlebars.partials||{};Handlebars.partials.cupidDestinations=g})();define("cupidDestinations-loc",function(){return{cupidDestinationsTitle:"Because You Saved {{entityName}}"}});define("cupidDestinations","jquery cupidDestinations-loc gc/pageModel handlebars sfAbTest travelerProfileModel".split(" "),function(g,f,a,d,h,e){var c=c||{};c.config={preconditions:{experimentId:16021,isUserIdentified:function(a){return a.hasUser()&&a.user.userStatus&&/^(AUTHENTICATED|IDENTIFIED)$/i.test(a.user.userStatus)}},apiResponses:{travelerData:null,cupidData:null},container:g("#cupid-destinations-container"),containerCarouselId:"#cupid-destinations-carousel"};c.evaluatePreconditions=function(a){var b=g.Deferred();b.resolve(a.experimentId);return b.promise()};c.render=function(a,e){var b=d.partials.cupidDestinations,k={title:f.cupidDestinationsTitle.replace("{{entityName}}",e),destinations:a};c.config.container.html(b(k));g(c.config.containerCarouselId).uitk_carousel()};c.buildModel=function(a){var b=window.location.hostname;b="localhost"===b||-1<b.indexOf("sandbox")?"https://wwwexpediacom.trunk.sb.karmalab.net":"";return{regionId:a.content.geo.regionId,cityName:a.content.geo.name,hostName:b,image:a.content.images.data.filter(function(a){return!0===a.hero})[0]||a.content.images.data[0]||{url:"https://thumbnails.expedia.com/y7pk6yNP5VqmTfumLhHLk7dMPXg\x3d/1280x720/images.trvl-media.com/media/content/expus/graphics/deals/TE_Clouds_card_r1.jpg",caption:"Default Image"},affinities:a.content.tags.data.slice(0,3)}};c.init=function(){void 0!==e.lastSavedHotel&&void 0!==e.lastSavedHotel.hotelId&&1033==a.site.langId&&(h.log("16021"),c.evaluatePreconditions(c.config.preconditions).then(function(a){var b="";a="";var c=!1;if("localhost"==window.location.hostname||-1<window.location.hostname.indexOf("sandbox"))a="https://wwwexpediacom.trunk.sb.karmalab.net",c=!0;g.ajax({url:a+"/api/cupid/service/recommendation/content/hotel/"+e.lastSavedHotel.hotelId+"?type\x3dmulti_city_vicinity",type:"GET",contentType:"application/json",accepts:{json:"application/json"},crossDomain:c,xhrFields:{withCredentials:!0},async:!1,success:function(a){b=a},error:function(a,c,d){b={entities:[]}}});return b}).done(function(a){var b=a.entities.map(function(a){return c.buildModel(a)});if(3<b.length){var d=b.length-b.length%3;b=b.filter(function(a,b){return b<d})}g.isEmptyObject(b)||void 0===a.requestEntity||void 0===a.requestEntity.metaData||c.render(b,a.requestEntity.metaData.name)}))};return c});require(["cupidDestinations"],function(g){g.init()});var test={};
//# sourceMappingURL=cupidDestinations-1-en_US.js.map