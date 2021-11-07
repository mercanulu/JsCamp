//1000'e kadarki tüm asal sayıları listeleyen program
console.log("------1-1000 Arası Asal Sayı Listesi-----")
function primeNumbers() {
    for(let i=2;i<1000;i++){
        let isPrime=true
        for(let j=2;j<i;j++){
            if(i%j==0)
            isPrime=false
        }
        if(isPrime)
         console.log(i)
    }
}
primeNumbers()