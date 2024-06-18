// if(kondisi){
//     aksi1
// }else if (kondisi2){
//     aksi2
// }else {
//     aksi2
// }


var angka = prompt('masukan angka untuk penjumlahan = ');

if(angka % 2 == 0){
    alert(angka + ' adalah bilangan genap');
}else if (angka % 2 == 1){
    alert(angka +' adalah bilangan ganjil');
}else {
    alert('yang anda masukan bukan angka !!!')
}