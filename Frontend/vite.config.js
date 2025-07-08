import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true, // 👈 Expose to local network (0.0.0.0)
    port: 5173, // Optional: you can specify a port
  },
});
