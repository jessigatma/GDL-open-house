function showModal(){
    document.getElementById("modal").style.display = 'block';
    
    }
    document.getElementById("becomeDriver").addEventListener('click',showModal);
   

    function showModalR(){
        document.getElementById("modalRegister").style.display='block';
    }
    document.getElementById("userRegister").addEventListener('click',showModalR);

    
    function hiddenModal(){
        document.getElementById("modal").style.display='none';
        document.getElementById("modalRegister").style.display='none';
    }
    document.querySelector(".close").addEventListener('click',hiddenModal);
    

   