import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    resolve: {
      alias: {
        'components': path.resolve('src/components/'),
        'pages': path.resolve('src/pages/'),
        'lib': path.resolve('src/lib/'),
        'hooks': path.resolve('src/hooks/'),
      }
    }
  })
}
