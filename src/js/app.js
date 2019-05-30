
function showMenu(){
    document.getElementById("id01").style.display = 'block';
    }
    document.getElementById("menuBtn").addEventListener('click',showMenu);

function closeMenu(){
        document.getElementById("id01").style.display = 'none';
        }
        document.getElementById("btnCloseMenu").addEventListener('click',closeMenu);
