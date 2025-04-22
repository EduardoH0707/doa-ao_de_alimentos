document.addEventListener("DOMContentLoaded", function () {
    const line = document.getElementById("line");
    const navItems = document.querySelectorAll(".nav-li");
    const activeNav = document.querySelector(".active-nav");

    if (activeNav) {
        line.style.width = activeNav.offsetWidth + "px";
        line.style.marginLeft = activeNav.offsetLeft + "px";
    }

    navItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            line.style.width = this.offsetWidth + "px";
            line.style.marginLeft = this.offsetLeft + "px";
        });
    });

    document.querySelector("nav").addEventListener("mouseleave", function () {
        if (activeNav) {
            line.style.width = activeNav.offsetWidth + "px";
            line.style.marginLeft = activeNav.offsetLeft + "px";
        }
    });

    // Função para verificar se o usuário está logado
    function checkLogin() {
        const user = JSON.parse(localStorage.getItem("usuario"));
        const loginLink = document.getElementById("loginLink");
        const welcomeMessage = document.getElementById("welcomeMessage");

        if (user) {
            // Se o usuário estiver logado, exibe a mensagem de boas-vindas
            loginLink.textContent = "Sair"; // Muda o texto do link
            welcomeMessage.textContent = `Bem-vindo, ${user.name}! Você está logado como ${user.accountType === 'pessoaFisica' ? 'Pessoa Física' : 'Empresa'}.`;
        } else {
            // Se o usuário não estiver logado, exibe o link de login
            welcomeMessage.textContent = "Faça login para cadastrar suas doações.";
            loginLink.textContent = "Entrar"; // Garante que o link mostre 'Entrar' se não estiver logado
        }

        // Adiciona funcionalidade ao link "Entrar" ou "Sair"
        loginLink.addEventListener("click", function(event) {
            event.preventDefault(); // Previne o comportamento padrão de navegação

            if (user) {
                // Se já estiver logado, remove os dados do localStorage e redireciona para a página de login
                localStorage.removeItem("usuario");
                window.location.href = "lg.html"; // Redireciona para login
            } else {
                window.location.href = "lg.html"; // Redireciona para login
            }
        });
    }

    // Chama a função para verificar o login quando a página carregar
    checkLogin();
});
