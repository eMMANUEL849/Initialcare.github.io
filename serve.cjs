const http = require('http')
const fs = require('fs')
const path = require('path')

const base = 'C:/Users/user/Documents/InitialCare/dist'

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
}

const server = http.createServer((req, res) => {
  let filePath = path.join(base, req.url.split('?')[0])
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(base, 'index.html')
  }
  const ext = path.extname(filePath)
  res.setHeader('Content-Type', mime[ext] || 'text/plain')
  fs.createReadStream(filePath).pipe(res)
})

server.listen(8090, () => {
  console.log('InitialCare preview server running at http://localhost:8090')
})
