'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0d8bde2189ad72ea10b196dbd9c3b6f1",
"assets/AssetManifest.bin.json": "c5bdb832daf1f597c0019ca237ac3f41",
"assets/AssetManifest.json": "a720bc6844921f1c6070ddf15685716a",
"assets/assets/images/avatar.png": "354ece103ff01591b00617361dca175c",
"assets/assets/images/Background--.jpg": "2e442df5fd0425f4926972704eb36a19",
"assets/assets/images/Background-legacy.jpg": "3b7159f34feccb96311a0f73db31e796",
"assets/assets/images/Background.jpg": "40e2ee10e07574ff6fc0002407e00344",
"assets/assets/images/complete.png": "e3cca0e909b51420ea31319a1ad6ff54",
"assets/assets/images/Foreground-legacy.jpg": "50d626d106394a1a4eb00e787acaed5c",
"assets/assets/images/Foreground.jpg": "ff228f0ef19df0719fa2b54f9dcc8fbd",
"assets/assets/images/fragment1.png": "8d27e1116bd05f4f9552d70121c9c9b5",
"assets/assets/images/fragment2.png": "a6f5dd55b7d45d23e7c14c2d8919f10d",
"assets/assets/images/fragment3.png": "5f5dd0e6e049e59c16add1cb740d75f1",
"assets/assets/images/fragment4.png": "725e78de796b8dbb92c110ec38d08e25",
"assets/assets/images/fragment5.png": "432f1d8e9b7707183f6485a082842d00",
"assets/assets/images/fragment6.png": "c0e974ce9d556578958fa7d8ed57e1b9",
"assets/assets/images/logo.png": "23d5d60ad67bf797e27674b5533fcf22",
"assets/assets/images/paper.png": "090f115d2d83014ab2a54a2a0156e966",
"assets/assets/images/workBg.png": "3f7563e18239832ed477b181dd81e490",
"assets/assets/images/works/project1-1.png": "94c907ee32d371a94ad0767ace7c2271",
"assets/assets/images/works/project1-2.png": "02fedd16c7265eac15223b478bc1414e",
"assets/assets/images/works/project1-3.png": "818ff02a23ab3f310fa693619f8fdc50",
"assets/assets/images/works/project2-1.png": "b375d53700ffbf1dbcfb9579cee33a44",
"assets/assets/images/works/project2-2.png": "8876703b49d67260fdba1abe679ad7ac",
"assets/assets/images/works/project2-3.png": "1d34eb75370f263fd84e57b884dfa72f",
"assets/assets/images/works/project3-1.png": "958cbb558144b1f79af529eaebbb5eb5",
"assets/assets/images/works/project3-2.png": "668c7bacba308f935cd76fe1ed877692",
"assets/assets/images/works/project3-3.png": "9908f2c8ee5645a6119e8c53c7a3ad60",
"assets/assets/images/works/project4-1.png": "85ef4e12a41b9e023375f1c20a7c902d",
"assets/assets/images/works/project4-2.png": "66aac3e30c660bd717545d4977eabe27",
"assets/assets/images/works/project4-3.png": "e83659e7e104bd1d9cd730ba223d546f",
"assets/assets/images/works/project5-1.png": "1f20bab823dfd6067046bcb9c50fa62b",
"assets/assets/images/works/project5-2.png": "36ae409db43995f4e3deaaf3e2d2c427",
"assets/assets/images/works/project5-3.png": "eabeecb27028f48ece08685aa40cd358",
"assets/assets/images/works/project6-1.png": "074ac5053f4d65e53571cc61340f27f0",
"assets/assets/images/works/project6-2.png": "b625bc2eb4c3c29ab90184c70c1d76f6",
"assets/assets/images/works/project6-3.png": "501063abfae66caf78f11541b8cf0989",
"assets/FontManifest.json": "33ab002bb6a456cdc60c2eb75e7bc49e",
"assets/fonts/MaterialIcons-Regular.otf": "c232cea42bdd18fa3b3da1d7270a0f9f",
"assets/NOTICES": "9e6605d5fa1a8bbcaa53a889266e6f5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/grain/assets/grain.png": "4ee11adfab0fa5ef9f9f32d865614f2e",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "e10bd2134218b7b9a1efd5735f3d338b",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "2f1a3240b25f8bfdf19749f98d3efe7a",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "ca69c69d3837e47b21848384bcb74d95",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "dd52632267c4e3895a78945cf7eb5fc7",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "26e0cd4176dbb3c9bf07724ad358e28f",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "e8533b0910e34e43a8d15e3114a443eb",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "ddd941c7de9ffb5f5ecacaf628480b0a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"browserconfig.xml": "8c48cc7c33a781503d2e8b5c33395875",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.svg": "0491506ff10c004b59f41d9228ba7747",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5e9ff3bcbedb4808d6ab9d0cd8fe9332",
"icons/code-icon.svg": "66c0d42ace3e9fb4987c6ff15c4cf7b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ae5c11f319ac10839ae06279a61f913",
"/": "5ae5c11f319ac10839ae06279a61f913",
"main.dart.js": "1928b8cc647d83c34cad09c1474bbb02",
"manifest.json": "450b2074a878f353d6950c07bb24b43f",
"version.json": "65daabffee76a5d9ef6f6ea6cce9510d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
