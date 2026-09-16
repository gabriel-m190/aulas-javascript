const letra = "z" ;

console.log('analisando se determinada letra é vogal ou consoante...');
console.log(`letra: ${letra}`);

switch(true) {
    case letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u':
        console.log('A letra analisada é uma vogal.')    
    break;
        default:
            console.log('A letra analisada é uma consoante');
}
