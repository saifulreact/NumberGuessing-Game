    // ===================== variable part start=================================
    
let show                         =document.querySelector('.show')
let error                         =document.querySelector('.error')
let player_one                    =document.querySelector('.player_one')
let player_one_input              =document.querySelector('.player_one_input')
let player_one_button             =document.querySelector('.player_one_button')
let player_two                    =document.querySelector('.player_two')
let player_two_input             =document.querySelector('.player_two_input')
let player_two_button            =document.querySelector('.player_two_button')
 
// =========================== variable part end===================================

player_one_button.addEventListener('click',()=>{
    if(player_one_input.value== ''){
       error.innerHTML=('faka rakha jabe na')
    }else{
        if(player_one_input.value>10){
            error.innerHTML=('dos er boro deya jabe na')
            
        }else{
           error.innerHTML= ''
           show.innerHTML= 'player_two'
           player_one.style ='display:none;'
           player_two.style='display:block;'
         
        }
    }
    
})

// ================================== player Two==============================

player_two_button.addEventListener('click',()=>{
    if(player_two_input.value== ''){
        error.innerHTML=('write something')
    }else{
       if( player_two_input.value>10){
        error.innerHTML=('write under ten')
       }else{
        error.innerHTML= ''
        if(player_one_input.value==player_two_input.value){
            show.innerHTML= 'player one win'
        }   else{
            show.innerHTML='player two win'
        }
       }
    }
})


