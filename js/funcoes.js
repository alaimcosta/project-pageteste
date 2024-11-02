function pagarCoffer() {

}

const carTeste = {
    make: 'Honda',
    model: 'Accord',
    year: 2025
};

//Teste
console.log('make' in carTeste) 
delete carTeste.make;
if('make' in carTeste === false) {
    carTeste.make = 'Freezer';
}
console.log(carTeste.make)