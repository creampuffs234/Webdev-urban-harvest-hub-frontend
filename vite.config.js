import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "service-workers.js",
      devOptions: {
        enabled: true
      },

      // Assets cached for offline use
      includeAssets: [
        "vite.svg",
        "pwa-192x192.png",
        "pwa-512x512.png"
      ],

      manifest: {
        name: "Urban Harvest Hub",
        short_name: "UrbanHarvest",
        description:
          "A sustainable digital hub for eco-friendly products, bookings, and subscriptions.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#6b8f58",

        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],

  // KEEP THIS — your API proxy is correct
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true
      }
    }
  }
});
