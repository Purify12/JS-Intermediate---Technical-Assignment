// 1. Apa itu synchronous?
//Synchronous adalah proses pengeksekusian kode yang yang sedang berjalan secara berurutan.
// 2. Apa itu asynchronous?
//Asyncrhonous adalah proses pengeksekusian kode tanpa melihat urutan atau menjalankan seluruh perintah tanpa menunggu perintah sebelumnya selesai.
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
//dapat diterapkan,sebab browser perlu waktu ketika melakukan proses request,sehingga agar tidak terjadi blocking pada UI, prosess asyncronus akan tetap berjalan pada background thread
//tanpa menghalngi tampilan UI se[erti menampilakn data dari berbagai item pada suatu web
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
//first log:  1
//first log:  2
//first log:  3
//first log:  4
//first log:  5
//second log:  6
//second log:  6
//second log:  6
//second log:  6
//second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
//Penggunaan var saat i dideklarasikan dalam loop yang merujuk pada variabel lingkup luar dapat menyebabkan semantik ,dan sebaiknya menggunakan let
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }

  