function showModal() {
    document.getElementById("modal").style.display = 'block';

}
document.getElementById("becomeDriver").addEventListener('click', showModal);
document.getElementById("becomeDriver1").addEventListener('click', showModal);

function showModalR() {
    document.getElementById("modalRegister").style.display = 'block';
}
document.getElementById("userRegister").addEventListener('click', showModalR);


function hiddenModal() {
    document.getElementById("modal").style.display = 'none';
}
document.getElementById("close2").addEventListener('click', hiddenModal);
document.getElementById("close1").addEventListener('click', hiddenModal);



function showMenu() {
    document.getElementById("id01").style.display = 'block';
}
document.getElementById("menuBtn").addEventListener('click', showMenu);

function closeMenu() {
    document.getElementById("id01").style.display = 'none';
}
document.getElementById("btnCloseMenu").addEventListener('click', closeMenu);