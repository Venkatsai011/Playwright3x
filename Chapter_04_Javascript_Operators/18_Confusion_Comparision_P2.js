console.log("0"==undefined); //false loose comparision returns false because "0" is not equal to undefined
console.log("0"===undefined); //false here we are using strict comparision so it returns false because they are not of same type
console.log("0"!=undefined); //true loose comparision returns true because "0" is not equal to undefined
console.log("0"!==undefined); //true here we are using strict comparision so it returns true because they are not of same type
console.log(undefined==null); //true undefined and null are equal in loose comparision
console.log(undefined===null); //false here we are using strict comparision so it returns false because they are not of same type
console.log(null==0); //false null is always something and it is not 0 so loose comparision returns false
console.log(null===0); //false here we are using strict comparision so it returns false because they are not of same type
console.log(null>0); //false null is always something and it is not 0 so loose comparision returns false
console.log(null<0); //false null is always something and it is not 0 so loose comparision returns false
console.log(null>=0); //true null is always something and it is not 0 so loose comparision returns true
console.log(null==0 || null>0); //true null is always something and it is not 0 so loose comparision returns true
