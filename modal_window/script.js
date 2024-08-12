'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const close_modal=document.querySelector('.close-modal');
const open_modal=document.querySelectorAll('.show-modal');

const click=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    
}

for(let i=0;i<open_modal.length;i++){
    open_modal[i].addEventListener('click',function(){
        console.log('button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

close_modal.addEventListener('click',function(){
    click();
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');

});

// overlay.addEventListener('click',function(){
    // click();
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
// })
overlay.addEventListener('click',click);

document.addEventListener('keydown',function(e){
    if(e.key==="Escape" && !modal.classList.contains('hidden')){
        
            click();
        
    }
})