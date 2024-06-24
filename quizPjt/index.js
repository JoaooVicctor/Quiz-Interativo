
// Alternativas
let alt1 = document.querySelector('.alternativa-1')
let alt2 = document.querySelector('.alternativa-2')
let alt3= document.querySelector('.alternativa-3')
let alt4= document.querySelector('.alternativa-4')
let alt5= document.querySelector('.alternativa-5')
let alt6= document.querySelector('.alternativa-6')
let alt7= document.querySelector('.alternativa-7')
let alt8= document.querySelector('.alternativa-8')
let alt9= document.querySelector('.alternativa-9')

let pontuacao = 0



// Perguntas
let big = document.querySelector('.big-one')
let big2 = document.querySelector('.big-one2')
let big3 = document.querySelector('.big-one3')
let res = document.querySelector('.big-one4')

// Primeira pergunta 

function clicado1(){
    let alt1 = document.querySelector('.alternativa-1')
    let big = document.querySelector('.big-one')
    let big2 = document.querySelector('.big-one2')
    pontuacao += 10

    setTimeout(function(){ 
        big.style.display = 'none' 
        big2.style.display = 'block'
        somarValor() 
    },100)
}
clicado1()

function clicado2(){
    let alt2 = document.querySelector('.alternativa-2')
    let big = document.querySelector('.big-one')
    let big2 = document.querySelector('.big-one2')
    pontuacao += 50
     
    setTimeout(function(){ 
        big.style.display = 'none'
        big2.style.display = 'block'
        somarValor()  
    },100)
}
clicado2()

function clicado3(){
    let alt3 = document.querySelector('.alternativa-3')
    let big = document.querySelector('.big-one')
    let big2 = document.querySelector('.big-one2')
    pontuacao += 10
    
    setTimeout(function(){ 
        big.style.display = 'none' 
        big2.style.display = 'block'
        somarValor() 
    },100)
}
clicado3()

// Função da segunda pergunta 

function clicado4(){
    let alt4= document.querySelector('.alternativa-4')
    let big2 = document.querySelector('.big-one2')
    let big3 = document.querySelector('.big-one3')
    pontuacao += 50

    setTimeout(function(){ 
        big2.style.display = 'none' 
        big3.style.display = 'block'
        somarValor()
    },100)
}

function clicado5(){
    let alt5= document.querySelector('.alternativa-5')
    let big2 = document.querySelector('.big-one2')
    let big3 = document.querySelector('.big-one3')
    pontuacao += 10
    
    setTimeout(function(){ 
        big2.style.display = 'none' 
        big3.style.display = 'block'
        somarValor()
    },100)
}

function clicado6(){
    let alt6= document.querySelector('.alternativa-6')
    let big2 = document.querySelector('.big-one2')
    let big3 = document.querySelector('.big-one3')
    pontuacao += 10
    
    setTimeout(function(){ 
        big2.style.display = 'none'
        big3.style.display = 'block' 
        somarValor()
    },100)
}

// Função da terceira pergunta

function clicado7(){
    let alt7= document.querySelector('.alternativa-7')
    let big3 = document.querySelector('.big-one3')
    let res = document.querySelector('.big-one4')
    pontuacao += 101

    setTimeout(function(){
        big3.style.display = 'none'
         res.style.display = 'block'
         somarValor()
    },100)
}

function clicado8(){
    let alt8= document.querySelector('.alternativa-8')
    let big3 = document.querySelector('.big-one3')
    let res = document.querySelector('.big-one4')
    pontuacao += 10

    setTimeout(function(){
        big3.style.display = 'none'
         res.style.display = 'block'
         somarValor()
    },100)
}

function clicado9(){
    let alt9= document.querySelector('.alternativa-9')
    let big3 = document.querySelector('.big-one3')
    let res = document.querySelector('.big-one4')
    pontuacao += 50
    

    setTimeout(function(){
        big3.style.display = 'none'
        res.style.display = 'block'
        somarValor()
    },100)
}

   

    function somarValor() {
        var result = document.getElementById('pontuacao'); // Elemento onde você deseja exibir a pontuação
        result.innerHTML = pontuacao ;
      }



