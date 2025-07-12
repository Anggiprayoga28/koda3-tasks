function cetakTabel(n) {
    if (typeof n !== 'number' || n <= 0) {                   // Validasi input - harus berupa angka dan nomor positif
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");
        
    }
    
    for (let i = 1; i <= 10; i++) {                         // Cetak tabel perkalian dari 1 hingga 10
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

// console.log('cetakTabel("abc")');
// cetakTabel("abc");

// console.log('\ncetakTabel(-1)');
// cetakTabel(-1);

// console.log('\ncetakTabel(3);');
// cetakTabel(3);


module.exports = cetakTabel ;