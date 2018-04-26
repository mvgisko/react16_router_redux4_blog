/*
* @Author: mgisko
* @Date:   2018-04-19 21:58:08
* @Last Modified by:   mgisko
* @Last Modified time: 2018-04-19 22:10:27
*/

importScripts('https://unpkg.com/workbox-sw@2.1.0/build/importScripts/workbox-sw.dev.v2.1.0.js')

// Create Workbox service worker instance
const workboxSW = new WorkboxSW({ clientsClaim: true });

workboxSW.precache([]);

/**
 * Set up a route that will match any URL requested that has /api/ in it.
 * Handle those requests using a network-first strategy, but with a timeout.
 * If there's no network response before the timeout, then return the previous
 * response from the cache instead.
 */

workboxSW.router.registerRoute(
  /\/api\/(.*)/,
  workboxSW.strategies.networkFirst({ networkTimeoutSeconds: 1 })
  // workboxSW.strategies.cacheFirst({ cacheName: 'hero-api' })
);

/**
 * This URL will be used as a fallback if a navigation request can't be fulfilled.
 * Normally this URL would be precached so it's always available.
 * This is particularly useful for single page apps where requests should go to a single URL.
 */
workboxSW.router.registerNavigationRoute('/index.html');

// -------------------------------------------------------
// push
// -------------------------------------------------------
// https://github.com/web-push-libs/web-push
self.addEventListener('push', (event) => {
  let notificationData = {};

  try {
    notificationData = event.data.json();
    swLog(`Push received and had this data: "${notificationData}"`);
  } catch (error) {
    notificationData = {
      title: 'HyMMA',
      body: 'Test push message',
    };
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: '/static/img/icons/favicon-120x120.png',
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  swLog('Notification click Received.', event);

  event.notification.close();

  event.waitUntil(
    self.clients.matchAll().then((clientList) => {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return self.clients.openWindow('/');
    })
  );

  // We are calling event.waitUntil() again
  // to ensure the browser doesn't terminate
  // our service worker before our new window has been displayed.
  // event.waitUntil(clients.openWindow('https://johnpapa.net'))
});

const applicationServerPublicKey = 'BASdfSmZexytiA0MgbFCUT7Qzsliix5ZOjoSTqYrZaNGFIK_z2LXgAKVqUbknGWGsSvuKvEYOm3ms-RFPCZHP8E'

self.addEventListener('pushsubscriptionchange', (event) => {
  swLog('"pushsubscriptionchange" event fired.');
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  event.waitUntil(
    self.registration.pushManager.subscribe({
      applicationServerKey,
      userVisibleOnly: true,
    })
      .then((newSubscription) => {
        // TODO: Send to application server
        swLog('New subscription: ', newSubscription);
      })
  );
});

// -------------------------------------------------------
// logging
// -------------------------------------------------------
function swLog(eventName, event) {
  console.log(`[Service Worker] ${eventName}`);
  if (event) {
    console.log(event);
  }
}
