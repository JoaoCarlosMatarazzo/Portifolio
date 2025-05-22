// === Menu hambúrguer (animação em X e mostrar/esconder menu) ===
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

// === Inicialização do EmailJS ===
emailjs.init("B1RtHr6CV4V5G1zNh"); // Public Key

// === Envio do formulário ===
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    emailjs.sendForm("service_zfh76f4", "template_zzgqklt", this)
        .then(function(response) {
            showSuccessMessage();
            document.getElementById("contact-form").reset(); // Limpa o formulário
        }, function(error) {
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
            console.error("Erro no envio do EmailJS:", error);
        });
});

// === Exibe a mensagem de sucesso ===
function showSuccessMessage() {
    const successMessage = document.getElementById("success-message");
    successMessage.classList.add("show");

    // Oculta automaticamente após 5 segundos
    setTimeout(() => {
        successMessage.classList.remove("show");
    }, 5000);
}
