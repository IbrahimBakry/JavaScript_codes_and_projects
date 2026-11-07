// You can: read, add, update, and remove properties on animal objects.

// 1. Create tiger object with species and endangered status
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

// 2. Create elephant object (used later for testing)
const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

// 3. Get the species of any animal
const getSpecies = (animal) => {
  return animal.species;
};
console.log(getSpecies(tiger)); // "Tiger"

// 4. Get the age of any animal
const getAge = (animal) => {
  return animal.age;
};
console.log(getAge(tiger)); // 5

// 5. Add a habitat property to an animal and return it
const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};
console.log(addHabitat(tiger, "Rainforest")); // adds habitat: "Rainforest"

// 6. Update an animal's age and return it
const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};
console.log(updateAge(elephant, 12)); // elephant.age is now 12

// 7. Remove the isEndangered property from an animal
const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};
console.log(removeEndangeredStatus(tiger)); // isEndangered removed

// 8. Check if animal has a habitat property (true/false)
const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};
console.log(hasHabitat(tiger));    // true (added earlier)
console.log(hasHabitat(elephant)); // false

// 9. Get any property value using bracket notation
const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};
console.log(getProperty(tiger, "species"));   // "Tiger"
console.log(getProperty(elephant, "age"));    // 12