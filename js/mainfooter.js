// Função para incluir o rodapé
function includeFooter() {

    var footer = `
        <footer>

            <div class="logo-section ">
                <img src="img/logos/logo.webp" alt="Logo do Uai RolePlay" class="logo">
            </div>

            <div class="copyright-section">
                 
              <p>Copyright © 2023, <a href="https://www.pandoradata.com.br/" target="_blank">Pandora Data</a>, All rights reserved</p>
    
                <div>
                    <a href="politica-de-privacidade.html">Política de Privacidade</a>
                    <a href="termos-de-uso.html">Termos de Uso</a>
                    <a href="sobre-nos.html">Sobre Nós</a>
                </div>

            </div>

            </div>

  
            
        </footer>
    `;

    document.write(footer);
    // document.getElementById("current-year").textContent = new Date().getFullYear();

}

// Incluir o cabeçalho e o rodapé nas páginas
includeFooter();
