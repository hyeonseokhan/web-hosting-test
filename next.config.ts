import type {NextConfig} from "next";

const basePath = '/web-hosting-test';
const nextConfig: NextConfig = {
  /* config options here */
  basePath,
  env: {
    BASE_PATH: basePath,
  },
  output: 'export',
  distDir: 'docs',
};

export default nextConfig;
