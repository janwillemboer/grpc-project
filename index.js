const grpc = require("@grpc/grpc-js");

const server = new grpc.Server();

// configure API
const createApi = require("./api.js");
createApi(server);

// start the server over http
const PORT = process.env.PORT || 3000;
server.bindAsync(`127.0.0.1:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) throw err;
        server.start();
        console.log(`Listening at http://localhost:${PORT}`);
    });