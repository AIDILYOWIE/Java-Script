// DOM SECTION
// document.getElementById()   (untuk mencari elemen by id dari document)
const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "black";
judul.innerHTML = "Melisa Fais";

// document.getElementByTagName()  (untuk mencari elemen" yang mempunyai tag contoh = h1, p, a, div)
// dia mengembalikan HTMLCollection
const section = document.getElementsByTagName("section");

for (let i = 0; i < section.length; i++) {
  section[i].style.backgroundColor = "pink";
}

// document.getElementByClassName()  (untuk mencari elemen" dengan className)
// mengembalikan HTMLCollection 
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "hallo semua";
