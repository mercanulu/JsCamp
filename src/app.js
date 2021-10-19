console.log("Merhaba Kodlama.io")
//js type safe değildir.
let dolarDun= 9.20
let dolarBugun= 9.30
{
    let dolarDun= 9.10
}
console.log(dolarDun)
const euroDun= 11.2
//euroDun= 11 //const değişkenlerin değeri değiştirilemez.
console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri= ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for(let i =0;i<konutKredileri.length;i++){
console.log("<li>"+konutKredileri[i]+"</li>")
}
{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Kredisi </li>
    <li>Kamu Konut Kredisi</li>
</ul> */}
console.log("</ul>")
console.log(konutKredileri)


