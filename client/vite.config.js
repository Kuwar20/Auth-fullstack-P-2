import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // each time we make a request to /api, it will be redirected to http://localhost:3000/
        target: "http://localhost:3000", // to fix the CORS issue
        secure: false,
      },
    },
  },
});
