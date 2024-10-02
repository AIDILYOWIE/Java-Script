// function tes(){
//     return tes();
// }
// tes();
// ketika function tes di jalankan, dia akan terus memanggil dirinya sendiri tanpa ada akhirnya


// for(var i = 10; i > 0; i--){
//     console.log(i);
// }
// looping diatas bisa di ubah menjadi rekursif dengan cara

// basecase
// function angka(a){
//     if (a === 0) {
//         return;
//     }
//     console.log(a);
//     return angka(a-1);
// }
// angka(6);


// faktorial
function angka1(a){
    var hasil = 1;
    for (var i = a; i > 0; i--){
        console.log(i);
        
        hasil *= i;
    }
    return hasil;
}

angka1(10);

// function angka(n){
//     console.log(n)
//     if ( n === 1 )return;
//     return n*angka(n-1);

// }
// angka(10);