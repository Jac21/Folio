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

var precacheConfig = [["dist/images/developer/developer-header.jpeg","7547cf65a0cc62cb9e0436459c5169c5"],["dist/images/developer/etude/etude-logo.png","35354c3948733ce386c53bec21873008"],["dist/images/developer/etude/etude-tree.png","1d12af47778100ae62f1f384ec371f56"],["dist/images/developer/etude/etude.jpg","94daa0c689d64bc657bb7cc325762d05"],["dist/images/developer/etude/google-drive.png","a1ace422f861bc86c955907e22de7fb4"],["dist/images/developer/etude/index.html.png","58d466bc7e352f9cb8672b7a956f2811"],["dist/images/developer/headshot-dev.png","71bf783fe19271cf27eb6a9e312952c4"],["dist/images/developer/og-developer-header.jpeg","dbdbe547f600d77d206dfb3158874d1b"],["dist/images/developer/reponotes/github-glance.PNG","29ff2392050996cb7d39762b0bd3e6b1"],["dist/images/developer/reponotes/offline-example.PNG","26c85d823d09a1dcc9fe714bb7ee424a"],["dist/images/developer/reponotes/reponotes-example.png","f331a90474238654efb170ffa7cb9ad7"],["dist/images/developer/reponotes/reponotes.png","b4997ce56afae5dfbf8b4265fa170eee"],["dist/images/developer/skillset/fdg.PNG","870819c975640cb28aa415e7916f3667"],["dist/images/developer/skillset/json-resume-projects.PNG","9579167df8eb60c98417f48dc41b1390"],["dist/images/developer/skillset/json-resume.PNG","f7f1892bb5c2138043b7a9bc83af8b89"],["dist/images/developer/skillset/output-example.PNG","12b28ef03c7cc4fcaebcfb2c2f707d21"],["dist/images/developer/skillset/schema.PNG","8ebd8ac10fc9861c1eea653de892c49b"],["dist/images/developer/skillset/skillset-example.png","a780c0a75484ebf7a559bd0dc65a3a98"],["dist/images/developer/skillset/skillset.png","5da44da11e67ced519ef1d290b1998ed"],["dist/images/developer/talks/gulp-talk.PNG","913171fa091150f08760cd785b3f50b8"],["dist/images/developer/talks/superpowers-talks.PNG","879a292ab55610894431daef162fff13"],["dist/images/developer/tfstoolset/tfstoolset.png","c72ec7203dcfeed66ff4b08c980f21f9"],["dist/images/photographer/headshot-photo.jpg","96ac2b28ee32531e117ab06bad44e4d1"],["dist/images/photographer/photo-banner.jpg","15becdfb85b91363eb637e315feca38d"],["dist/images/photographer/photos/DSC_0063.JPG","6949844dc2a65910611414eabef49a51"],["dist/images/photographer/photos/DSC_0358.JPG","97b84311e7622701fdcdc384056ba122"],["dist/images/photographer/photos/DSC_0453.JPG","a17382ae3f8548176e3053df9b32f436"],["dist/images/photographer/photos/DSC_0631.jpg","a0f3033733f62cf141049d74c04dfa70"],["dist/images/photographer/photos/DSC_1201.jpg","2e1bc36e9fcb966dd111df48a8d16e47"],["dist/images/photographer/photos/DSC_4544.JPG","8ca47cc5bf00315b4c4ad386a20840eb"],["dist/images/photographer/photos/Shoots/DSC_4544.JPG","c05614815f33bd6c93d0df6b9993c0c6"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.png","6f3a8ab5d7813a165b52a9262dc36a33"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.png","3b49daf1c5fa08744c2234bb494f4461"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.png","142d64919565f458e21878b9d9313bc7"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.png","d0577526751d57ecd4cd69e567ed21b2"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.png","d1ef165795c7c27414bb33a31fbd9b60"],["dist/images/photographer/photos/Shoots/Vera/Vera1200.jpg","9ebe83d82ab14fc8f179a90155e16b67"],["dist/scripts/bundle.min.js","cd746801a4bbee1ddcf660be176361cf"],["dist/scripts/controllerBundle.min.js","e41a1609bc2ee42e5f5cb2d45d767fac"],["dist/styles/materialize.min.css","8aceb23c8f49f8dd4db5364f615b85bb"],["dist/styles/style.css","be6fb6eb51c4f01a9e2c3e5cc9eb45be"],["dist/stylesUncss/material-design-iconic-font.css","8ff42e79189e3f67c11602b92dff0c04"],["fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["gulpfile.js","9a252bb69dba4730230f3bb14d9dcbbb"],["index.html","515167504c6df0f45779ae75c600f65b"],["responsive-image.html","fb041a891d121496d172f30bfa28f526"],["scripts/analytics.js","3d79a161398bcb52765b49a6b93dc8d0"],["scripts/app.js","405a05e61046e10a74891c16cf642d76"],["scripts/directives/responsiveImage.js","6404441c7142220ff3b38fa9679791f2"],["scripts/lib/angular-ui-router.min.js","4504acdaacc53c017b66cc2416afc84e"],["scripts/lib/angular.min.js","be6af23e2a716c006da75d0291784254"],["scripts/lib/jquery-2.1.1.min.js","9a094379d98c6458d480ad5a51c4aa27"],["scripts/lib/materialize.min.js","389b5deea93200c80b3bbce90708d940"],["sw-precache-config.js","51440a7b855d5dbc902d545ca8fe47e6"],["templates/main/developer.html","8b76971ae3b947424af8c278ce9022b7"],["templates/main/photographer.html","5db46e571c3e4ca14be682fc67670134"],["templates/photoshoots/vera-photoshoot.html","3f130c797a150b85096522730441bd21"],["templates/projects/etude.html","7f0fe3fd0d73754adca164065d7efd3e"],["templates/projects/reponotes.html","7b3a86f6dd01dd78e9cc6adff5ba36b9"],["templates/projects/skillset.html","3743211e26d1fa7a217accf6b9b1082b"],["templates/projects/tfstoolset.html","ae3087bf009f08dbcd2916c20d0afcbd"]];
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







