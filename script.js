 
 let btn=document.querySelector('button');
 btn.addEventListener('click',inputMsg)

function inputMsg(){
let name=prompt('Studant Name')
btn.textContent="your name :"+name;


}


