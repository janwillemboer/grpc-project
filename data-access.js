
function getRecipe(id) {
    if (id != 1) {
        throw new Error(`only recipe 1 is supported`);
    }
    return {
        id,
        name: "Boerenkoolstamppot",
        steps: "Bake bacon, onion and garlic until brown. Lower fire, throw in boerenkool, bake until smaller. Cook potatoes. Mesh together, add some cooking water to the mesh. Throw in salt and pepper.",
        ingredients: [
            {id: 1, name: "Boerenkool", quantity: "500gr"},
            {id: 2, name: "Potatoes", quantity: "500gr"},
            {id: 3, name: "Bacon", quantity: "200gr"},
            {id: 4, name: "Onion", quantity: "1"},
            {id: 5, name: "Garlic", quantity: "1 piece"},
            {id: 6, name: "Salt", quantity: "3-5gr"},
            {id: 7, name: "Pepper", quantity: "3gr"},
        ] 
    }
}


module.exports = {getRecipe};