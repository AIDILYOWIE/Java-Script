// contoh
// var hari = ['senin', 'selasa', 'rabu'];

// console.log(hari[0]);

// untuk melihat type dari array / variable
// console.log(typeof(hari));

// .length untuk melihat isi dari array tersebut
// console.log(hari.length);

// jumlah elemen tidak sama dengan index

// elemen pada array boleh beda tipe
// var hari = ['senin', 'selasa', 'rabu'];
// var mhs = ['taris', 'dwi', 'aidil'];
// var angka = ['10','34','5'];
// var myArr = ['teks',3,false];
// var func = function(){
//     alert('aku suka tarisa');
// };
// var myArr = ['teks',3,false,func];
// var myArr = ['teks',3,false,func,['tarisa','dwi']];
// console.log(myArr[4][0]);

// manipulasi array

// 1.menambah isi array
// var tarisa = [];
// tarisa[0] = "tarisa";
// tarisa[1] = "dwi";
// tarisa[3] = "aidil";
// tarisa[4] =  true;

// console.log(tarisa);

// 2.menghapus isi array
// var tarisa = ["tarisa", "dwi", "aidil"]
// tarisa [1] = undefined;
// console.log(tarisa);
// sebenarnya isi nya tidak hilang, hanya di gantikan

// 3.menampilkan isi array
// untuk menampilkan isi array kita butuh looping / juga bisa tidak
var tarisa = ["tarisa", "dwi", "aidil", "yojes"];
for (var i = 0; i < tarisa.length; i++){
    console.log(tarisa[i]);
}
// fungsi i untuk meminta ke array untuk menampilkan apa yang dia mau
// jika i = 0 maka, maka array tarisa akan menampilkan isinya yang index ke 0

// method pada array

// 1.join
// var tarisa = ["tarisa", "dwi", "aidil"];
// console.log(tarisa.join('-'));

// menambah / menghapus di akhir array
// 2.push
// tarisa.push('aku','yojes')

// 3.pop
// tarisa.pop()

//4. shift
// menghapus isi pada awal array
// tarisa.shift();

// 5.unshift
// menambah isi pada awal array
// tarisa.unshift('aku yojes')

// 4.splice
// splice(indexawal, mudihapusberapa, elemenbaru, elemenbaru2)
// tarisa.splice(0, 2, 'yojes', 'tarisa', 'dwi')

// 5.slice
// slice(awal, akhir)
// slice harus membuat var baru untuk ditampung
// var tarisa2 = tarisa.slice(0,1);
// console.log(tarisa2.join(' '));

// 6.foreach\
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// for ( var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// var trs = angka.forEach( function (t,r,i,s){
//     console.log(t,r,i,s);
// });

// untuk foreach tidak mengembalikan nilai
//
// console.log(tarisa.join(' '));

// 7.map
// var angka = [1,2,3,4,5,6,7,8,9,10];
// var angka2 = angka.map(function(e){
//     return e + 10;
// });
//     console.log(angka2.join(' - '));
// map bisa mengembalikan nilai array

// 8.sort
// mengurutkan nilai / isi array array
// var angka = [1,2,3,4,5,6,7,8,9]
// console.log(angka.join(' '))
// angka.sort();
// console.log(angka.join(' = '));
// var angka = [1,2,3,4,5,6,7,8,9,10,20,25]
// angka.sort()
// console.log(angka.join(' '))
// sort mengurutkan anngka belakang,
// jadi jika kalian ingin mengurutkan angka puluhan, klian bisa menggunakan function
// contoh
// angka.sort(function(a,b){
//     return a - b;
// })
// console.log(angka.join(' '))

// 9.filter
//bisa mancari banyak nilai
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 25];
// var angka2 = angka.filter(function (a) {
//   return a == 10;
// });
// alert(angka2.join(" "));

// 10.find
// find hanya bisa menemukan 1 nilai saja 
// dan find tidak bisa menemukan array 
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 25];
// var angka2 = angka.find(function (a) {
//   return a == 13;
// });
// alert(angka2)

