/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

true && console.log("moo");
// Output: "moo"
// This is because the && operator is a short-circuit operator, meaning it will evaluate the first operand, and since it's true, it will proceed to evaluate the second one, printing "moo" to the console.

false && console.log("moo moo?")
// No output
// This is because the && operator is a short-circuit operator, meaning it will only evaluate the first operand, and if it's false, it won't evaluate the second one.

true || console.log("hello friend");
// No output
// This is because the first condition is true, so it doesn't need to evaluate the second condition.

false || console.log("bye friend");
// Output: "bye friend"
// This is because the first condition is false, so it evaluates the second condition and logs "bye friend."
