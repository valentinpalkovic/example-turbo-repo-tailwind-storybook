/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("autoprefixer"),
    require("tailwindcss")("../../packages/ui/tailwind.config.js"),
  ],
};

module.exports = config;
