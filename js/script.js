/* === Turns the menu hamburguer into X === */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// === Envio do formulário com EmailJS ===
emailjs.init("SEU_USER_ID");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o reload da página

    emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            alert("Erro ao enviar a mensagem: " + JSON.stringify(error));
        });
});
