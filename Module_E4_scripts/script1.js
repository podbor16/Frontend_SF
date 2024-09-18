function logOwnProperties(obj) {
    // Используем метод Object.keys для получения массива собственных свойств объекта
    const ownKeys = Object.keys(obj);
    
    // Перебираем ключи и выводим их значения в консоль
    ownKeys.forEach(key => {
        console.log(`${key}: ${obj[key]}`);
    });
}

// Пример использования
const exampleObject = {
    name: 'John',
    age: 30,
    job: 'Developer',
    __proto__: { hobby: 'Reading' } // Это не собственное свойство
};

logOwnProperties(exampleObject);