let varA = 'A'; // Aponte para valor de B
let varB = 'B'; // Aponte para valor de C
let varC = 'C'; // Aponte para valor de A
let varA2 = varA;

varA = varB
varB = varC 
varC = varA2


console.log(varA, varB, varC)
