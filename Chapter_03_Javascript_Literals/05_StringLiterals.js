let String_literal1="Hello world"; //double quotes string literal
let String_literal2='Hello world'; //single quotes string literal
let String_literal3=`Hello world`; //backticks string literal
let String_literal4="Hello 'world'"; //double quotes string literal with single quotes inside
let String_literal5='Hello "world"'; //single quotes string literal with double quotes inside
let String_literal6=`Hello 'world'`; //backticks string literal with single quotes inside
let String_literal7=`Hello "world"`; //backticks string literal with double quotes inside
let String_literal8=`Hello 'world' and "universe"`; //backticks string literal with single and double quotes inside
let String_literal9 = `Hello
World`;//backticks string literal with new line
let name1='veMkat';
let String_literal10=`Hello world ${name1}`; //backticks string literal with variable interpolation
let String_literal11=`Hello world ${name1} and ${10+20}`; //backticks string literal with variable interpolation and expression
let String_literal12=`Hello world ${name1} and ${10+20} and ${name1.toUpperCase()}`; //backticks string literal with variable interpolation, expression and method call
let String_literal13=`name1 and ${name1.toLowerCase()}`; //backticks string literal with variable name and method call as string
console.log(String_literal13);