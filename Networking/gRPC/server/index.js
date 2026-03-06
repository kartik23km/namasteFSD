const PROTO_PATH = "./customer.proto"

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const customerProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [{
    id: "",
    name: "kartik",
    age: 28,
    address: "Delhi"
}]

server.addService(customerProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers })
    },
    get: (call, callback) => {
        let customer = customers.find(n => n.id == call.request.id)
        if (customer) {
            callback(null, customer)
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "NOT FOUND"
            })
        }
    },
    insert: (call, callback) => {

    },
    update: (call, callback) => {

    },
    remove: (call, callback) => {

    },
});

server.bindAsync("127.0.0.1:30034", grpc.ServerCredentials.createInsecure())