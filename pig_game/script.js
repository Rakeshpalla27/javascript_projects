'use strict';
const score1=document.querySelector("#score--0");
const score2=document.getElementById("score--1");
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const current1=document.getElementById("current--0");
const current2=document.getElementById("current--1");
const diceele=document.querySelector('.dice');
const btnroll=document.querySelector('.btn--roll');
const btnnew=document.querySelector('.btn--new');
const btnhold=document.querySelector('.btn--hold');


//initialization
score1.textContent=0;
score2.textContent=0;
diceele.classList.add('hidden');
let scores=[0,0];
let currentscore=0;
let totalscore=0;
let activeplayer=0;
let playing=true;

const switchplayer=function(){
    currentscore=0;
    document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    activeplayer = activeplayer===0? 1: 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}

btnroll.addEventListener('click',function(){
    //generating diceno
    if(playing){
    const dice=Math.trunc(Math.random()*6)+1;
    //display dice
    diceele.classList.remove('hidden');
    diceele.src=`dice-${dice}.png`;
    // check dice is not 1
    if(dice!==1){
       //add dice to current score 
       currentscore+=dice;
       // current1.textContent=currentscore;(changed below based on active player)
       document.getElementById(`current--${activeplayer}`).textContent=currentscore;
       
    }
    else{
        
          switchplayer();
    //switch player
    }
}

});

btnhold.addEventListener('click',function(){
    if(playing){

   
    //1.add currentscore to activeplayer total score
    scores[activeplayer]+=currentscore;
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];

    //2.check if activeplayer score>=100
    
    if(scores[activeplayer]>=100){
        //finish game
        playing=false;
        diceele.classList.add('hidden');
        console.log(activeplayer);
        console.log(document.querySelector(`player--${activeplayer}`));
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }
    else{
        switchplayer();
    //switch to next player
    }
    
}
    
});

btnnew.addEventListener('click',function(){
    currentscore=0;
    scores[0]=0;
    scores[1]=0;
    playing=true;
    activeplayer=0;
    score1.textContent=0;
    score2.textContent=0;
    current1.textContent=0;
    current2.textContent=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
});




