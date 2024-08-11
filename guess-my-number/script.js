'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="Correct number";
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;

    document.querySelector('.number').textContent="?";
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').style.width="15rem";
    document.querySelector('.guess').value=" ";
    document.querySelector('.score').textContent=score;
    
})



document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent="* NO number";
        //when there is no input
    }
    else if(guess===secretnumber) {
        document.querySelector('.message').textContent="Correct number";
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector('.number').style.width="30rem";
        document.querySelector('.number').textContent=secretnumber;
        if(highscore<score){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
        
        //when player wins

        
    }
    else if(guess>secretnumber){
        if(score>1){
        document.querySelector('.message').textContent="Too High";
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="U lost the game";
            document.querySelector('.score').textContent=0;
            document.querySelector('body').style.backgroundColor="#ff0000";
            
        }
    }
    else if(guess<secretnumber){
        if(score>1){
        document.querySelector('.message').textContent="Too Low";
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="U lost the game";
            document.querySelector('.score').textContent=0;
            document.querySelector('body').style.backgroundColor="#ff0000";
        }
    }
    
});