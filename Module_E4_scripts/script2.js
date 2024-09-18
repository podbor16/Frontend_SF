function hasProperty(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}

// Пример использования
const exampleObject = {
    name: 'Alice',
    age: 25,
    job: 'Engineer'
};

console.log(hasProperty('name', exampleObject)); // true
console.log(hasProperty('salary', exampleObject)); // false