// switch(ekspresi) {
//     case "nilai 1":
//     aksi 1
//     [break;]

//     case "nilai 2":
//     aksi 2
//     [break;]

//     case "nilai n":
//     aksi n
//     [break;]

//     default:
//         aksi default
//     [break;]
// }

// var angka = prompt('masukan angka anda : ');

// switch( angka ) {
//     case '1' :
//         alert(' anda masukkan angka 1');
//         break;
//     case '2' :
//         alert(' anda masukkan angka 2');
//         break;
//     case '3' :
//         alert(' anda masukkan angka 3');
//         break;
//     default :
//         alert('anda memasukan angka salah');
//         break;
// }

// program makanan dan minuman
// Program pemesanan makanan dan minuman

// Meminta input dari pengguna menggunakan prompt
var makananMinuman = prompt("Selamat datang! Silakan pilih makanan atau minuman (tulis makanan atau minuman):");

// Inisialisasi variabel untuk harga
var harga = 0;

// Menggunakan switch untuk memilih berdasarkan input
switch (makananMinuman.toLowerCase()) {
    case "makanan":
        var pesanMakanan = prompt("Menu makanan: \n1. Nasi Goreng - Rp. 25000\n2. Ayam Goreng - Rp. 30000\n3. Mie Ayam - Rp. 20000\nPilih nomor menu makanan:");
        switch (pesanMakanan) {
            case "1":
                harga = 25000;
                alert("Anda memesan Nasi Goreng.");
                break;
            case "2":
                harga = 30000;
                alert("Anda memesan Ayam Goreng.");
                break;
            case "3":
                harga = 20000;
                alert("Anda memesan Mie Ayam.");
                break;
            default:
                alert("Menu makanan tidak valid.");
        }
        break;
    case "minuman":
        let pesanMinuman = prompt("Menu minuman: \n1. Es Teh - Rp. 5000\n2. Es Jeruk - Rp. 7000\n3. Kopi - Rp. 10000\nPilih nomor menu minuman:");
        switch (pesanMinuman) {
            case "1":
                harga = 5000;
                alert("Anda memesan Es Teh.");
                break;
            case "2":
                harga = 7000;
                alert("Anda memesan Es Jeruk.");
                break;
            case "3":
                harga = 10000;
                alert("Anda memesan Kopi.");
                break;
            default:
                alert("Menu minuman tidak valid.");
        }
        break;
    default:
        alert("Input tidak valid.");
}

// Menampilkan total yang harus dibayar
if (harga > 0) {
    alert("Total yang harus dibayar: Rp. " + harga);
} else {
    alert("Terima kasih atas pesanannya.");
}


// var item = prompt('masukan nama makanan / minuman : \n (contoh : daging, sayur, telur, mie instan, amer)')

// switch (item) {
//     case 'daging':
//         confirm(' makanan / minuman SEHAT!')
//     break;
//     case 'sayur':
//         alert(' makanan / minuman SEHAT!')
//     break;
//     case 'telur':
//         alert(' makanan / minuman SEHAT!')
//     break;
//     case 'mie instan' || 'mie':
//         alert(' makanan / minuman TIDAK SEHAT!')
//     break;
//     case 'amer':
//         alert(' makanan / minuman TIDAK SEHAT')
//     break;
//     default:
//         alert('anda memasukan makana / minuman yang salah')
// }