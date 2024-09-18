function createEmptyObject() {
    return Object.create(null);
}

// Пример использования
const emptyObj = createEmptyObject();
console.log(emptyObj); // Вывод: {}
console.log(emptyObj.__proto__); // Вывод: undefined (у объекта нет прототипа)