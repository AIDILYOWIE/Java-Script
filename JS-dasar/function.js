// var a = parseInt(prompt('masukan angka ke 1 ')) ;
// var b = parseInt(prompt('masukan angka ke 2 ')) ;

// var kubusA = a*a*a;
// var kubusB = b*b*b;

// var hitung = kubusA + kubusB;

// if (hitung){
//     alert('jumlah volume '+ hitung);
// }else {
//     alert('anda harus memasukan angka');
// }

// penggunaan function

// function jumlahVolumeDuaKubus(a, b){
//     var kubusA = a*a*a;
//     var kubusB = b*b*b;
    
//     var total = kubusA + kubusB;

//     return total;
// }

// if (jumlahVolumeDuaKubus(a, b)){
//     alert(jumlahVolumeDuaKubus(a, b));
//     alert(jumlahVolumeDuaKubus(8, 7));
// }else {
//     alert('anda harus memasukan anka');
// }


// function tambah(ahh, boo){
//     return ahh+boo;
// }

// var a = parseInt(prompt('masukan nilai anda : '));
// var b = parseInt(prompt('masukan nilai anda : '));

// var hasil = tambah(a-2, b-2);
// console.log(hasil);


// bisa menggunakan 2 function sekaligus
// function tambah(a, b){
//     return a + b;
// }
// function kali(a, b){
//     return a * b;
// }

// var a = parseInt(prompt('masukan nilai anda : '));
// var b = parseInt(prompt('masukan nilai anda : '));

// var hasil = kali(tambah(a, b), tambah(a, b));
// console.log(hasil);


// function kali(a, b){
//     return a * b;
// }

// var coba = kali(3, 4, 5); 
// maka nilai dari argument 5 adalah di abaikan

// function kali(a, b, c, d){
//     return a * b * c;
// }

// var coba = kali(3, 4, 5);
// maka nilai dari parameter d adalah di abaikan


// function array(){
//     return arguments;
// }

// var coba = array(5,10,5,'hai',true);
// console.log(coba)

//================================================================== 

// CARA MENJUMLAHKAN SEMUA ISI ARGUMENT TANPA MEMPERDULIKAN PARAMETER
function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;   
}

var coba = tambah(3,2,3);
console.log(coba);