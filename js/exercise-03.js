/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

function getTypeOf(value) {
    return typeof value;
}

const stringType = "Hello, I am a String";
const numberType = 123;
const booleanType = true;
const nullType = null;
const undefinedType = undefined;
console.log(getTypeOf(stringType));
console.log(getTypeOf(numberType));
console.log(getTypeOf(booleanType));
console.log(getTypeOf(nullType));
console.log(getTypeOf(undefinedType));
