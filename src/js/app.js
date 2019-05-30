// La funcionalidad de tu proyecto
window.onclick = (event) => {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};