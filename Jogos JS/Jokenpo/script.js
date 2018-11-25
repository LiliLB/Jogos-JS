let joquenpo = (function() {

    let 
    	nomeJogador, 
        escolhaJogador, 
        escolhaComputador, 
        vencedor, 
        pontosJogador, 
        pontosComputador;        

    let setNomeDoJogador = function (nome) {
        nomeJogador = nome;
    };
    
    let getNomeDoJogador = function () {
    	return nomeJogador;
    };

    let setEscolhaJogador = function (escolha) {
        escolhaJogador = escolha;
    };

    let getEscolhaJogador = function () {
        return escolhaJogador;
    };

    let setEscolhaComputador = function (escolha) {
        escolhaComputador = escolha;
    };

    let getEscolhaComputador = function () {

        let escolhaComputador = Math.round(Math.random() * 2);
        switch (escolhaComputador) {
            case 0:
                escolhaComputador = 'pedra';
                break;
            case 1:
                escolhaComputador = 'papel';
                break
            case 2:
                escolhaComputador = 'tesoura';
                break;
        } 
        setEscolhaComputador(escolhaComputador);
        return escolhaComputador;

    };

    let getVencedor = function () {

        if (escolhaJogador == 'pedra') {

            if (escolhaComputador == 'pedra') {
                vencedor = 'empate';
            } else if (escolhaComputador == 'papel') {
                vencedor = 'computador';
            } else if (escolhaComputador == 'tesoura') {
                vencedor = 'jogador';
            }

        } else if (escolhaJogador == 'papel') {

            if (escolhaComputador == 'pedra') {
                vencedor = 'jogador';
            } else if (escolhaComputador == 'papel') {
                vencedor = 'empate';
            } else if (escolhaComputador == 'tesoura') {
                vencedor = 'computador';
            }

        } else if (escolhaJogador == 'tesoura') {

            if (escolhaComputador == 'pedra') {
                vencedor = 'computador';
            } else if (escolhaComputador == 'papel') {
                vencedor = 'jogador';
            } else if (escolhaComputador == 'tesoura') {
                vencedor = 'empate';
            }

        } 

        if (vencedor == 'jogador' && nomeJogador != '') {
            vencedor = nomeJogador;
            if (getPontosJogador() != null) {
            	setPontosJogador(getPontosJogador() + 1);	
            } else {
            	setPontosJogador(1);
            }            
        } else if (vencedor == 'computador') {
        	if (getPontosComputador() != null) {
            	setPontosComputador(getPontosComputador() + 1);	
            } else {
            	setPontosComputador(1);
            } 
        }         

        return vencedor;

    };
    
    let getPontosComputador = function () {
    	return pontosComputador;
    };
    
    let setPontosComputador = function  (pontos) {
    	pontosComputador = pontos;
    };
    
    let getPontosJogador = function  () {
    	return pontosJogador;
    };
    
    let setPontosJogador = function  (pontos) {
    	pontosJogador = pontos;
    };

    return {
        setNomeDoJogador : setNomeDoJogador,
        getNomeDoJogador : getNomeDoJogador,
        setEscolhaJogador : setEscolhaJogador,
        getEscolhaComputador : getEscolhaComputador,
        getVencedor : getVencedor,
        setPontosComputador: setPontosComputador,
		setPontosJogador: setPontosJogador,
        getPontosComputador: getPontosComputador,
		getPontosJogador: getPontosJogador
    };

})();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

(function(){

    let nomeJogador = prompt("Olá, por favor digite aqui seu nome!");

    if (nomeJogador == '' || nomeJogador == null) {
        nomeJogador = 'Jogador';
    }

    joquenpo.setNomeDoJogador(nomeJogador);
    joquenpo.setPontosComputador(0);
    joquenpo.setPontosJogador(0);

    document.getElementById("btn-action").onclick = function () {

        let escolhaJogador = document.getElementById("opcaojogador").value;
        
        if (escolhaJogador == '') {
            alert('Escolha uma opção válida: Pedra, Papel ou Tesoura!');
            return false;
        }
        
        document.getElementById("cmp-jogador").innerHTML = capitalizeFirstLetter(escolhaJogador);
        joquenpo.setEscolhaJogador(escolhaJogador);
        document.getElementById("cmp-computador").innerHTML = capitalizeFirstLetter(joquenpo.getEscolhaComputador());
        document.getElementById("cmp-vencedor").innerHTML = capitalizeFirstLetter(joquenpo.getVencedor());
		document.getElementById("placar-jogador").value = joquenpo.getPontosJogador();
        document.getElementById("placar-computador").value =  joquenpo.getPontosComputador();
        document.getElementById("label-jogador").innerHTML =  joquenpo.getNomeDoJogador();
        document.getElementById("th-jogador").innerHTML =  joquenpo.getNomeDoJogador();
	
    };
    
})();
