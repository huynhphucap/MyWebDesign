// const { mysql } = require('./database/db.js');

// // Bước 1: Import module http
// var http = require('http');

// // Bước 2: Khởi tạo server
// var server = http.createServer(function (request, response) {
//     // Biến request: là biến lưu trữ thông tin gửi lên của client
//     // Biến response: là biến lưu trữ các thông tin trả về cho client

//     // Thiết lập Header
//     response.writeHead(200, {
//         "Context-type": "text/plain"
//     });

//     // Show thông tin
//     response.write('Your URL is ' + request.url);

//     // Kết thúc
//     response.end();
// });

// // Bước 3: Lắng nghe cổng 3000 thì thực hiện chương trình
// server.listen(3000, function () {
//     console.log('Connected Successfull in 3000!');
// });
// Require packages and set the port
const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
 
routes(app);
 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});