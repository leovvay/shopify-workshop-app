require("dotenv").config();
const webpack = require('webpack');
const { default: Shopify } = require('@shopify/shopify-api');

const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY);

console.log('apikeyfromwindow:', apiKey)

module.exports = {
    webpack: (config) => {
        const env = { API_KEY: apiKey };
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    },
};
