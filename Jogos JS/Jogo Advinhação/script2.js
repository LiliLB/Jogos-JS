// let valorMinimo;
// let valorMaximo;
// let numeroAleatorio;
// let chances;

// function avaliarPalpite(palpite) {
//   if (palpite === numeroAleatorio) {
//     alert('Parabéns, você ganhou!');

//     comecarJogo();
//   }
//   else {
//     chances --;

//     if (palpite > numeroAleatorio) {
//       alert(`O número sorteado é menor do que seu palpite! Você tem ${chances} chances.`);
//     }
//     else {
//       alert(`O número sorteado é maior do que seu palpite! Você tem ${chances} chances.`);
//     }

//     if (chances > 0) {
//       pedirPalpite();
//     }
//     else {
//       alert(`Você perdeu! O número sorteado era ${numeroAleatorio} e você errou por ${numeroAleatorio - palpite}.`);

//       comecarJogo();
//     }
//   }
// }

// function pedirPalpite() {
//   const novoPalpite = Number(prompt('Tente adivinhar o número!'));

//   avaliarPalpite(novoPalpite);
// }

// function comecarJogo() {
//   valorMinimo = Number(prompt('Digite o valor mínimo que poderá ser sorteado:'));
//   valorMaximo = Number(prompt('Digite o valor máximo que poderá ser sorteado:'));
//   numeroAleatorio = gerarAleatorio(valorMinimo, valorMaximo);
//   chances = 5;

//   console.log(numeroAleatorio);

//   pedirPalpite();
// }

// comecarJogo();