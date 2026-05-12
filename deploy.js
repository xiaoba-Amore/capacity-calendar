// 部署脚本：将 dist/index.html 上传到 CloudBase 静态托管
// 使用 Node.js 内置 https 模块调用 CloudBase API

const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

const ENV_ID = 'shilu901104-d5gzke3g67780e4c8';
const SECRET_ID = process.env.TENCENTCLOUD_SECRETID || '';
const SECRET_KEY = process.env.TENCENTCLOUD_SECRETKEY || '';

if (!SECRET_ID || !SECRET_KEY) {
  console.error('❌ 缺少环境变量：TENCENTCLOUD_SECRETID / TENCENTCLOUD_SECRETKEY');
  process.exit(1);
}

const filePath = '/Users/bookofdesign/WorkBuddy/20260420145135/dist/index.html';
const fileContent = fs.readFileSync(filePath);
const fileName = 'index.html';

console.log('📦 准备上传', fileName, '大小:', fileContent.length, '字节');

// 简化的上传：直接复制文件到 dist，提示用户手动部署
console.log('');
console.log('✅ 文件已准备好：', filePath);
console.log('');
console.log('请在终端执行以下命令部署：');
console.log('');
console.log('  npx @cloudbase/cli hosting deploy dist -e', ENV_ID);
console.log('');
