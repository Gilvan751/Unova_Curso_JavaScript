
verificadorVelocidade(130);


function verificadorVelocidade(velocidade) {
    const valorVelocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= valorVelocidadeMaxima )
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - valorVelocidadeMaxima ) / KmPorPonto)) ;
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos ', pontos);
    }
    
    
}