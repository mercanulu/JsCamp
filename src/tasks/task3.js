//1000'e kadarki tüm mükemmel sayıları listeleyen program
function perfectNumbers() {
    let number=1
    console.log("------1-1000 Arası Mükemmel Sayı Listesi-----")
    for(let number=1;number<=1000;number++){
        let total=0;
        for(let i=1;i<number;i++){
            if(number%i==0)
            total+=i
        }
        if(total==number)
        
        console.log(number);
    }    
}
perfectNumbers()
