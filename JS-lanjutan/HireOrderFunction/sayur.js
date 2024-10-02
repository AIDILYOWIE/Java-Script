// mengambil elemen sayur dan buah
const sayur = Array.from(document.querySelectorAll("[data-sayur]"));
const buah = Array.from(document.querySelectorAll("[data-buah]"));

// ambil semua stock sayur
function stockSayur() {
  let sSayur = sayur

    .map((item) => item.dataset.sayur)

    // ubah stock menjadi parseFLoat
    .map((part) => parseFloat(part))

    // jumlahkan semua stock sayur yang ada
    .reduce((a, b) => a + b);
  // masukan ke dom
  const tSayur = document.querySelector(".stock-sayur");
  // tampilkan semua sayur

  // tampilkan semua stock sayur
  tSayur.textContent = `${sSayur} Stock`;
}

// ambil semua stock buah
function stockBuah() {
  let sBuah = buah

    .map((item) => item.dataset.buah)

    // ubah stock menjadi float
    .map((part) => parseFloat(part))

    // jumlahkan semua stock
    .reduce((a, b) =>  a + b);

  // masukan ke dom
  const tBuah = document.querySelector(".stock-buah");

  // tampilkan semua stock buah
  tBuah.textContent = `${sBuah} Stock`;
}

stockSayur();
stockBuah();
// console.log(sSayur);
