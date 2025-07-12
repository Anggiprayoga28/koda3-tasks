function processNumbers(arr){                       // Membuat fungsi bernama processNumbers, 
    let result = 1;                                 // Variabel untuk menyimpan hasil perkalian, dimulai dari 1
    let adaGanjil = false;                          // Untuk mengecek apakah ada bilangan ganjil

    for (let angka of arr){                         // Menggunakan for of loop untuk mengiterasi setiap elemen dalam array, 
        if(angka % 2 == 1){                         // sisa pembagian angka dengan 2, Jika hasilnya tidak habis di bagi 2, berarti angka tersebut ganjil
            result = result * angka;
            adaGanjil = true;                       // untuk menandai bahwa ada bilangan ganjil
        }
    }
    if(adaGanjil){                                  // Jika ada bilangan ganjil, kembalikan hasil perkalian
        return result;                              
    }else {                                         // Jika tidak ada bilangan ganjil, kembalikan 1
        return 1;
    }
}
console.log(processNumbers([1, 2, 3, 4, 5]));
console.log(processNumbers([2, 6, 4, 8]));


module.exports = processNumbers;