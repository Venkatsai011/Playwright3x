let temp=35;

let feel=(temp>=40)?"Veryhot":
         (temp>=30)?"Hot":
         (temp>=20)?"Warm":
         (temp>=10)?"Cool":"Cold";
        
        console.log(`The temperature is ${temp} and it feels ${feel}`);