var ulang = true;
while (ulang){
    for ( var i = 2; i > 0; i--  ) {


        
// membuat pilihan angka
var a = prompt('ayo main tebak angka : \n pilih angka dari 1-10');

// menangkap pilihan komputer
// membuat angka random
var comp = Math.random();


if (comp < 0.10){
    comp = 1;
}else if (comp >= 0.10 && comp < 0.20) {
    comp = 2;
}else if (comp >= 0.20 && comp < 0.30){
    comp = 3;
}else if (comp >= 0.30 && comp < 0.40){
    comp = 4;
}else if (comp >= 0.40 && comp < 0.50){
    comp = 5;
}else if (comp >= 0.50 && comp < 0.60){
    comp = 6;
}else if (comp >= 0.60 && comp < 0.70){
    comp = 7;
}else if (comp >= 0.70 && comp < 0.80){
    comp = 8;
}else if (comp >= 0.80 && comp < 0.90){
    comp = 9;
}else {
    comp = 10;
}

hasil = '';
if (a == comp ) {
    hasil = 'jawaban anda benar '+comp;

}else {
    hasil = 'jawaban anda kurang tepat \n kesempatan anda tinggal '+i;
}

alert(hasil);




}
ulang = confirm('mau bermain lagi ?');
}

alert('terimakasih telah bermain :) ');


