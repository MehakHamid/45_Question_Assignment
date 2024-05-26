"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q41
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!");
}
make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich('peanut butter', 'jelly');
//Q42
// function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
function car_info(manufacturer, model, ...options) {
    let car = { manufacturer: manufacturer, model: model };
    for (let option of options) {
        Object.assign(car, option);
    }
    return car;
}
console.log(car_info('Toyota', 'Corolla', { color: 'blue', year: 2020 }, { sunroof: true }));
