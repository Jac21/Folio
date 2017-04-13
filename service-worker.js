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

var precacheConfig = [["dist/images/developer/developer-header.jpeg","a3e67a33d1fd88b155fc8b2bf882fa2d"],["dist/images/developer/etude/etude-logo.png","7a6910c9f7160131b5f6592e2489ed01"],["dist/images/developer/etude/etude-tree.png","32e563a5852df07bde46a2309f7da696"],["dist/images/developer/etude/etude.jpg","d205bab2abf230f963698cf3d662374a"],["dist/images/developer/etude/google-drive.png","aaf7ff305c6f938600107ec4d4a620d9"],["dist/images/developer/etude/index.html.png","660c4484ae7f36f034d294e5f0f96610"],["dist/images/developer/headshot-dev.png","71bf783fe19271cf27eb6a9e312952c4"],["dist/images/developer/reponotes/github-glance.PNG","f98cd34c61c660cf5358709181476b54"],["dist/images/developer/reponotes/offline-example.PNG","3ab4043b8fa6d75cb09bc2d6b8c2bd4c"],["dist/images/developer/reponotes/reponotes-example.png","68f89280ae33da63d111c8d0c7f2e6f3"],["dist/images/developer/reponotes/reponotes.png","c26d71d4b49167d14aa741e4fcbc77dd"],["dist/images/developer/skillset/fdg.PNG","0cbd6ad35bdf21585098805d565a820e"],["dist/images/developer/skillset/json-resume-projects.PNG","8c377907db9feea4fcb4b7a2bd0ff0ab"],["dist/images/developer/skillset/json-resume.PNG","242a45cca74d2b0cd1595e71fc396441"],["dist/images/developer/skillset/output-example.PNG","d3cab17220bcdd902e33e448639a173b"],["dist/images/developer/skillset/schema.PNG","623b7494481efd06c6092567f351a465"],["dist/images/developer/skillset/skillset-example.png","fa427059c8398cdd0a1dbd84e46112d1"],["dist/images/developer/skillset/skillset.png","e040ba85a5301431c4f9c78b09e96d25"],["dist/images/developer/talks/gulp-talk.PNG","070e6ba7831ce477c34191a1a0537ff0"],["dist/images/developer/talks/superpowers-talks.PNG","90bf6ed39d4b202c3b51ba6bb9b0e5f9"],["dist/images/developer/tfstoolset/tfstoolset.png","c67298a874503aacfaa579d9d9d5e39c"],["dist/images/photographer/headshot-photo.jpg","0a58b6698397b2afcb03af2eab37c021"],["dist/images/photographer/photo-banner-min_redux.jpg","b881a9d73013f8075375337d85945df1"],["dist/images/photographer/photos/DSC_0063-min.JPG","2de415c2c68303e9e1fb7ffbd777e17c"],["dist/images/photographer/photos/DSC_0072-min.JPG","1c870e11485655afa751994e8836b61d"],["dist/images/photographer/photos/DSC_0353-min.JPG","b1d002fa4aee08be351fa1e9a806d45f"],["dist/images/photographer/photos/DSC_0358-min.JPG","446d08f4ee177eec138624a25a29dfca"],["dist/images/photographer/photos/DSC_0453-min.JPG","35a545fa24fdcfce3add95f55658eb70"],["dist/images/photographer/photos/DSC_0631.jpg","d5c0e8d92261094e257e8bc31785a7ed"],["dist/images/photographer/photos/DSC_1201.jpg","0a916bf44daf8dd578b34b8091bc0f0d"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.png","6e399fbccecb38ac55b6795ee0316bc3"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.png","62b9fc6a3cd80075a2688732939bfd14"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.png","1eb8a158f2c1347885b795d38fb6fcf3"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.png","92d9b2f46bb9209071f41bb7cd9657d2"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.png","45c0f6a8203fc59a9917e2e3a4b8f882"],["dist/images/photographer/photos/Shoots/Vera/Vera1200.jpg","935a61415742cf7fe26d2d1687ab094f"],["dist/scripts/bundle.min.js","f91d62a1a8a3b1eb10c5be2c874122b9"],["dist/scripts/controllerBundle.min.js","876055e8c8d8d860d97d3e54915fe44a"],["dist/styles/materialize.min.css","8aceb23c8f49f8dd4db5364f615b85bb"],["dist/styles/style.css","293b41aacd57d8bb6bfd94a79c0e7e5c"],["dist/stylesUncss/material-design-iconic-font.css","8ff42e79189e3f67c11602b92dff0c04"],["fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["gulpfile.js","8d2843d2d7183808c9b71060c58a22e9"],["index.html","6c23067fb6ab8e6df3d59110cd540f30"],["responsive-image.html","fb041a891d121496d172f30bfa28f526"],["scripts/analytics.js","2d1afbdb39e21fe7a334fa530d7df3af"],["scripts/app.js","5bdde5a88072275c138f791d3e4fc1c0"],["scripts/directives/responsiveImage.js","dd1db1bae1ddd05966330bb546dc453e"],["scripts/lib/angular-animate.min.js","aaf1ba9258e668a19657f3abdfc34934"],["scripts/lib/angular-ui-router.min.js","2958d12f271d61207619f6328eac1d98"],["scripts/lib/angular.min.js","f363ad9d29fbebc0f5f4c96a23e577cd"],["scripts/lib/jquery-2.1.1.min.js","9a094379d98c6458d480ad5a51c4aa27"],["scripts/lib/materialize.min.js","389b5deea93200c80b3bbce90708d940"],["sw-precache-config.js","51440a7b855d5dbc902d545ca8fe47e6"],["swRegister.js","c86bce6e51fe4dc38d92cf732665c9bb"],["templates/main/developer.html","52c7e32b76724b9b9d9ac591f858bdc6"],["templates/main/photographer.html","e64961cf8cea829a05e6ec0017502dd7"],["templates/photoshoots/vera-photoshoot.html","63675551b6531b957b0e4bddd42bc97c"],["templates/projects/etude.html","4d42652e95f32c2e311f3729d9ebf7bc"],["templates/projects/reponotes.html","f55ad594744b2c9df8781746cded940b"],["templates/projects/skillset.html","ccd26686cb0a8fe03df04a3c3d8673f7"],["templates/projects/tfstoolset.html","b7ab1d378c6f79038214e9e5e2f1e033"]];
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

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
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







