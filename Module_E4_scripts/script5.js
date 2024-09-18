// Родительский класс для электроприборов
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name; // Название прибора
        this.power = power; // Потребляемая мощность в ваттах
        this.isOn = false; // Состояние прибора (включен/выключен)
    }

    // Метод для включения прибора
    turnOn() {
        this.isOn = true;
        console.log(`${this.name} включен.`);
    }

    // Метод для выключения прибора
    turnOff() {
        this.isOn = false;
        console.log(`${this.name} выключен.`);
    }

    // Метод для получения состояния прибора
    getStatus() {
        return this.isOn ? `${this.name} работает.` : `${this.name} не работает.`;
    }
}

// Подкласс для настольной лампы
class DeskLamp extends ElectricalAppliance {
    constructor(power, brightness) {
        super('Настольная лампа', power);
        this.brightness = brightness; // Яркость лампы
    }

    // Метод для изменения яркости
    setBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`Яркость лампы установлена на ${newBrightness}.`);
    }
}

// Подкласс для компьютера
class Computer extends ElectricalAppliance {
    constructor(power, brand) {
        super('Компьютер', power);
        this.brand = brand; // Бренд компьютера
    }

    // Метод для получения информации о компьютере
    getInfo() {
        return `Компьютер марки ${this.brand}.`;
    }
}

// Класс для управления электроприборами
class ApplianceManager {
    constructor() {
        this.appliances = []; // Массив для хранения приборов
    }

    // Метод для добавления прибора в управление
    addAppliance(appliance) {
        this.appliances.push(appliance);
    }

    // Метод для подсчета общей потребляемой мощности включенных приборов
    calculateTotalPower() {
        return this.appliances.reduce((total, appliance) =>
            total + (appliance.isOn ? appliance.power : 0), 0);
    }
}

// Создание экземпляров приборов
const deskLamp = new DeskLamp(60, 100); // 60 ватт, яркость 100
const computer = new Computer(300, 'Dell'); // 300 ватт, бренд Dell

// Создание менеджера для управления приборами
const applianceManager = new ApplianceManager();
applianceManager.addAppliance(deskLamp);
applianceManager.addAppliance(computer);

// Включение приборов и вывод информации
deskLamp.turnOn();
computer.turnOn();

console.log(deskLamp.getStatus()); // Проверка статуса лампы
console.log(computer.getStatus());  // Проверка статуса компьютера

// Подсчет общей потребляемой мощности
const totalPower = applianceManager.calculateTotalPower();
console.log(`Общая потребляемая мощность: ${totalPower} ватт.`);

// Выключение приборов
deskLamp.turnOff();
computer.turnOff();