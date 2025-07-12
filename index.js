/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task "Anggi Prayoga"
 */

// import your tasks here
const printSegitiga = require("./tasks/anggi/printSegitiga");
const countArray = require ("./tasks/anggi/countArray");
const triangle = require ("./tasks/anggi/triangle");
const processNumbers = require ("./tasks/anggi/processNumbers");
const cetakTabel = require ("./tasks/anggi/cetakTabel");
const buatRentang = require ("./tasks/anggi/buatRentang");

function taskAnggi (){
    // 1. printSegitiga
    try {
        printSegitiga(1);

        printSegitiga(2);

        printSegitiga(5);
     
    } catch (error) {
        console.log(error);
    }

    // 2. countArray
    console.log(countArray([1, 2, 3, 4, 5]));
    console.log(countArray([2, 2, 2, 2, 2]));

    //3. triangel
    try {
                      
    triangle("abc");

    console.log('\ntriangle(-1)');
    triangle(-1);

    console.log('\ntriangle(1);');
    triangle(1);

    console.log('\ntriangle(2);');
    triangle(2);
    } catch (error) {
        console.log(error.message);
    }

    //4. processNumbers
    console.log(processNumbers([1, 2, 3, 4, 5]));
    console.log(processNumbers([2, 6, 4, 8]));


    //5. cetakTabel
    try {
        
        cetakTabel("abc");
  
        cetakTabel(-1);

        cetakTabel(3);

    } catch (error) {
    console.log(error.message);
    }

    //6. buatRentang
    buatRentang(1, 5);
    buatRentang(5, 10);

}

taskAnggi();