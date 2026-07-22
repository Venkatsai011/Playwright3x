console.log(""==0); //true null is always something and it is not 0 so loose comparision returns true
console.log(""===0); //false here we are using strict comparision so it returns false because they are not of same type
console.log(undefined==0); //false undefined is always something and it is not 0 so loose comparision returns false
console.log(undefined===0); //false here we are using strict comparision so it returns false because they are not of same type
console.log(NaN==NaN); //false NaN is not equal to anything even itself
console.log(NaN===NaN); //false here we are using strict comparision so it returns false because they are not of same type
console.log(NaN!=NaN); //true NaN is not equal to anything even itself
console.log(NaN!==NaN); //true here we are using strict comparision so it returns true because they are not of same type
console.log("0"==0); //true loose comparision returns true because "0" is converted to 0
console.log("0"===0); //false here we are using strict comparision so it returns false because they are not of same type
console.log("0"!=0); //false loose comparision returns false because "0" is converted to 0
console.log("0"!==0); //true here we are using strict comparision so it returns true because they are not of same type
console.log("0"==""); //false loose comparision returns false because "0" is not equal to ""
console.log("0"===""); //false here we are using strict comparision so it returns false because they are not of same type
console.log("0"!=""); //true loose comparision returns true because "0" is not equal to ""
console.log("0"!==""); //true here we are using strict comparision so it returns true because they are not of same type
console.log("0"==null); //false loose comparision returns false because "0" is not equal to null
console.log("0"===null); //false here we are using strict comparision so it returns false because they are not of same type
console.log("0"!=null); //true loose comparision returns true because "0" is not equal to null
console.log("0"!==null); //true here we are using strict comparision so it returns true because they are not of same type
