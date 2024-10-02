var ulang = true;
while (ulang) {
  
    var a = prompt("ayo main tebak angka : \n pilih angka dari 1-10");
    
      // membuat pilihan angka

      // menangkap pilihan komputer
      // membuat angka random

      var comp = Math.random();

      if (comp < 0.1) {
        comp = 1;
      } else if (comp >= 0.1 && comp < 0.2) {
        comp = 2;
      } else if (comp >= 0.2 && comp < 0.3) {
        comp = 3;
      } else if (comp >= 0.3 && comp < 0.4) {
        comp = 4;
      } else if (comp >= 0.4 && comp < 0.5) {
        comp = 5;
      } else if (comp >= 0.5 && comp < 0.6) {
        comp = 6;
      } else if (comp >= 0.6 && comp < 0.7) {
        comp = 7;
      } else if (comp >= 0.7 && comp < 0.8) {
        comp = 8;
      } else if (comp >= 0.8 && comp < 0.9) {
        comp = 9;
      } else {
        comp = 10;
      }

      hasil = "";
      if (a == comp) {
        hasil = "jawaban anda benar " + comp;
      } else {
        hasil = "jawaban anda kurang tepat \n kesempatan anda tinggal " + i;
      }

      alert(hasil);
    
  
    ulang = confirm("mau bermain lagi ?");
}

alert("terimakasih telah bermain :) ");
