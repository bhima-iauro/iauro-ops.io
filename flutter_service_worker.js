'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "90f3c6e0dbac35827421ee961b5a2be1",
"index.html": "083006caabb4363bd05d89283a988afa",
"/": "083006caabb4363bd05d89283a988afa",
"keycloak.json": "832160b5c3cb02bb4de074ea60dfb003",
"js/keycloak.js": "605ce0944c826b136575708e06baec10",
"main.dart.js": "a3a70c3a0f1c2f5b3992cafb971d746d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"login.html": "a832c33b739e251377ec7604993db04c",
"silent-check-sso.html": "e98d6bd09ec8f69bcc4cccb74a14d4c3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "08ae6f13b3313ed4f2c77d01b12b34fc",
"icons/favicon.ico": "a5b3641031d04f6c272e7d5190b86bd1",
"icons/apple-icon.png": "7f9bfd2ff1c943d4df5711c99f6892ea",
"icons/apple-icon-144x144.png": "0a83993f4e990c805aa049bc39f3ca6c",
"icons/android-icon-192x192.png": "3250860f377ace8772032b62d9641fe8",
"icons/apple-icon-precomposed.png": "7f9bfd2ff1c943d4df5711c99f6892ea",
"icons/apple-icon-114x114.png": "a5b53faa00b8248bb46dd7becd942e0b",
"icons/ms-icon-310x310.png": "97676790bc1474c4d1a09dc23a49882d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "0a83993f4e990c805aa049bc39f3ca6c",
"icons/apple-icon-57x57.png": "82a96c2737d5153d655037f84104b86d",
"icons/apple-icon-152x152.png": "42972a8d6e319ab7e887d07db23381ae",
"icons/ms-icon-150x150.png": "913b8b00ad81706508661a730f3e7144",
"icons/android-icon-72x72.png": "ec8c9168df2cf1e050111b6e3f302266",
"icons/android-icon-96x96.png": "9d2336a59270cb5c7f711c45be5dc78f",
"icons/android-icon-36x36.png": "58d80bb87d734b6803abb3d02a175dc6",
"icons/apple-icon-180x180.png": "c3a217963f3f4c79fcd95bbd50d9bb54",
"icons/favicon-96x96.png": "9d2336a59270cb5c7f711c45be5dc78f",
"icons/android-icon-48x48.png": "91d6bae2cc666b143d68387214221e67",
"icons/apple-icon-76x76.png": "a95878a886ef7383e67a6b603622e1d3",
"icons/apple-icon-60x60.png": "09453319c41f296ff608b7389e883d58",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "0a83993f4e990c805aa049bc39f3ca6c",
"icons/apple-icon-72x72.png": "ec8c9168df2cf1e050111b6e3f302266",
"icons/apple-icon-120x120.png": "b744ece7121ecb45cd244e4484d8ac19",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "dcd4a7ebea59f4abb1bf119aa96677aa",
"icons/ms-icon-70x70.png": "5f8735eaa7b1a3f3100639ecc4bbd2bb",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"assets/AssetManifest.json": "e159039465d9bc67d902b457cd93dc50",
"assets/NOTICES": "997170ae4ff3fb7ad296255643e27b57",
"assets/FontManifest.json": "92d3d8e14be4d62fcf29f6cd194a2dc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "11c1068793409fb27b169aa94b89cff3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/document.png": "3772225ba08b4ea06d6465a1cc964350",
"assets/assets/images/login_background.jpg": "6ad457106ed7c4a5d755087b31add00b",
"assets/assets/images/hour_glass.png": "9ff6e1ef74f35a2bdc42a028551a32b5",
"assets/assets/images/3x/document.png": "6f23124e501094da68af6d4d070711a6",
"assets/assets/images/3x/hour_glass.png": "21135175f6d48fc9058e108fd5084e7c",
"assets/assets/images/3x/iauro-logo.png": "bd542716c3902d7801c8e0e82422c7ab",
"assets/assets/images/logo-white.jpeg": "df16af893cc6006fcd9c0c829627b771",
"assets/assets/images/iauro-logo.png": "c814c33a22995fc97ce4e42f44b09836",
"assets/assets/images/2x/document.png": "0bd3dd09a46960324dd58c3e7f9767e6",
"assets/assets/images/2x/hour_glass.png": "d9321280f252721b2dabb15ad00bda67",
"assets/assets/images/2x/iauro-logo.png": "1815ddbcd9e5b8a633a69aa0f509cb5f",
"assets/assets/fonts/NotoSans-Regular.ttf": "d5649a4a1b2eeb6b7add5a310414c48e",
"assets/assets/fonts/NotoSans-Bold.ttf": "91fd88919f019f29caee6cfe0f5d88bc",
"assets/assets/fonts/NotoSans-BoldItalic.ttf": "cc259a7e9911128c4ecd322e7584aa90",
"assets/assets/fonts/NotoSans-Italic.ttf": "27f0f38979ffb1932d719b6aee9918fb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"get-cookies.js": "676ef55ebfbffcd340235845ba15ebce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
