var cek = true;
while(cek){
var cek = prompt('CEK KODAM ONLINE \n masukan nama anda :');

var comp = Math.random();


if (comp < 0.10){
    comp = 'iwak wader';
}else if (comp >= 0.10 && comp < 0.20) {
    comp = 'rondoni';
}else if (comp >= 0.20 && comp < 0.30){
    comp = 'kontol ngaceng';
}else if (comp >= 0.30 && comp < 0.40){
    comp = 'rondo nglawir';
}else if (comp >= 0.40 && comp < 0.50){
    comp = 'rawarontek';
}else if (comp >= 0.50 && comp < 0.60){
    comp = 'harimau putih';
}else if (comp >= 0.60 && comp < 0.70){
    comp = 'ratu togel';
}else if (comp >= 0.70 && comp < 0.80){
    comp = 'bujang mlarat';
}else if (comp >= 0.80 && comp < 0.90){
    comp = 'timothy ';
}else {
    comp = 'wedos bodas';
}

var s = ""
for(var i = 1; i < 1000; i++){
    s += cek + ' = '+comp;
    cek = console.log(cek + ' = '+comp);

}

cek = confirm('HASIL KODAM : \n '+comp+'!!');

}

// alert()