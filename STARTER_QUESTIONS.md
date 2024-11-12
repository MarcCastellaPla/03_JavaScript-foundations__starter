# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
javascript is a programming language, which allows you to implement complex features on web pages.
Some examples of these complex features are displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes etc.
```

## About values

### What is a primitive value?

```
Primitive values are data that are stored directly in a variable. These include strings, null, undefined, and numbers.
When we assign a primitive value to a variable, a copy of that value is created and stored in memory. Any changes made to the variable do not affect the original.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
String: In any computer language, a String is a sequence of characters used to represent text. For example, "Hello world".
Number: In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format. For example: 64.
BigInt: BigInt is a numeric data type that can represent integers in arbitrary precision format. For example, 0o377777777777777777.
Boolean: A boolean is a logical data type that can only have the values true or false. For example: true.
Undefined: Undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments. For example: undefined.
Symbol: Symbol is a built-in object whose constructor returns a symbol primitive, which is guaranteed to be unique. Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add. An example of a symbol would be "const symbolExample = Symbol('foo');".
Null: A null value represents a reference that points, generally intentionally, to a non-existent or invalid object or address. For example: null.
```

## About variables

### What is a variable in JS?

```
A variable is a container for a value, like a string we might use in a sentence, or a number we might use as part of a sentence.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
There are three ways to define a variable in JS:

var: The var statement declares a variable, optionally initializing it to a value.

let: The let statement declares a variable, optionally assigning a value.

const: The const statement declares a variable, assigning a value that cannot be reassigned.
```

### Which are the most used var naming conventions in JS?

```
camelCase: It is commonly used for naming variables. For example "variableName" or "userEmail".

Boolean variables should use "is" or "has" as prefixes, making it clear that they represent a true or false condition. For example: "isLogged", "hasEnoughMoney".

Short identifiers: Using short identifiers and avoiding non-common abbreviations is a commonly used convention. Good variable names are usually between 3-10 characters, but that's only a hint since they must be descriptive. For example, "accelerometer" is better than "acclmtr".

```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
Equal (==): Returns true if the operands are equal.

Example:
let isVerified = true;
let hasSubscription = 1;
console.log(isVerified == hasSubscription); // Output: true (1 is truthy, so it’s coerced to true)

Not equal (!=): Returns true if the operands are not equal.

Example:
let isVerified = true;
let hasSubscription = 0;
console.log(isVerified != hasSubscription); // Output: true (0 is falsy, so it’s coerced to false)

Strict equal (===): Returns true if the operands are equal on the same type.

Example:
let isPremiumUser = false;
let isTrialActive = 0;
console.log(isPremiumUser === isTrialActive); // Output: false (boolean vs number, different types)


Strict not equal (!==): Returns true if the operands are of the same type but not equal, or are a different type.

Example:
let isVerified = true;
let hasSubscription = "true";
console.log(isVerified !== hasSubscription); // Output: true (boolean vs string, different types)

Greater than (>): Returns true if the left operand is greater than the right operand.

Example:
let userAge = 25;
let minimumAge = 18;
console.log(userAge > minimumAge); // Output: true (25 is greater than 18)


Greater than or equal(>=): Returns true if the left operand is greater or equal to the right operand.

Example: 

let userAge = 25;
let minimumAge = 25;
console.log(userAge >= minimumAge); // Output: true (25 is equal to 25)

Less than (<): Returns true if the left operand is less than the right operand.

Example:
let userAge = 25;
let minimumAge = 30;
console.log(userAge < minimumAge); // Output: true (25 is less than 30)

Less than or equal (<=): Returns true if the left operand is less than or equal to the right operand.

Example:
let userAge = 30;
let minimumAge = 30;
console.log(userAge <= minimumAge); // Output: true (30 is equal to 30)

```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
Logical AND: Usage (&&): (expr1 && expr2): Returns expr1 if it can be converted to false, otherwise, returns expr2. When it is used with boolean values,
&& returns true if both operands are true, otherwise, returns false.

Example:

// Boolean usage
let isVerified = true;
let hasSubscription = false;
console.log(isVerified && hasSubscription); // Output: false

// Non-Boolean usage
console.log(-5 && "JavaScript"); // Output: "JavaScript" (-5 is truthy)
console.log(0 && "Code"); // Output: 0 (0 is falsy)


Logical OR: Usage (||): (expr1 || expr2): Returns expr1 if it can be converted to true, otherwise, returns expr. When it's used with Boolean values, || returns true if either operand is true, if both are false, returns false.

Example:

// Boolean usage
let isPremiumUser = false;
let isTrialActive = true;
console.log(isPremiumUser || isTrialActive); // Output: true

// Non-Boolean usage
console.log(0 || "Developer"); // Output: "Developer" (0 is falsy)
console.log(false || "Engineer"); // Output: "Engineer"



Nullish coalescing operator (??): Usage: (expr1 ?? expr2): Returns expr1 if it's neither null nor undefined; otherwise, returns expr2.

Example:

let userEmail = undefined;
let defaultEmail = "default@example.com";
console.log(userEmail ?? defaultEmail); // Output: "default@example.com"

let userAge = 25; // 25 is not null or undefined
console.log(userAge ?? 30); // Output: 25



Logical NOT (!): Usage: (!expr): Returns false if its single operand can be converted to true; otherwise, returns true.

Example:

// Boolean usage
let isOnline = true;
console.log(!isOnline); // Output: false

// Non-Boolean usage
console.log(!123); // Output: false (123 is truthy)
console.log(!""); // Output: true (empty string is falsy)

```
