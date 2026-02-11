const http = require('http');

const options = {
    hostname: '127.0.0.1',
    port: 5000,
    path: '/api/products',
    method: 'GET',
};

console.log("Testing Backend Connection...");

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('BODY:', data.substring(0, 100) + "..."); // Truncate for readability
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    process.exit(1);
});

req.end();
