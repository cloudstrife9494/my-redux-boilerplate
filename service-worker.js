"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/my-redux-boilerplate/index.html","a97d59aeff0cf1cc1f7d8252922cd51e"],["/my-redux-boilerplate/static/css/main.a0031496.css","65f17bcc418f4b0feb7f98dadbf77f9f"],["/my-redux-boilerplate/static/js/main.cdab632d.js","49d960714378ad254bf8cac22328d055"],["/my-redux-boilerplate/static/media/goback.9231b5a3.png","9231b5a380e960755383610cb799185d"],["/my-redux-boilerplate/static/media/goback1.0137f435.png","0137f4356dd4a084371e172b77fe9e08"],["/my-redux-boilerplate/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/my-redux-boilerplate/static/media/loupe1.603fec2f.png","603fec2f46971e0517f939bd9ac6aa46"],["/my-redux-boilerplate/static/media/notification.0b4ac1dc.ttf","0b4ac1dc75df35e169b70d7719afe4cc"],["/my-redux-boilerplate/static/media/notification.5bee74ca.svg","5bee74caefdf9d0a834915f6c8eeb259"],["/my-redux-boilerplate/static/media/notification.651771e1.woff","651771e1df95c807c99608188d0a4287"],["/my-redux-boilerplate/static/media/notification.c0d3c94c.eot","c0d3c94cd6112550c51d7d1ed13b9da1"],["/my-redux-boilerplate/static/media/plus.f1835630.png","f183563026979165e389817e91f90067"],["/my-redux-boilerplate/static/media/plus1.cf75304f.png","cf75304f730358de73f7562ad97c10f8"],["/my-redux-boilerplate/static/media/remove.2fd0d057.png","2fd0d057cd292ec9f8da0be7b9db6a42"],["/my-redux-boilerplate/static/media/remove1.d4f8a31f.png","d4f8a31ff5886ab2ca23e63281ee27e9"],["/my-redux-boilerplate/static/media/remove2.4adcc4f9.png","4adcc4f9da49ba4a8d40de24fa9a9c0f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/my-redux-boilerplate/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});