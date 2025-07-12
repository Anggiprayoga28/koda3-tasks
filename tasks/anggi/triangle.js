function triangle(n) {                                     // Fungsi bernama triangle yang menerima satu parameter n 
    if (typeof n !== 'number' || n <= 0) {                 // Jika tidak memenuhi syarat, fungsi akan menampilkan pesan error dan berhenti
        throw new Error ("Parameter harus bertipe data nomor dan harus nomor positif");
    }
    
    for (let i = 1; i <= n; i++) {                       // Loop ini mengontrol jumlah baris yang akan dicetak, dimulai dari 1 hingga n
        let angka = '';
        for (let j = i; j >= 1; j--) {
            angka += j + ' ';
        }
        console.log(angka)
    }
}

// console.log('triangle("abc")');                         // Contoh penggunaan sesuai dengan output yang diharapkan:
// triangle("abc");

// console.log('\ntriangle(-1)');
// triangle(-1);

// console.log('\ntriangle(1);');
// triangle(1);

// console.log('\ntriangle(2);');
// triangle(2);

// console.log('\ntriangle(5);');
// triangle(5);

module.exports = triangle;