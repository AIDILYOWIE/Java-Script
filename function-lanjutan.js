// function declaration 
var a = prompt('masukan nama anda ');
var b = prompt('masukan status anda');
Akusayang(a, b);
function Akusayang(nama, status){
    if (status == 'jomblo') {
        alert('halo '+nama+' yahahahaa jomblo');
    }else {
        alert('halo '+nama+', status anda '+status);
    }
}



// function expresion
// var a = prompt('masukan nama anda');
// var b = prompt('masukan status anda');
// var c = function (nama, status){
   
//     if (status == 'jomblo'){
//         console.log('halo '+nama+' yahhahha masih '+status);
//     }else {
//         console.log('halo '+nama+' status anda ternyata '+status);  
//     }
// }
// c(a, b);
// function bisa disebut expresion jika function tersebut di simpan di dalam variable

// kita bisa memnggil dulu baru mendeklarasikan function

// tampil('aidil');

// function tampil(nama){
//     console.log('halo '+nama)
// }
// untuk function expresion kita tida bisa panggil dulu, harus di definisikan terlebih dahulu