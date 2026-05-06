const fruits = require("../fruits.json")

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus
        this.name = fruit.name 
        this.id = fruit.id 
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }

    static showAll () {
        // Mapping and Filtering 
        return fruits.map(f => new Fruit(f))
    }

    static show(name){
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)

        if (fruit) { // If there was no fruit provided in the () it would be null 
            return new Fruit(fruit)
        } else {
            throw "The fruit doesn't exist."
        }
    }
    
    static create(data) {
        const newFruit = data
        console.log(data)
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase())

        if(fruit){
            throw "The fruit already exists."
        } else {
            newFruit["id"] = fruits.length + 1
            fruits.push(newFruit)
            return new Fruit(newFruit)
        }
    }

    // Creating a method called update - for this we are NOT using static, as we need to call on an object / fruit 

    update(data) {
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase()) // this. here refers to the object requiring / calling the function 

        if (updatedFruit){
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw "Fruit not found"
        }
    }

    destroy() { // Doesn't need a parameter here 
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())

        if(deletedFruit){
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1) // 1 is the deleteCount
            return "Fruit deleted"
        } else {
            throw "Fruit not found"
        }
    }
}

module.exports = Fruit