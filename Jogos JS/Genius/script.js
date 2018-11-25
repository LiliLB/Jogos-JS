 let  game = (function(){ 
    function Genius(){
        if(!(this instanceof Genius)){
            return new Genius();
        }
        this.sequence = []; 
        this.digited = [];  
        this.currentConsumed = 0;  
        this.onWrongSequence = undefined; 
        this.onRightSequence = function(){
            if(this.currentConsumed >= this.sequence.length -1){
                this.onWin instanceof Function ? this.onWin(this.currentConsumed+1):'';
                return;
            }
            alert('Sequência seguinte');
            this.currentConsumed++;
            this.executeSequence();
        };
        this.onWin = undefined;    
        function init(){
         let  genius = this;      
         let  divs = document.getElementsByTagName("div");
            for (let  i = 0, max = divs.length; i < max; i++){
             let  div = divs[i];
                if(div.className.search("peca") >= 0){
                 let  peca = div;
                    peca.blink = function(){
                     let  peca = this;  
                        peca.toggle = true;  
                        window.clearInterval(peca.interval);
                        peca.interval = window.setInterval(function(){
                            if(peca.toggle){    
                                peca.beforeBlink instanceof Function ? peca.beforeBlink(peca, genius):''; 
                             let  sel = peca.getAttribute("sel");
                                peca.className = "peca " + sel;
                               
                                peca.toggle = false;
                            } else {
                             let  unsel = peca.getAttribute("unsel");
                                peca.className = "peca " + unsel;
                             
                                window.clearInterval(peca.interval);
                            
                                peca.afterBlink instanceof Function ? peca.afterBlink(peca, genius):'';                                
                            }   
                                             
                        }, 150);
                    };
                    peca.onmousedown = function(){
                    
                     let  sel = this.getAttribute("sel");
                        this.className = "peca " + sel;
                    };     
                    peca.onmouseup = function(){      
                     let  unsel = this.getAttribute("unsel");
                        this.className = "peca " + unsel;
                    };     
                    peca.ondragstart = peca.onmouseup;
                    peca.ondragover = peca.onmouseup;
                    peca.onblur = peca.onmouseup;   
                    peca.onclick = function(){
                         let  id = this.id.charAt(4);
                         id = window.parseInt(id);
                     
                        genius.digited.push(id);  
                 
                        if (genius.verify()===false){
                     
                            genius.onWrongSequence instanceof Function ? genius.onWrongSequence(genius.currentConsumed + 1):'';
                        } else {
                          
                            if (genius.digited.length === genius.currentConsumed + 1 ){
                       
                                genius.onRightSequence instanceof Function ? genius.onRightSequence():'';
                               
                                genius.digited = [];
                            } 
                        }
                    };
                }
            }  
        }; 
           init.call(this);
    };
    Genius.prototype.showAllSequence = function(){
     let  genius = this;
     let  pc = document.getElementById('peca'+genius.sequence[genius.currentConsumed]);
     let  i = genius.currentConsumed;
        pc.afterBlink = function(peca, genius){
    
            ++i;
         let  pc1 = document.getElementById('peca'+genius.sequence[i]);
         
            if (pc1 !== null){
          
                pc1.afterBlink = pc.afterBlink;
            
                   pc1.blink();
            }
        }
           pc.blink();
    };
    Genius.prototype.executeSequence = function(){
     let  genius = this;
     let  i = 0;
     let  pc = document.getElementById('peca'+ genius.sequence[i]);
        pc.afterBlink = function(peca, genius){
              ++i;
            if(i > genius.currentConsumed){
                return;
            }              
         let  pc1 = document.getElementById('peca'+genius.sequence[i]);
            if (pc1 !== null){
            
                pc1.afterBlink = pc.afterBlink;
                   pc1.blink();
            }
        }
           pc.blink();
    };
    Genius.prototype.verify = function(){
     let  ret = true;
        for (let  i = 0; i <= this.digited.length-1; i++ ){
         let  digitado = this.digited[i];
         let  original = this.sequence[i];
            
            ret = ret && (digitado === original);
            if (ret === false) {
                return false;
            }
        }
        return true;
    };
 let  genius=undefined;

    return{
        newGame:function(sequence, show){
         let  seq = sequence === undefined?1000:sequence;
            
            genius = new Genius();
            // for let  i = 0; i < seq; i++){
             for (let i = 0; i < seq; i++) {
             let  x = (Math.round(Math.random() * 4)) ;  
                if(x > 0 && x <= 4) {    
                    genius.sequence.push(x);
                }
            }
            
            if (show) {
                document.getElementById('sequencia').innerHTML = genius.sequence;
            } else {
                document.getElementById('sequencia').innerHTML = '';
            }   
            genius.executeSequence();    
        },
        showAllSequence:function()    {
            genius.showAllSequence();
        },
        defineOnWrongSequenceEvent:function(evt){
            genius.onWrongSequence = evt;    
        },
        defineOnWinEvent:function(evt){
            genius.onWin = evt;
        }
    }  
}());

window.onload = function(){ 
    document.getElementById("cmdNewGame").onclick = function(){
        if(window.confirm("Você está pronto?")){
         let  repet = document.getElementById("txtQtdRepeticoes").value;
         let  show =  document.getElementById("chkShowSequence").checked;
            game.newGame(repet, show);
            
            game.defineOnWrongSequenceEvent(
                function(quantidade){
                    alert('Sequencia errada ' + quantidade);             
                }
            );
            game.defineOnWinEvent(
                function(qtd){
                    alert('PARABÉNS! VOCÊ VENCEU GENIUS! \n\nacertou: ' + qtd);
                }
            );      
        }
    }
}
