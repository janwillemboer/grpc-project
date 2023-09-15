const loader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const da = require("./data-access.js");

module.exports = function createApi(server) {

    // load the api definition from the proto file
    const def = loader.loadSync("recipe.proto");
    const recipePackage = grpc.loadPackageDefinition(def).recipe;

    // implement the services defined in the recipe proto definition
    server.addService(recipePackage.RecipeService.service, {

        //getMetadata service only returns the process pid
        getMetaData: (_call, callback) => {
            callback(null, { pid: process.pid });
        },

        //getRecipe service actually returns the recipe
        getRecipe: (call, callback) => {
            // use the fake dataacces to get the recipe
            const recipe = da.getRecipe(call.request.id);
            callback(null, recipe);
        }
    });
};