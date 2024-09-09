import express from 'express';
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/haggle-credit', createProxyMiddleware({ target: 'http://www.mhk154.shop:', changeOrigin: true }));
app.listen(3006);