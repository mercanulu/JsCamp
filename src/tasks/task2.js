//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan program
function friendNumbers(number1,number2) {
    let total1=1
    let total2=1
    let bigNumber
    let i=2
    if(number1>number2){
        bigNumber=number1
    }
    else
    bigNumber=number2
    while(i<=bigNumber/2){
        if(number1%i==0){
            total1=total1+i
        }
        if(number2%i==0){
            total2=total2+i
        }
        i++
    }
    if(number1==total2 && number2==total1){
        console.log("arkadaş sayılardır")
    }
    else
    console.log("arkadaş değiller")


}
friendNumbers(5,10)
friendNumbers(17296,18416)
friendNumbers(220,284)
