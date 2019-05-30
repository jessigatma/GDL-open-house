<<<<<<< HEAD
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
    

   
=======

function showMenu(){
    document.getElementById("id01").style.display = 'block';
    }
    document.getElementById("menuBtn").addEventListener('click',showMenu);

function closeMenu(){
        document.getElementById("id01").style.display = 'none';
        }
        document.getElementById("btnCloseMenu").addEventListener('click',closeMenu);
>>>>>>> 9e91533ded1fc8af07127a3fed37aa4650a7b26e
