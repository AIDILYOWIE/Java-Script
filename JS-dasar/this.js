// membuat object
// var a = 10;
// var b = 30;
// var total = a + b;
// console.log(this.total);

// cara 1 - function declaration
// function yojes(){
//     console.log(this);
//     console.log('yojes epep');
// }
// this.yojes()
// this mengembalikan object global

// cara 2 - object literal
// var obj = { nama : 'tarisa', no : 18};
// obj.yojes = function(){
//     console.log(this);
//     console.log('yojes');
// }
//  obj.yojes();
//  this mengembalikan ini sendiri / function itu sendiri / object yang bersangkutan

// cara 3 - constructor
// function Yojes(nama, nomer, alamat) {
//   console.log(
//     (window.obj = {
//       nama: nama,
//       nomer: nomer,
//       alamat: alamat,
//     })
//   );
// }
// var tampil1 = new Yojes("yojes", 19, ["menggeng", "gelanglor", "sukorejo"]);
// var tampil2 = new Yojes("melisa", 19, ["menggeng", "gelanglor", "jenangan"]);
// this mengembalikan object yang baru di buat / mengembalikan new Yojes()

