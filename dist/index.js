"use strict";
// Enum for house names
var House;
(function (House) {
    House["Gryffindor"] = "Gryffindor";
    House["Slytherin"] = "Slytherin";
})(House || (House = {}));
// Array to store all characters
const characters = [];
// Function to add a new character
function addCharacter(character) {
    characters.push(character);
}
// Function to display all characters
function displayCharacters() {
    characters.forEach(character => {
        console.log(character);
    });
}
// Function to filter characters by house
function filterByHouse(house) {
    return characters.filter(character => {
        return character.house === house;
    });
}
// Function to count wizards vs muggles
function countByMagicalStatus() {
    const wizards = characters.filter(character => character.isWizard);
    return {
        wizards: wizards.length,
        muggles: characters.length - wizards.length
    };
}
// Sample data
addCharacter({
    name: "Harry Potter",
    age: 17,
    isWizard: true,
    house: House.Gryffindor,
    spells: ["Expelliarmus", "Expecto Patronum"],
    wand: ["Phoenix Feather", 11, "Holly"]
});
addCharacter({
    name: "Hermione Granger",
    age: 17,
    isWizard: true,
    house: House.Gryffindor,
    spells: ["Alohomora", "Petrificus Totalus"],
    wand: ["Dragon Heartstring", 10.75, "Vine"]
});
addCharacter({
    name: "Dudley Dursley",
    age: 18,
    isWizard: false,
    house: House.Slytherin,
    spells: [],
    wand: ["None", 0, "None"]
});
// Displaying characters
displayCharacters();
// Filter by house
console.log("\n Characters from Gryffindor:");
console.log(filterByHouse(House.Gryffindor));
// Magical status summary
const summary = countByMagicalStatus();
console.log(`\n Wizards: ${summary.wizards}, Muggles: ${summary.muggles}`);
