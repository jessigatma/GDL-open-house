function showModal() {
    document.getElementById("modal").style.display = 'block';

}
document.getElementById("becomeDriver").addEventListener('click', showModal);
document.getElementById("becomeDriver1").addEventListener('click', showModal);

function hiddenModal() {
    document.getElementById("modal").style.display = 'none';
   }
document.getElementById("close2").addEventListener('click', hiddenModal);

function showModalR() {
    document.getElementById("modalRegister").style.display = 'block';
}
document.getElementById("userRegister").addEventListener('click', showModalR);

function hiddenModal1(){
    document.getElementById("modalRegister").style.display = 'none';
}
document.getElementById("close1").addEventListener('click', hiddenModal1);

function showLogin() {
    document.getElementById("modalLogin").style.display = 'block';

}
document.getElementById("loginLink").addEventListener('click', showLogin);

function hiddenModal2() {
    document.getElementById("modalLogin").style.display = 'none';
   }
document.getElementById("close3").addEventListener('click', hiddenModal2);



function showMenu() {
    document.getElementById("id01").style.display = 'block';
}
document.getElementById("menuBtn").addEventListener('click', showMenu);

function closeMenu() {
    document.getElementById("id01").style.display = 'none';
}
document.getElementById("btnCloseMenu").addEventListener('click', closeMenu);