function countArray(arr){
    if(arr.lenght == 0){                                        // mengecek apakah array kosong
        return 0;
    }
    return arr.reduce ((acc, num) => acc * num,1);              // Menggunakan method reduce() untuk mengalikan semua elemen
}
console.log(countArray([1, 2, 3, 4, 5]));
console.log(countArray([2, 2, 2, 2, 2]));

module.exports = countArray;