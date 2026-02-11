import { cleanupOutdatedCaches, precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { registerRoute, NavigationRoute } from 'workbox-routing'

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

const handler = createHandlerBoundToURL('/index.html')
const navigationRoute = new NavigationRoute(handler, {
    denylist: [
        /^\/api\/.*/, // Don't serve index.html for API requests
    ],
})
registerRoute(navigationRoute)

self.skipWaiting()
clientsClaim()

