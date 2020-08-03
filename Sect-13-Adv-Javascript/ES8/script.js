/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 154
ES7
***********************************************************/

// ES8 Has a few more features that were introduced in 2017:

// String padding:
// .padStart();
// .padEnd();

"turtle".padStart(10); // 10 spaces given after the first quote.

const fun = (a, b, c, d) => {
  console.log(a);
};

// Trailing commas now allowed in ES8
fun(1, 2, 3, 4); // Still valid JS

// Why would the above be useful? Because with very large parameter lists,
// coders will often separate their parameters line-by-line to keep it clean.
// also makes green and red difference markers in GitHub a lot more discernible.

const fun = (a, b, c, d) => {
  console.log(a);
};

fun(1, 2, 3, 4);
