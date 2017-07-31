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

var precacheConfig = [["dist/images/developer/developer-header.jpeg","dbdbe547f600d77d206dfb3158874d1b"],["dist/images/developer/etude/etude-logo.png","35354c3948733ce386c53bec21873008"],["dist/images/developer/etude/etude-tree.png","1d12af47778100ae62f1f384ec371f56"],["dist/images/developer/etude/etude.jpg","8680966f25db58021ad4502d378e4449"],["dist/images/developer/etude/google-drive.png","a1ace422f861bc86c955907e22de7fb4"],["dist/images/developer/etude/index.html.png","58d466bc7e352f9cb8672b7a956f2811"],["dist/images/developer/headshot-dev.png","71bf783fe19271cf27eb6a9e312952c4"],["dist/images/developer/reponotes/github-glance.PNG","29ff2392050996cb7d39762b0bd3e6b1"],["dist/images/developer/reponotes/offline-example.PNG","3aa7f3d8e58530b30998adb6f9e744ba"],["dist/images/developer/reponotes/reponotes-example.png","997130e2f06116a30f6eb8175cc07e7b"],["dist/images/developer/reponotes/reponotes.png","b282412a86ab0adb75a4bdf9b7574287"],["dist/images/developer/skillset/fdg.PNG","554214037b5ef8fd815f704d61b909a9"],["dist/images/developer/skillset/json-resume-projects.PNG","bb943f920bf076865a461f5923ee9852"],["dist/images/developer/skillset/json-resume.PNG","f7f1892bb5c2138043b7a9bc83af8b89"],["dist/images/developer/skillset/output-example.PNG","12b28ef03c7cc4fcaebcfb2c2f707d21"],["dist/images/developer/skillset/schema.PNG","635f8eb86a6c51cf177b50542cc69662"],["dist/images/developer/skillset/skillset-example.png","a780c0a75484ebf7a559bd0dc65a3a98"],["dist/images/developer/skillset/skillset.png","2a1a09795157cba07414147ed9f8783d"],["dist/images/developer/talks/gulp-talk.PNG","913171fa091150f08760cd785b3f50b8"],["dist/images/developer/talks/superpowers-talks.PNG","879a292ab55610894431daef162fff13"],["dist/images/developer/tfstoolset/tfstoolset.png","c67298a874503aacfaa579d9d9d5e39c"],["dist/images/photographer/headshot-photo.jpg","897719537a9c872dca8b3494912ab50e"],["dist/images/photographer/photo-banner.jpg","f91482c74528fa1a5582f9afad9d03d6"],["dist/images/photographer/photos/DSC_0063-min.JPG","b353c2311045a4cb9d194c94ce0f0243"],["dist/images/photographer/photos/DSC_0072-min.JPG","1c870e11485655afa751994e8836b61d"],["dist/images/photographer/photos/DSC_0353-min.JPG","7c5208b76c150a43d6661f49aa6acbea"],["dist/images/photographer/photos/DSC_0358-min.JPG","a3eabbe845378dad8098020926a552ea"],["dist/images/photographer/photos/DSC_0453-min.JPG","2415f4c65dff6fd8eaa9d163903dc24d"],["dist/images/photographer/photos/DSC_0631.jpg","326e746f1ff66034daede811691a32ba"],["dist/images/photographer/photos/DSC_1201.jpg","e860fa645b786eda47f66a103e73ac41"],["dist/images/photographer/photos/DSC_4544-min.JPG","c05614815f33bd6c93d0df6b9993c0c6"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.png","14d21d1b483707f2fb77608219b090a2"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.png","53968b3ec2bbfaf842497b8fa72e210c"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.png","6b59640597405276ff79ca3d75b8c012"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.png","d75077956c63ebadb44364418919c503"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.png","ae2c1cd948934a7d2bd80e6e967bf49d"],["dist/images/photographer/photos/Shoots/Vera/Vera1200.jpg","ee366ff00e93ab72834534b0b4739417"],["dist/scripts/bundle.min.js","6acdc835a6740a04e5389720e16f651c"],["dist/scripts/controllerBundle.min.js","a5ce9e7692a6891bd2ded9966017ebbb"],["dist/styles/materialize.min.css","8aceb23c8f49f8dd4db5364f615b85bb"],["dist/styles/style.css","dfd3cb9e97e6a7812b8085d159e124cf"],["dist/stylesUncss/material-design-iconic-font.css","8ff42e79189e3f67c11602b92dff0c04"],["fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["gulpfile.js","cee30092604ef224b5444a32f6826693"],["index.html","8afb1e3df9ecc95feb964022a80e603f"],["responsive-image.html","fb041a891d121496d172f30bfa28f526"],["scripts/analytics.js","2d1afbdb39e21fe7a334fa530d7df3af"],["scripts/app.js","cf5603b1913f204b2eabb2eb9b714f86"],["scripts/directives/responsiveImage.js","dd1db1bae1ddd05966330bb546dc453e"],["scripts/lib/angular-ui-router.min.js","38449595f30de8f672cc13d24e0d60f9"],["scripts/lib/angular.min.js","3768a8a7901bb67b48170f360a9281ed"],["scripts/lib/jquery-2.1.1.min.js","9a094379d98c6458d480ad5a51c4aa27"],["scripts/lib/materialize.min.js","389b5deea93200c80b3bbce90708d940"],["sw-precache-config.js","51440a7b855d5dbc902d545ca8fe47e6"],["swRegister.js","c86bce6e51fe4dc38d92cf732665c9bb"],["templates/main/developer.html","2301eb7b6b409f58d6ff131ec02a63dc"],["templates/main/photographer.html","1c619fb893d0385316343797ebca1113"],["templates/photoshoots/vera-photoshoot.html","f6d35d89524c8e4ecc8b365a77a43adf"],["templates/projects/etude.html","4d42652e95f32c2e311f3729d9ebf7bc"],["templates/projects/reponotes.html","f55ad594744b2c9df8781746cded940b"],["templates/projects/skillset.html","ccd26686cb0a8fe03df04a3c3d8673f7"],["templates/projects/tfstoolset.html","b7ab1d378c6f79038214e9e5e2f1e033"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







