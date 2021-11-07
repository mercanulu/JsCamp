//istenilen kadar sayı parametre gönderebilen bir fonksiyonla sayıların asal olup olmadığı
function findPrime(... numbers) {
    
    for (let i =0 ; i< numbers.length; i++) {
       let isPrime=true
       if(numbers[i]<=1){
           console.log(numbers[i]+" Asal sayı değil")
           continue
       }
       for(let j=2;j<=numbers[i]/2;j++){
           if(numbers[i]%j==0){
               console.log(numbers[i]+" Asal sayı değil.")
               isPrime=false
               break
           }
       }
       if(isPrime){
           console.log(numbers[i]+" Asal sayı")
       } 
    }   
}
//findPrime(1,2,3)
findPrime(1,140,90,97,13,-173)
//findPrime(10,5,6,8,9,25,11,12)