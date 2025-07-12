function buatRentang(mulai, selesai){
    let hasil = [];                                 // Membuat array kosong bervariabel hasil untuk menyimpan angka angka
    for (let i = mulai; i <= selesai; i++){         // Menggunakan loop for ubbtuk literasi dari mulai hingga selesai (inklusif)
        hasil.push(i);                              // Menambahkan setiap angka ke dalam array hasil dengan method push
    }
    console.log(hasil.join(', '));                  // Menggunakan join untuk menggambungkan semua elemen array
}

buatRentang(1, 5);
buatRentang(5, 10);


module.exports = buatRentang;