


var u = true;
while (u){
// menangkap pilihan dari user

    var p = prompt('AYO MAIN SAMA TANTE SELY \n pilih : \n1.gajah \n2.semut \n3.orang');

    // menangkap pilihan komputer
    // membangkitkan bilangan random

var comp = Math.random();

console.log(comp)

if(comp < 0.34) {
    comp = 'semut';
}else if (comp >= 0.34 && comp < 0.55){
    comp = 'orang';
}else {
    comp = 'gajah';
}

var hasil = '';
// menentukan rules
if (p == comp){
    hasil = 'seri';
}else if (p == 'gajah'){
    hasil = (comp == 'orang') ? 'menang!' : 'kalah!';
}else if (p == 'orang'){
    hasil = (comp == 'semut') ? 'menang' : 'kalah';
}else if (p == 'semut'){
    hasil = (comp == 'gajah')? 'menang!' : 'kalah!';
}else {
    hasil = 'memasukan pilihan yang salah';
}

alert('kamu memilih : '+p+' dan tante sely memilih : '+comp+' maka kamu '+hasil);

u = confirm('mau main lagi sama tante ?')
}

 alert('yahh tante sedih')