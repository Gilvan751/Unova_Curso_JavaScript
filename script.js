soma(15);

function soma(limite) {
    let multiploTres = 0;
    let multiploCinco = 0;
    for (i = 0; i <= limite; i++){
        if (i % 3 === 0 )
            multiploTres += i;
        if(i % 5 === 0)
            multiploCinco += i;
        }
    console.log(multiploTres + multiploCinco);
}

