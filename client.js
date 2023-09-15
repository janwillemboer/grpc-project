const loader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

// load the api definition from the proto file
const def = loader.loadSync("recipe.proto");
const recipePackage = grpc.loadPackageDefinition(def).recipe;

// create client to local gRPC server
const client = new recipePackage.RecipeService("localhost:3000", grpc.credentials.createInsecure());

// get the recipeId from the commandline, or just take the number 1
const recipeId = process.argv[2] || 1;

// finish the client: call the service to get recipe number recipeId

// ....