var cek = true;
while (cek) {
  var cek = prompt("CEK KODAM ONLINE \n masukan nama anda :");

  var comp = Math.random();
  console.log(comp);

  if (comp < 0.1) {
    comp = "iwak wader";
  } else if (comp >= 0.1 && comp < 0.2) {
    comp = "rondoni";
  } else if (comp >= 0.2 && comp < 0.3) {
    comp = "kontol ngaceng";
  } else if (comp >= 0.3 && comp < 0.4) {
    comp = "rondo nglawir";
  } else if (comp >= 0.4 && comp < 0.5) {
    comp = "rawarontek";
  } else if (comp >= 0.5 && comp < 0.6) {
    comp = "harimau putih";
  } else if (comp >= 0.6 && comp < 0.7) {
    comp = "ratu togel";
  } else if (comp >= 0.7 && comp < 0.8) {
    comp = "bujang mlarat";
  } else if (comp >= 0.8 && comp < 0.9) {
    comp = "timothy ";
  } else {
    comp = "wedos bodas";
  }

  var s = "";
  for (var i = 1; i < 1000; i++) {
    s += cek + " = " + comp;
    cek = console.log(cek + " = " + comp);
  }

  cek = confirm("HASIL KODAM : \n " + comp + "!!");
}

// alert()
