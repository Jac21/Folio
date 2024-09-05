/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["dist/fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["dist/fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["dist/fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["dist/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["dist/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["dist/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["dist/fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["dist/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["dist/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["dist/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["dist/fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["dist/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["dist/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["dist/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["dist/fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["dist/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["dist/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["dist/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["dist/fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["dist/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["dist/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["dist/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["dist/fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["dist/images/developer/developer-header.jpeg","c2b0f37ddce75c908b6afd5c36227727"],["dist/images/developer/etude/etude-logo.png","821796de9c458e7c03cd343364e225bc"],["dist/images/developer/etude/etude-tree.png","3a76f4f60bd352e83e5acf2f333a0d8f"],["dist/images/developer/etude/etude.jpg","1e1b96b4d5cad2d7bb52dae23d373c29"],["dist/images/developer/etude/google-drive.png","2f1875afbaa68600f76d98970adac1e3"],["dist/images/developer/etude/index.html.png","898a294fc3b914bd76d2f757679467a7"],["dist/images/developer/libs/asynclock/logo.png","190e4f2ef902d87e1eac7e373010e77c"],["dist/images/developer/libs/blockingcollectionsextensions/logo.png","87558f5c6c15f8a22064cdbcd2a0fb77"],["dist/images/developer/libs/cachelitesharp/facebook_cover_photo_2.png","d7460f0252d4a8ec6dbbb87e23fc2d18"],["dist/images/developer/libs/cachelitesharp/logo.png","7acaf780292975e9b1099a87e58b3769"],["dist/images/developer/libs/cachelitesharp/pinterest_profile_image.png","2ffe127b189e191fa5be94bf24293ca1"],["dist/images/developer/libs/cachelitesharp/youtube_profile_image.png","9db77296e77fce439a508664b39e24ae"],["dist/images/developer/libs/reactcinemagraph/logo.png","60b3893c46277d6c497c40c5ae582acf"],["dist/images/developer/libs/shardedcounter/logo.png","339218788e7c919b1bdc3391adf9cf28"],["dist/images/developer/reponotes/github-at-a-glance.png","52e9ea83a3754ef0995b7061b959b866"],["dist/images/developer/reponotes/offline-example-sw.png","a3eab4e906f94fe45de34044ba88b247"],["dist/images/developer/reponotes/reponotes-example.png","aa75550a4595995b7e29f525cc1eefb7"],["dist/images/developer/reponotes/reponotes-mobile.png","6ef6b101f4b6b7d856cc429b0ade4716"],["dist/images/developer/reponotes/reponotes.png","77345e40cdc8408ec0de1adc6cbeb320"],["dist/images/developer/skillset/fdg.PNG","f689e48ec110566160907b1e7b5a0514"],["dist/images/developer/skillset/json-resume-projects.PNG","76525c213fa28a8665190e83472e4dc6"],["dist/images/developer/skillset/json-resume.PNG","807e41caf26b5cb88aafc3e73ebe3a63"],["dist/images/developer/skillset/output-example.PNG","00c1bdd629c0e7caeab29cfecd7b8136"],["dist/images/developer/skillset/schema.PNG","696ad69a66e72930b6915eba5e51b69e"],["dist/images/developer/skillset/skillset-example.png","07927c33548019e396c8d554f1c84b94"],["dist/images/developer/skillset/skillset.png","574f7554ad10e63999ae3cd45f13debb"],["dist/images/developer/talks/gulp-talk.PNG","a2f1cdf768dbd7bf1292c811348df133"],["dist/images/developer/talks/iNNOVATIONS-2018-REST-API-Update.PNG","b05ae97346e4a9c49b643f6511bfe02c"],["dist/images/developer/talks/superpowers-talks.PNG","2fe9e79caa53e701f59c5fdff1270dc1"],["dist/images/developer/tfstoolset/tfstoolset.png","2fb2135055be0e358d852ea20d107a9b"],["dist/images/photographer/headshot-photo.jpg","c26ab2c7eb29d32c29199eab8b280197"],["dist/images/photographer/photos/DSC_1201.jpg","cc31b362b1ec69b2f06c0c48020576a9"],["dist/images/photographer/photos/DSC_4110.JPG","6919ab59a6da8a94d40af99f5a48f869"],["dist/images/photographer/photos/DSC_4516.JPG","f7d5134b868006b976e709cc582a77a7"],["dist/images/photographer/photos/DSC_4705.JPG","06bf0c49e429a8f509dac48ed1259498"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5532041507-R1-E012.jpg","66ea6d74cece6d32a7af75d64a8cf892"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5532041507-R1-E034.jpg","288a2a14b86ac01aaadee513cd7dce30"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5575041509-R1-E003.jpg","12ce421a1934b292908fa573222123db"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5575041509-R1-E015.jpg","23d5fdd4901a92551895329c77f58f7b"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5608041502-R1-E006.jpg","ca1ea64be97a5881d980531aa105bfea"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5608041502-R1-E028.jpg","a8212befc1bfb550dab6301c284dad9e"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5609041503-R1-040-18A.jpg","7037c73f487256f915b3625b56072b36"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5609041503-R1-056-26A.jpg","320753dbd8d1f852d6a7c1542c4b60b5"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5611041505-R1-022-9A.jpg","09ecdb6ae5df03180598ebf0a0bafd8a"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5611041505-R1-028-12A.jpg","8d614492e88d8a2404db143425886554"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5612041506-R1-E005.jpg","a742656ed43bebc481bdc3215d236e25"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5612041506-R1-E010.jpg","fdc4f7f30c63da04b7e1600eeca4186e"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E019.jpg","068dff31532f1cc9e8adf1e9c353fa8c"],["dist/images/photographer/photos/Shoots/Summer 2024/0000886_0000886-R1-009-3.jpg","d35a5703099a95b749a5bd5c6e1e9931"],["dist/images/photographer/photos/Shoots/Summer 2024/0000886_0000886-R1-011-4.jpg","00b47a8d270a338d42f567f06a607862"],["dist/images/photographer/photos/Shoots/Summer 2024/0000887_0000887-R1-036-16A.jpg","e2066144bc035e1def2317754e04043f"],["dist/images/photographer/photos/Shoots/Summer 2024/0000887_0000887-R1-060-28A.jpg","275b0929ba4822a7d9f2a5952827ccad"],["dist/images/photographer/photos/Shoots/Summer 2024/2951003191-R1-044-20A.jpg","fa34e884dfb94d535321d4d0acfd5b47"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E001.jpg","e47445d0c25783fd2bfed3c6c7ebb003"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E004.jpg","544e8b94f9a8013042a39a57de232662"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E005.jpg","a15b510f659b804b21c2b3e2750731e0"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E006.jpg","48e0197e27edb42899103ace029aac13"],["dist/images/photographer/photos/Shoots/Summer 2024/C27BBD23-DA7A-4C4C-B790-7B31C29D8C11_1_201_a.jpeg","52afa493f19ca07fc777c0280bdf1f43"],["dist/images/photographer/photos/Shoots/Summer 2024/CC0830EC-601F-4399-AD7F-FB71A6F27F17_1_201_a.jpeg","4efcc02dcad980481b86d952c6f72c2f"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.jpg","7e52027912d00489e11cab5e27b76d50"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.png","6f3a8ab5d7813a165b52a9262dc36a33"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.jpg","daf92cdcd64f15ad3fce6414185775ff"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.png","3b49daf1c5fa08744c2234bb494f4461"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.jpg","2c85d3d8257c6ed7ccdc741b54f72a37"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.png","142d64919565f458e21878b9d9313bc7"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.jpg","4e3679f19bbbd444a3c63980a55c8eef"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.png","d0577526751d57ecd4cd69e567ed21b2"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038 - Copy.jpg","b6234d9458b77fb78228643a17cde301"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.jpg","39972e29bac4c040475be569c626712a"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.png","d1ef165795c7c27414bb33a31fbd9b60"],["dist/images/photographer/photos/Shoots/Vera/Vera1200.jpg","f9debd50ed0ba5efc044edbf521c4a19"],["dist/images/photographer/photos/Shoots/Washington/3161040252-R1-E002.jpg","620d6cfdc58f900d43af53ccd64b11c7"],["dist/images/photographer/photos/Shoots/Washington/3161040252-R1-E025.jpg","727c261d2843bac03966273f5884b416"],["dist/images/photographer/photos/Shoots/Washington/3169040253-R1-E030.jpg","5a488563fac6d25fa91f8b38d57607ee"],["dist/images/photographer/photos/Shoots/Washington/3169040253-R1-E037.jpg","0f3223df6a992572ada69fcb74dca413"],["dist/images/photographer/photos/Shoots/Washington/3225040254-R1-E006.jpg","43ed77aa109ace112f8136012b51a406"],["dist/images/photographer/photos/Shoots/Washington/3225040254-R1-E027.jpg","704e236cf72a70625f1227ef80177a10"],["dist/images/photographer/photos/Shoots/Washington/3292040250-R1-E018.jpg","194b8bab14d3f814ece1bf61adb5320d"],["dist/images/photographer/photos/Shoots/Washington/3292040250-R1-E020.jpg","0c1788f2fc484cb011394ee004c7a171"],["dist/images/photographer/rollei-35-se.webp","4f1dfd5d94d6c2ff18f46e04fc8810d2"],["dist/scripts/bundle.min.js","02f3a65e0f6ecf3fde3560feb2f42611"],["dist/scripts/lib/lib-bundle.min.js","5a318cc4588e6521b651bd9a9d1b6298"],["dist/styles/materialize.min.css","88f426904e44aa25a44ae4ba9299d8d6"],["dist/styles/style.css","ecea8ac3bc964d72431050980490680b"],["dist/stylesUncss/material-design-iconic-font.css","7e1c65185b6f4edad2d6f0a02186cbd8"],["index.html","d2cda131c4f4c06535bb89885a286a12"],["responsive-image.html","d7d1e7e13008622d1d8fe2a08763d89c"],["templates/main/about.html","b0d43adfbe25013613b12c57e2ff2647"],["templates/main/developer.html","10a6ed2f3c9b7e0da0e66019abb62d24"],["templates/main/ideas.html","a816a18694e2f27b3919894645d74977"],["templates/main/now.html","33d1b5feb3f2c87e5ad6e6e777066103"],["templates/main/photographer.html","626e16e39457d0ed9793448123b65d06"],["templates/photoshoots/japan-photoshoot.html","802d8acadd85ab10d19c23f1c1764402"],["templates/photoshoots/puerto-rico-2024-photoshoot.html","bbf017723b3fa2b6ff5840e20d19ee37"],["templates/photoshoots/puerto-rico-photoshoot.html","be037b44d306ddd80cb7b42573c248ac"],["templates/photoshoots/summer-2024-photoshoot.html","1e7a2def40b336b867e665b68a6cd47c"],["templates/photoshoots/vera-photoshoot.html","77259fd0e897fd7206ecc6e256978986"],["templates/photoshoots/washington-photoshoot.html","d3d88f482e131a17243f2ebb2fbf069e"],["templates/projects/etude.html","2b72f573eff8ea8ae77cd51deecc0e58"],["templates/projects/reponotes.html","c79f0ab59d26f1c57cdad85191413938"],["templates/projects/skillset.html","203e9381ca6caf96991207464c862ecc"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







