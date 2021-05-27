const sayi1 = Number(prompt("Ilk sayiyi giriniz: "));
const islem = prompt("Islemi giriniz: ");
const sayi2 = Number(prompt("Ikinci sayiyi giriniz: "));
let sonuc;

if(islem == "+"){
    sonuc = sayi1 + sayi2;
}else if(islem == "-"){
    sonuc = sayi1 - sayi2;
}else if(islem == "*"){
    sonuc = sayi1 * sayi2;
}else if(islem == "/"){
    sonuc = sayi1 / sayi2;
}else{
    alert("Yanlis islem yaptiniz!");
}

console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`);