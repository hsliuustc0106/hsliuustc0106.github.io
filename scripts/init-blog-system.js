#!/usr/bin/env node

// Script to initialize the blog management system
const fs = require('fs');
const path = require('path');

console.log('Initializing blog management system...');

// Check if required directories exist
const adminDir = path.join(__dirname, '..', 'src', 'app', 'admin');
const apiDir = path.join(__dirname, '..', 'src', 'app', 'api');
const libDir = path.join(__dirname, '..', 'src', 'lib');

// Create directories if they don't exist
if (!fs.existsSync(adminDir)) {
  console.log('Creating admin directory...');
  fs.mkdirSync(adminDir, { recursive: true });
}

if (!fs.existsSync(apiDir)) {
  console.log('Creating API directory...');
  fs.mkdirSync(apiDir, { recursive: true });
}

if (!fs.existsSync(libDir)) {
  console.log('Creating lib directory...');
  fs.mkdirSync(libDir, { recursive: true });
}

console.log('Blog management system initialized successfully!');
console.log('');
console.log('To use the admin panel:');
console.log('1. Start your Next.js development server: npm run dev');
console.log('2. Navigate to http://localhost:3000/admin');
console.log('3. Log in with username: admin, password: password');
console.log('');
console.log('Documentation is available in:');
console.log('- ADMIN_GUIDE.md');
console.log('- BLOG_MANAGEMENT.md');