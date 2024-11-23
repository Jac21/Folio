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

var precacheConfig = [["dist/fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["dist/fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["dist/fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["dist/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["dist/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["dist/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["dist/fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["dist/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["dist/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["dist/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["dist/fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["dist/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["dist/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["dist/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["dist/fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["dist/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["dist/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["dist/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["dist/fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["dist/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["dist/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["dist/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["dist/fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["dist/images/developer/developer-header.jpeg","58be99a7ce9ecd0d1ff006a23b05bc85"],["dist/images/developer/etude/etude-logo.png","35354c3948733ce386c53bec21873008"],["dist/images/developer/etude/etude-tree.png","1d12af47778100ae62f1f384ec371f56"],["dist/images/developer/etude/etude.jpg","92ec302ad13515ff68497c7234c5a40c"],["dist/images/developer/etude/google-drive.png","a1ace422f861bc86c955907e22de7fb4"],["dist/images/developer/etude/index.html.png","58d466bc7e352f9cb8672b7a956f2811"],["dist/images/developer/libs/asynclock/logo.png","c76a3d318d2ae77c799fb7dd65c625f8"],["dist/images/developer/libs/blockingcollectionsextensions/logo.png","c192951e8a636593c83e39193047496e"],["dist/images/developer/libs/cachelitesharp/facebook_cover_photo_2.png","d7460f0252d4a8ec6dbbb87e23fc2d18"],["dist/images/developer/libs/cachelitesharp/logo.png","f3451b68e41be9208fd9b65760797186"],["dist/images/developer/libs/cachelitesharp/pinterest_profile_image.png","2ffe127b189e191fa5be94bf24293ca1"],["dist/images/developer/libs/cachelitesharp/youtube_profile_image.png","9db77296e77fce439a508664b39e24ae"],["dist/images/developer/libs/reactcinemagraph/logo.png","49524c100a4d4c1cf06b0f74f04a32e7"],["dist/images/developer/libs/shardedcounter/logo.png","fb47ef196d2b697a1d6b04abdd030e8e"],["dist/images/developer/reponotes/github-at-a-glance.png","29ff2392050996cb7d39762b0bd3e6b1"],["dist/images/developer/reponotes/offline-example-sw.png","8e62ea2a5ee4290029b0b42d2051a5b9"],["dist/images/developer/reponotes/reponotes-example.png","f764067f1be390e76aea5e3382acbfb4"],["dist/images/developer/reponotes/reponotes-mobile.png","2364439c930ad225d073b168d704240c"],["dist/images/developer/reponotes/reponotes.png","18253b2441ff0df7a2a8b4907b7088fa"],["dist/images/developer/skillset/fdg.PNG","870819c975640cb28aa415e7916f3667"],["dist/images/developer/skillset/json-resume-projects.PNG","9579167df8eb60c98417f48dc41b1390"],["dist/images/developer/skillset/json-resume.PNG","f7f1892bb5c2138043b7a9bc83af8b89"],["dist/images/developer/skillset/output-example.PNG","12b28ef03c7cc4fcaebcfb2c2f707d21"],["dist/images/developer/skillset/schema.PNG","8ebd8ac10fc9861c1eea653de892c49b"],["dist/images/developer/skillset/skillset-example.png","a780c0a75484ebf7a559bd0dc65a3a98"],["dist/images/developer/skillset/skillset.png","5da44da11e67ced519ef1d290b1998ed"],["dist/images/developer/talks/gulp-talk.PNG","913171fa091150f08760cd785b3f50b8"],["dist/images/developer/talks/iNNOVATIONS-2018-REST-API-Update.PNG","3d98fa3175e336d0d444ec077ad82a93"],["dist/images/developer/talks/superpowers-talks.PNG","879a292ab55610894431daef162fff13"],["dist/images/developer/tfstoolset/tfstoolset.png","c72ec7203dcfeed66ff4b08c980f21f9"],["dist/images/photographer/headshot-photo.jpg","224e3834fbda6ba6619653d371ab1a15"],["dist/images/photographer/photos/DSC_1201.jpg","b9b0fdb25b827d9716136cf113a9acda"],["dist/images/photographer/photos/DSC_204160025.JPG","4268a2c88f66aaabe78fdd7bcb42ba46"],["dist/images/photographer/photos/DSC_4110.JPG","3e55f1e56196b13388f7b26e6a86c2c0"],["dist/images/photographer/photos/DSC_4516.JPG","fdc308683f380e3f347e019fc65197a8"],["dist/images/photographer/photos/DSC_4705.JPG","49c8c496d2921563659bb5b96bff6068"],["dist/images/photographer/photos/DSC_63960011.JPG","0b757f1d1fd3d92f9a5b12d75bfe5757"],["dist/images/photographer/photos/Shoots/Japan/000070700009.jpg","ce95a6a90ef7c14e641eed75e96ddfa7"],["dist/images/photographer/photos/Shoots/Japan/000070700010.jpg","a9da09b3ddf0b5098f28cc45304110cf"],["dist/images/photographer/photos/Shoots/Japan/000070710015.jpg","317c518ebbb1b5ef06ef37fa04fed257"],["dist/images/photographer/photos/Shoots/Japan/000070710021.jpg","de73926043a8f9fd89dd68d8100fe158"],["dist/images/photographer/photos/Shoots/Japan/000070710022.jpg","822a6c3d5d806066d448b481c8806f00"],["dist/images/photographer/photos/Shoots/Japan/000070720025.jpg","1eede34ffee0fcbb69908e49bed5b8cd"],["dist/images/photographer/photos/Shoots/Japan/000070720026.jpg","489899f9ed94b9e78ea8c8e73264db02"],["dist/images/photographer/photos/Shoots/Japan/000070740027.jpg","b6d599fd82333e1789a4a29598e3ce71"],["dist/images/photographer/photos/Shoots/Japan/000070740031.jpg","d5b716a3794c171ee8192cd37bfdd5e5"],["dist/images/photographer/photos/Shoots/Japan/000070750002.jpg","e8a174156226e04fc2f925605b568afe"],["dist/images/photographer/photos/Shoots/Japan/000070750004.jpg","1dd8e379ee797524c4fd23ec951e9e77"],["dist/images/photographer/photos/Shoots/Japan/000070750028.jpg","684f9dbc4175892483aa94d7f079a04d"],["dist/images/photographer/photos/Shoots/Japan/000070750031.jpg","84a24d84b4908c2a64ae3b6f8744c4ed"],["dist/images/photographer/photos/Shoots/Japan/000070750033.jpg","ac59147abe042fa2769bbf139469bd1b"],["dist/images/photographer/photos/Shoots/Japan/000070750034.jpg","a3747aec79285f7702baa62ad04a4710"],["dist/images/photographer/photos/Shoots/Japan/000070760008.jpg","0099bf0969950c93f9f698722d05a474"],["dist/images/photographer/photos/Shoots/Japan/000070760026.jpg","58d5884334a50ab35df14fd9c5e67373"],["dist/images/photographer/photos/Shoots/Japan/000070760030.jpg","db7698bf0696059bdd4c88e6f85a2afe"],["dist/images/photographer/photos/Shoots/Japan/000070770027.jpg","8b677d9f23929b3091af0ede699d8b30"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5532041507-R1-E012.jpg","7ccee84fa1af8d88bd9276c567ab95cb"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5532041507-R1-E034.jpg","dbf727871a1ea152dc5b02a0ff0b8fbf"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5575041509-R1-E003.jpg","c1c7c58815caf292bbc760348a7b50ca"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5575041509-R1-E015.jpg","a8d2eaf3c500a83fe9c84bf871134e4c"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5608041502-R1-E006.jpg","6e1d58046064beda22f3cf699d00050e"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5608041502-R1-E028.jpg","b2c5daf0ab0d9d75387da30402235fe6"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5609041503-R1-040-18A.jpg","a3077eccc082d6e76a4ec952d7c6e0b0"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5609041503-R1-056-26A.jpg","d9a9f737cbd709afa364ad457495f1bd"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5611041505-R1-022-9A.jpg","469be1ff7370ffa0cfa9081b1b80df9c"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5611041505-R1-028-12A.jpg","f61013a2bb28e5ccc5472685a069b6b5"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5612041506-R1-E005.jpg","a8232b134e3861b44795497488b4580f"],["dist/images/photographer/photos/Shoots/Puerto Rico 2024/5612041506-R1-E010.jpg","8f5afc894f684341c66dc764dbb42187"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350022.jpg","7376865777d67bab14532ac8fe52733b"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350047.jpg","249bcf897b410788b111d355a4604096"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350065.jpg","f5520153348b5b41ec0881375970d75c"],["dist/images/photographer/photos/Shoots/Puerto Rico/000295350073.jpg","87b9451e044abee2f93e2e42272442df"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E007.jpg","ba178f81b4bdbd39f57762f706184f34"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E010.jpg","eab478d17cba1ec0c23945cd007abd0f"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E012.jpg","0f6893eb4098798bc214b76819ddf293"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E014.jpg","15b921b0b7b24a70ad31c73cbe31dd8c"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E019.jpg","62d72194f96cdde7cfdcc611ef270782"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E021.jpg","c90a740d1ea023e771da86459d8527a3"],["dist/images/photographer/photos/Shoots/Puerto Rico/0009797_0009797-R1-E029.jpg","081e74e0b58aefa8c9741ac30b114918"],["dist/images/photographer/photos/Shoots/Summer 2024/0000886_0000886-R1-009-3.jpg","7446645ab90fc6531e155f136c1c569e"],["dist/images/photographer/photos/Shoots/Summer 2024/0000886_0000886-R1-011-4.jpg","35769cbe9921c3885bb46caf900a5ece"],["dist/images/photographer/photos/Shoots/Summer 2024/0000887_0000887-R1-036-16A.jpg","8cf44383b9863178b6ea73c752452f71"],["dist/images/photographer/photos/Shoots/Summer 2024/0000887_0000887-R1-060-28A.jpg","c37ef05159364774bd8e5d0b2f7ebfeb"],["dist/images/photographer/photos/Shoots/Summer 2024/2951003191-R1-044-20A.jpg","62818359a46069b7fa3ad0b276e23753"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E001.jpg","bad277af284ef40bb2f54d7350f75426"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E004.jpg","3c4d41f1b0a11fd28435447843118577"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E005.jpg","01bb06a69d63260f48b48eb725410424"],["dist/images/photographer/photos/Shoots/Summer 2024/9154043622-R1-E006.jpg","f5b657761da8eb993bc4295d9ead70c4"],["dist/images/photographer/photos/Shoots/Summer 2024/C27BBD23-DA7A-4C4C-B790-7B31C29D8C11_1_201_a.jpeg","b52679a11e0f99692c829a860ec894da"],["dist/images/photographer/photos/Shoots/Summer 2024/CC0830EC-601F-4399-AD7F-FB71A6F27F17_1_201_a.jpeg","bb9aa374e59f1d193412a7abb86c5333"],["dist/images/photographer/photos/Shoots/Taiwan 2024/AMSEE6168.png","0f7962d5d7a5bd7e2e9f189e32d884ab"],["dist/images/photographer/photos/Shoots/Taiwan 2024/BEHBE8326.png","1d75513cb6bdac64ff96ff9751896f44"],["dist/images/photographer/photos/Shoots/Taiwan 2024/BFUNE1748.png","0650d64832b374245786a5c5b4286b3e"],["dist/images/photographer/photos/Shoots/Taiwan 2024/EQYGE9476.png","eac000a1a1409c106ded8cd49bbf77e0"],["dist/images/photographer/photos/Shoots/Taiwan 2024/FUTHE2223.png","1621e383b471d915f1f3c1eae3092289"],["dist/images/photographer/photos/Shoots/Taiwan 2024/ICNSE5604.png","e47c851fb76bc5f21651bbb598cb5a65"],["dist/images/photographer/photos/Shoots/Taiwan 2024/METEE2949.png","78e225fdf1e2ba73da3c9d273f54f077"],["dist/images/photographer/photos/Shoots/Taiwan 2024/MUUDE4708.png","db8b05b89a9c9230770bf2a73262fbc4"],["dist/images/photographer/photos/Shoots/Taiwan 2024/NKQNE6037.png","f42c8202773f681c0b96307a2c68e34d"],["dist/images/photographer/photos/Shoots/Taiwan 2024/NSEHE5936.png","74ae480e8895e5d15e66de877db3ee2e"],["dist/images/photographer/photos/Shoots/Taiwan 2024/WWNRE9164.png","8075e23050fd542d9434429eeef2056e"],["dist/images/photographer/photos/Shoots/Taiwan 2024/WXUVE0505.png","d0e72d96db35c946f6026409b4fe25a2"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.jpg","6d7279751ffff5cc98c4318e9f38ea32"],["dist/images/photographer/photos/Shoots/Vera/DSC_1958.png","6f3a8ab5d7813a165b52a9262dc36a33"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.jpg","4c191d001beb5a0630caf5dec8049fa2"],["dist/images/photographer/photos/Shoots/Vera/DSC_1999.png","3b49daf1c5fa08744c2234bb494f4461"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.jpg","9643ae2ea87ef87f2c722cbc9ff71b86"],["dist/images/photographer/photos/Shoots/Vera/DSC_2013.png","142d64919565f458e21878b9d9313bc7"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.jpg","be878d110d06a849a64747593938b01d"],["dist/images/photographer/photos/Shoots/Vera/DSC_2016.png","d0577526751d57ecd4cd69e567ed21b2"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038 - Copy.jpg","b6234d9458b77fb78228643a17cde301"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.jpg","cf7e1d2c0565d91c2cc11f70a3a8b30d"],["dist/images/photographer/photos/Shoots/Vera/DSC_2038.png","d1ef165795c7c27414bb33a31fbd9b60"],["dist/images/photographer/photos/Shoots/Vera/Vera1200.jpg","05679675ae6b6bfaba8bb4cfb356fea9"],["dist/images/photographer/photos/Shoots/Washington/3161040252-R1-E002.jpg","380ed7a0e99f972fca3bc30cf707d22e"],["dist/images/photographer/photos/Shoots/Washington/3161040252-R1-E025.jpg","aeb91dbe639e04f6c568f1ce8232cd38"],["dist/images/photographer/photos/Shoots/Washington/3169040253-R1-E030.jpg","c696e123018352f002c29d1a930c6ddb"],["dist/images/photographer/photos/Shoots/Washington/3169040253-R1-E037.jpg","61c6a2248c735bed8b9678657e93792c"],["dist/images/photographer/photos/Shoots/Washington/3225040254-R1-E006.jpg","74ab278e874e66d6afba091524b1acaa"],["dist/images/photographer/photos/Shoots/Washington/3225040254-R1-E027.jpg","bb7415807f7df50c1d0ca3555f021826"],["dist/images/photographer/photos/Shoots/Washington/3292040250-R1-E018.jpg","350f88b4ac94928842b2889bb352d94d"],["dist/images/photographer/photos/Shoots/Washington/3292040250-R1-E020.jpg","9ab8829c4df0f440c4be764f1880c1f1"],["dist/images/photographer/rollei-35-se.webp","0bfb7b96324c8d796aaa6327448306ad"],["dist/scripts/bundle.min.js","b8a1db547596d14d68edc28acbdbc706"],["dist/scripts/lib/lib-bundle.min.js","5a318cc4588e6521b651bd9a9d1b6298"],["dist/styles/materialize.min.css","88f426904e44aa25a44ae4ba9299d8d6"],["dist/styles/style.css","ecea8ac3bc964d72431050980490680b"],["dist/stylesUncss/material-design-iconic-font.css","7e1c65185b6f4edad2d6f0a02186cbd8"],["index.html","3023c037574ee13490e9b91f5f5de762"],["responsive-image.html","d7d1e7e13008622d1d8fe2a08763d89c"],["templates/main/about.html","b0d43adfbe25013613b12c57e2ff2647"],["templates/main/developer.html","10a6ed2f3c9b7e0da0e66019abb62d24"],["templates/main/ideas.html","a816a18694e2f27b3919894645d74977"],["templates/main/now.html","33d1b5feb3f2c87e5ad6e6e777066103"],["templates/main/photographer.html","4071e25acfe4672ac1ab6161f87b5d67"],["templates/photoshoots/japan-photoshoot.html","802d8acadd85ab10d19c23f1c1764402"],["templates/photoshoots/puerto-rico-2024-photoshoot.html","bbf017723b3fa2b6ff5840e20d19ee37"],["templates/photoshoots/puerto-rico-photoshoot.html","be037b44d306ddd80cb7b42573c248ac"],["templates/photoshoots/summer-2024-photoshoot.html","1e7a2def40b336b867e665b68a6cd47c"],["templates/photoshoots/taiwan-2024-photoshoot.html","5151799cdf9760e118c8c01cb0e7f3ab"],["templates/photoshoots/vera-photoshoot.html","77259fd0e897fd7206ecc6e256978986"],["templates/photoshoots/washington-photoshoot.html","d3d88f482e131a17243f2ebb2fbf069e"],["templates/projects/etude.html","2b72f573eff8ea8ae77cd51deecc0e58"],["templates/projects/reponotes.html","c79f0ab59d26f1c57cdad85191413938"],["templates/projects/skillset.html","203e9381ca6caf96991207464c862ecc"]];
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







