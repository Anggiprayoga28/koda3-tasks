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
const anggi = require ("./tasks/anggi/index.js")
// const printSegitiga = require("./tasks/anggi/printSegitiga");
// const countArray = require ("./tasks/anggi/countArray");
// const triangle = require ("./tasks/anggi/triangle");
// const processNumbers = require ("./tasks/anggi/processNumbers");
// const cetakTabel = require ("./tasks/anggi/cetakTabel");
// const buatRentang = require ("./tasks/anggi/buatRentang");

function taskAnggi (){
    // 1. printSegitiga
    try {
        anggi.printSegitiga(1);

        anggi.printSegitiga(2);

        anggi.printSegitiga(5);
     
    } catch (error) {
        console.log(error.message);
    }

    // 2. countArray
    anggi.countArray([1, 2, 3, 4, 5]);
    anggi.countArray([2, 2, 2, 2, 2]);

    //3. triangel
    try {
                      
    anggi.triangle("abc");

    // console.log('\ntriangle(-1)');
    anggi.triangle(-1);

    // console.log('\ntriangle(1);');
    anggi.triangle(1);

    // console.log('\ntriangle(2);');
    anggi.triangle(2);
    } catch (error) {
        console.log(error.message);
    }

    //4. processNumbers
   anggi.processNumbers([1, 2, 3, 4, 5]);
   anggi.processNumbers([2, 6, 4, 8]);


    //5. cetakTabel
    try {
        
        anggi.cetakTabel("abc");
  
        anggi.cetakTabel(-1);

        anggi.cetakTabel(3);

    } catch (error) {
    console.log(error.message);
    }

    //6. buatRentang
    anggi.buatRentang(1, 5);
    anggi.buatRentang(5, 10);

}

taskAnggi();