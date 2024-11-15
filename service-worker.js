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

var precacheConfig = [["dist/fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["dist/fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["dist/fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["dist/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["dist/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["dist/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["dist/fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["dist/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["dist/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["dist/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["dist/fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["dist/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["dist/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["dist/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["dist/fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["dist/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["dist/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["dist/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["dist/fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["dist/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["dist/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["dist/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["dist/fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["dist/images/developer/developer-header.jpeg","e2a85d0e2bc00056b5765f24697b212a"],["dist/images/developer/etude/etude-logo.png","35354c3948733ce386c53bec21873008"],["dist/images/developer/etude/etude-tree.png","1d12af47778100ae62f1f384ec371f56"],["dist/images/developer/etude/etude.jpg","94daa0c689d64bc657bb7cc325762d05"],["dist/images/developer/etude/google-drive.png","a1ace422f861bc86c955907e22de7fb4"],["dist/images/developer/etude/index.html.png","58d466bc7e352f9cb8672b7a956f2811"],["dist/images/developer/libs/asynclock/logo.png","c76a3d318d2ae77c799fb7dd65c625f8"],["dist/images/developer/libs/blockingcollectionsextensions/logo.png","c192951e8a636593c83e39193047496e"],["dist/images/developer/libs/cachelitesharp/facebook_cover_photo_2.png","d7460f0252d4a8ec6dbbb87e23fc2d18"],["dist/images/developer/libs/cachelitesharp/logo.png","f3451b68e41be9208fd9b65760797186"],["dist/images/developer/libs/cachelitesharp/pinterest_profile_image.png","2ffe127b189e191fa5be94bf24293ca1"],["dist/images/developer/libs/cachelitesharp/youtube_profile_image.png","9db77296e77fce439a508664b39e24ae"],["dist/images/developer/libs/reactcinemagraph/logo.png","49524c100a4d4c1cf06b0f74f04a32e7"],["dist/images/developer/libs/shardedcounter/logo.png","fb47ef196d2b697a1d6b04abdd030e8e"],["dist/images/developer/reponotes/github-at-a-glance.png","29ff2392050996cb7d39762b0bd3e6b1"],["dist/images/developer/reponotes/offline-example-sw.png","8e62ea2a5ee4290029b0b42d2051a5b9"],["dist/images/developer/reponotes/reponotes-example.png","f764067f1be390e76aea5e3382acbfb4"],["dist/images/developer/reponotes/reponotes-mobile.png","2364439c930ad225d073b168d704240c"],["dist/images/developer/reponotes/reponotes.png","18253b2441ff0df7a2a8b4907b7088fa"],["dist/images/developer/skillset/fdg.PNG","870819c975640cb28aa415e7916f3667"],["dist/images/developer/skillset/json-resume-projects.PNG","9579167df8eb60c98417f48dc41b1390"],["dist/images/developer/skillset/json-resume.PNG","f7f1892bb5c2138043b7a9bc83af8b89"],["dist/images/developer/skillset/output-example.PNG","12b28ef03c7cc4fcaebcfb2c2f707d21"],["dist/images/developer/skillset/schema.PNG","8ebd8ac10fc9861c1eea653de892c49b"],["dist/images/developer/skillset/skillset-example.png","a780c0a75484ebf7a559bd0dc65a3a98"],["dist/images/developer/skillset/skillset.png","5da44da11e67ced519ef1d290b1998ed"],["dist/images/developer/talks/gulp-talk.PNG","913171fa091150f08760cd785b3f50b8"],["dist/images/developer/talks/iNNOVATIONS-2018-REST-API-Update.PNG","3d98fa3175e336d0d444ec077ad82a93"],["dist/images/developer/talks/superpowers-talks.PNG","879a292ab55610894431daef162fff13"],["dist/images/developer/tfstoolset/tfstoolset.png","c72ec7203dcfeed66ff4b08c980f21f9"],["dist/images/photographer/headshot-photo.jpg","594117b808c24e90e70d882970fbd741"],["dist/images/photographer/photos/DSC_1201.jpg","b42f6e3bb5720d5fe76c381b8708ce28"],["dist/images/photographer/photos/DSC_4110.JPG","b182790aa25e1016a8588c17cf3dec22"],["dist/images/photographer/photos/DSC_4516.JPG","80945c49a226240ce7c452e73173b963"],["dist/images/photographer/photos/DSC_4705.JPG","9ac5c3c772d237000334d9803e3d6820"],["dist/images/photographer/photos/Shoots/Japan/000070700010.jpg","f12e892cf1ffb91a258d6035e945ec14"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5532041507-R1-E012.jpg","2431e40bf2c0c1e8de26647de6cf3dc5"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5532041507-R1-E034.jpg","166317142cd3c2d0cef9bb945c42b809"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5575041509-R1-E003.jpg","e3d21108143e517aa65d2e201edc0e53"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5575041509-R1-E015.jpg","c8b5082e57a6f918b872256ceabb2f29"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5608041502-R1-E006.jpg","7cda8a26c5d4eef3d968285aa4d8b0cd"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5608041502-R1-E028.jpg","b550dd5bd9eab2cc650da34a4a9c4de5"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5609041503-R1-040-18A.jpg","335f609a6237766a258a5b9773a01547"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5609041503-R1-056-26A.jpg","7f09ed1ef604068aa6512e8875118b83"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5611041505-R1-022-9A.jpg","5ca48c19bd43bad7cd87b71cb1ba6a9b"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5611041505-R1-028-12A.jpg","288ca407218d47ee9de6b8e2a4c4f257"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5612041506-R1-E005.jpg","96558fa8c52a44747f91e46473ad22b6"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5612041506-R1-E010.jpg","53f8f693b3cc7f6a2640b2b7154486fc"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350022.jpg","bb58c4d1bb617366adef4d7621ae93d4"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350047.jpg","02be4b6398a4a6a973c500eafb3ad05b"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350065.jpg","d1d43588981c9622e3904e8cc4eee502"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350073.jpg","24da3dab48f08b635cf8a38b3cf0bf98"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E007.jpg","73cad5bd81db8a6ddf12267561e8eae7"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E010.jpg","d2a24fd05a0e00b20c664e2d4b04cfcb"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E012.jpg","78a91eb13c966ccc58e781ec446a87be"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E014.jpg","9df8458a64703b2f6781afc3b42395f4"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E019.jpg","ae53a42f9dc1ab25ef4f2289a2f82956"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E021.jpg","7febb95f848d7c010aee5f8218eeb082"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E029.jpg","d312a71b35e33a2b40d2b92ffc2c6849"],["dist/images/photographer/photos/Shoots/Summer 2024/0000886_0000886-R1-009-3.jpg","ba92001548405c40175deb784f6e3ad5"],["dist/images/photographer/photos/Shoots/Summer 2024/0000886_0000886-R1-011-4.jpg","86f32b61728e149072c2f041996573b7"],["dist/images/photographer/photos/Shoots/Summer 2024/0000887_0000887-R1-036-16A.jpg","d61dc9e018f78eb7e267c15c8c1219f8"],["dist/images/photographer/photos/Shoots/Summer 2024/0000887_0000887-R1-060-28A.jpg","3810553c5f92c998277d47a0fc15f73f"],["dist/images/photographer/photos/Shoots/Summer 2024/2951003191-R1-044-20A.jpg","8cdb9d592efc857137d4374ae91d2469"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E001.jpg","43ab85422a6e2a1746eb5c73f7269c4c"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E004.jpg","56c1c16396025f2b6bdb188da4342777"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E005.jpg","7c84ef0c8e89f33c109954c7cde858a7"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E006.jpg","63e95f74d5b7132c30f36cde6c845c56"],["dist/images/photographer/photos/Shoots/Summer 2024/C27BBD23-DA7A-4C4C-B790-7B31C29D8C11_1_201_a.jpeg","8ee0c29f659b6077361c57739f04d594"],["dist/images/photographer/photos/Shoots/Summer 2024/CC0830EC-601F-4399-AD7F-FB71A6F27F17_1_201_a.jpeg","18403bd4277cb7ec1d1627c7eb10fb5a"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.jpg","2c1b18673e0ad6eac4294a6578339dab"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.png","6f3a8ab5d7813a165b52a9262dc36a33"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.jpg","ec4edcb2958dbc277d014d05f2ec7764"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.png","3b49daf1c5fa08744c2234bb494f4461"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.jpg","c506bc81f698f92c7915381aeb577287"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.png","142d64919565f458e21878b9d9313bc7"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.jpg","3a1acd9abda5ea1672e46f50d0a12901"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.png","d0577526751d57ecd4cd69e567ed21b2"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038 - Copy.jpg","b6234d9458b77fb78228643a17cde301"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.jpg","a2ec231b0dc35816797ba77ac8ac9218"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.png","d1ef165795c7c27414bb33a31fbd9b60"],["dist/images/photographer/photos/Shoots/Vera/Vera1200.jpg","54fbebdfe06b404b93e565d6d0973480"],["dist/images/photographer/photos/Shoots/Washington/3161040252-R1-E002.jpg","32a89a6d46674c1d9e27566355c572b7"],["dist/images/photographer/photos/Shoots/Washington/3161040252-R1-E025.jpg","4ef7438e00423162d77bd206c652a9f1"],["dist/images/photographer/photos/Shoots/Washington/3169040253-R1-E030.jpg","9dee1418058b9cb1b36531d3fa8004cc"],["dist/images/photographer/photos/Shoots/Washington/3169040253-R1-E037.jpg","d66c1f05fc536568883548cd77fabb2c"],["dist/images/photographer/photos/Shoots/Washington/3225040254-R1-E006.jpg","67681528584ca8603dc0979964a501a8"],["dist/images/photographer/photos/Shoots/Washington/3225040254-R1-E027.jpg","736a53d54fe923ea0a20e745c0f41b4b"],["dist/images/photographer/photos/Shoots/Washington/3292040250-R1-E018.jpg","1958869eb9a5164b63678b8e7f3313e3"],["dist/images/photographer/photos/Shoots/Washington/3292040250-R1-E020.jpg","6fcfcbff32c95ac0225fac4a07142090"],["dist/images/photographer/rollei-35-se.webp","0bfb7b96324c8d796aaa6327448306ad"],["dist/scripts/bundle.min.js","02f3a65e0f6ecf3fde3560feb2f42611"],["dist/scripts/lib/lib-bundle.min.js","5a318cc4588e6521b651bd9a9d1b6298"],["dist/styles/materialize.min.css","88f426904e44aa25a44ae4ba9299d8d6"],["dist/styles/style.css","ecea8ac3bc964d72431050980490680b"],["dist/stylesUncss/material-design-iconic-font.css","7e1c65185b6f4edad2d6f0a02186cbd8"],["index.html","3023c037574ee13490e9b91f5f5de762"],["responsive-image.html","d7d1e7e13008622d1d8fe2a08763d89c"],["templates/main/about.html","b0d43adfbe25013613b12c57e2ff2647"],["templates/main/developer.html","10a6ed2f3c9b7e0da0e66019abb62d24"],["templates/main/ideas.html","a816a18694e2f27b3919894645d74977"],["templates/main/now.html","33d1b5feb3f2c87e5ad6e6e777066103"],["templates/main/photographer.html","626e16e39457d0ed9793448123b65d06"],["templates/photoshoots/japan-photoshoot.html","802d8acadd85ab10d19c23f1c1764402"],["templates/photoshoots/puerto-rico-2024-photoshoot.html","bbf017723b3fa2b6ff5840e20d19ee37"],["templates/photoshoots/puerto-rico-photoshoot.html","be037b44d306ddd80cb7b42573c248ac"],["templates/photoshoots/summer-2024-photoshoot.html","1e7a2def40b336b867e665b68a6cd47c"],["templates/photoshoots/vera-photoshoot.html","77259fd0e897fd7206ecc6e256978986"],["templates/photoshoots/washington-photoshoot.html","d3d88f482e131a17243f2ebb2fbf069e"],["templates/projects/etude.html","2b72f573eff8ea8ae77cd51deecc0e58"],["templates/projects/reponotes.html","c79f0ab59d26f1c57cdad85191413938"],["templates/projects/skillset.html","203e9381ca6caf96991207464c862ecc"]];
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







