/*
- Gerar 5 números aleatórios;
- Concatenar os 5 números em uma string;
  Número aleatório: '14590'
- Pedir para o usuário tentar descobrir sua senha (que é o número aleatório)
  - Se o usuário digitar um número no local correto, colocar um 'O';
    Senha: '14590'
    Input: '24607'
    Saída: ' O   '
  - Se o usuário digitar um número que está no local errado, mas existe na string, colocar um '-';
    Senha: '14590'
    Input: '42607'
    Saída: '-    '
  - Se o usuário digitar um número que está no local errado, e não existe na string, colocar um 'X';
    Senha: '14590'
    Input: '42507'
    Saída: '-xOxx'
- O usuário precisa acertar a senha por completo;
- O usuário tem 10 tentativas de acerto;
*/

let senha = '';

for (let i = 0; i < 5; i ++) {
  senha += `${gerarAleatorio(0, 9)}`;
}

console.log(senha);

for (let i = 5; i >= 0; i --) {
  const palpite = prompt('Diga qual senha você acredita que foi sorteada. A senha precisa ter 5 digitos!');

  let saida = '';

  for (let j = 0; j < senha.length; j++) {
    let caractereSenha = senha[j];
    let caracterePalpite = palpite[j];

    if (senha === palpite) {
      break;
    }

    if (caractereSenha === caracterePalpite) {
      saida += 'O';
    }
    else {
      if (senha.includes(caracterePalpite)) {
        saida += '-';
      }
      else {
        saida += 'X';
      }
    }
  }

  console.log(saida);
}
