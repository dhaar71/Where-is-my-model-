let openbtn = document.getElementById('open-btn');
let modalcontainer = document.getElementsByClassName('modal-container');
let closebtn = document.getElementsByClassName('close-btn');

openbtn.addEventListener('click', function(){
    modalcontainer.style.display = 'none';
});

closebtn.addEventListener('click',function(){
    modalcontainer.style.display='none';
});

window.addEventListener('click', function(e){
    if(e.target === modalcontainer){
        modalcontainer.style.display = 'none';
    }
});