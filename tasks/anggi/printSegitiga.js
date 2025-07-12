function printSegitiga(num) {  
  if (typeof num !== "number" || num <= 0){
  throw new Error ("Parameter harus bertipe data nomor dan harus nomor positif ")      
  }                                              // Mendefinisikan fungsi bernama printSegitiga yang menerima satu parameter num
  for (let i = 1; i <= num; i++) {          // Loop yang berjalan dari 1 hingga num. Variabel i mewakili baris ke-berapa yang sedang diproses
    let baris = '';                         // Mendeklarasikan variabel baris sebagai string kosong untuk menyimpan isi dari setiap baris

    for (let j = 1; j <= i; j++) {          // Loop kedua yang berjalan dari 1 hingga i. Ini menentukan berapa banyak angka yang akan dicetak di setiap baris
      baris += j + ' ';                     // Menambahkan nilai j dan spasi ke dalam string baris. Jadi di baris ke-1 akan ada 1 angka, di baris ke-2 akan ada 2 angka, dan seterusnya.
    }

    console.log(baris.trim());              // encetak string baris ke console. Method .trim() menghapus spasi di awal dan akhir string.
  }
}

console.log('\nprintSegitiga(1):');
printSegitiga(1);

console.log('\nprintSegitiga(2):');
printSegitiga(2);

console.log('printSegitiga(5):');
printSegitiga(5);

module.exports = printSegitiga;


