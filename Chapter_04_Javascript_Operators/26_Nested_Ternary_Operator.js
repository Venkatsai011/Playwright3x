let age=17;

// age >=18 means the guy/girl can go to bar
// age>=23 means the guy/girl can go to bar and drink alcohol and also can drive car

let Person_enjoy=age>18?(age>=23?"Drink":"No Drink"):"No Drink and no bar access";

console.log(Person_enjoy);

console.log(`Can venkat enjoy bar and drink alcohol? :${Person_enjoy}`);