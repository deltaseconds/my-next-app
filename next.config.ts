import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  env: {
    MYSQL_HOST: '127.0.0.1',
    MYSQL_PORT: '3306',
    MYSQL_DATABASE: 'your_database_name',
    MYSQL_USER: 'your_username',
    MYSQL_PASSWORD: 'your_password',
    APPLICATION_NAME: 'VENTURIZE'
  },
};

export default nextConfig;
module.exports = nextConfig;