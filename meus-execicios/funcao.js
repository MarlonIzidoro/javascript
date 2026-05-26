// Aprendendo a usar loops e switch case

/*for (var i = 10; i > 0; i--) {
    console.log(i);
} */

/* var i = 10

while (i > 0) {
    console.log(i);
    i--
} */



function numeroRomano(num) {
    const I = 1;
    const II = 2;
    const III = 3;
    const IV = 4;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;

    switch (num) {  
        case "I":
            console.log(I);
            break;
        case "II":
            console.log(II);
            break;
        case "III":
            console.log(III);
            break;
        case "IV":
            console.log(IV);
            break;
        case "V":
            console.log(V);
            break;
        case "X":
            console.log(X);
            break;
        case "L":
            console.log(L);
            break;
        case "C":
            console.log(C);
            break; 
        case "D":                                     
            console.log(D);
            break;
        case "M":
            console.log(M);
            break;
        default:
            console.log("Número romano inválido");
    }
}

numeroRomano("M"); 
numeroRomano("D"); 
numeroRomano("III");





