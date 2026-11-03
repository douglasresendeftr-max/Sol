
const saudacao = document.querySelector("#saudacao");

const hora = new Date().getHours();
let cumprimento;

if (hora < 12) {
    cumprimento = "Bom dia";
} else if (hora < 18) {
    cumprimento = "Boa tarde";
} else {
    cumprimento = "Boa noite";
}

saudacao.textContent = `${cumprimento}! Que bom ter você por aqui! Gostaria de trocar o tema do site?`;

// ----------------------------------------------------------

const botaoTema = document.querySelector("#botao-tema");
const temaNoite = document.querySelector("#tema-escuro");

function trocarTema() {
    temaNoite.disabled = !temaNoite.disabled;
    if(temaNoite.disabled) {
        botaoTema.textContent = "Tema Escuro";
    } else {
        botaoTema.textContent = "Tema Claro";
    }
}

botaoTema.addEventListener("click", trocarTema);



// ----------------------------------------------------------

const campoMensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

function contarCaracteres() {
    const restam = campoMensagem.maxLength - campoMensagem.value.length;
    contador.textContent = `Restam ${restam} caracteres`;
    if (restam < 50) {
        contador.classList.add("alerta");
        /*console.log("Restam menos de 50 caracteres");*/
    } else {
        contador.classList.remove("alerta");
    }
}

campoMensagem.addEventListener("input", contarCaracteres);



// ----------------------------------------------------------




const formulario = document.querySelector("form");
const aviso = document.querySelector("#aviso");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoNomePet = document.querySelector("#nomep");
const campoAssunto = document.querySelector("#assunto");


function configPlaceholder() {
    campoNome.placeholder = "Digite seu nome completo";
    campoEmail.placeholder = "Digite seu e-mail";
    campoNomePet.placeholder = "Digite o nome do seu pet";
}
configPlaceholder();

// ----------------------------------------------------------

function trocarDica() {
    switch (campoAssunto.value) {
        case "Creche":
            campoMensagem.placeholder = "Escreva observações sobre seu pet. Exemplo: pet bravo e precisa de atenção especial.";
            break;
        case "consulta":
            campoMensagem.placeholder = "Escreva observações sobre seu pet. Exemplo: pet bravo e precisa de atenção especial.";
            break;
        default:
            campoMensagem.placeholder = "Por gentileza, escreva o motivo do contato.";
    }
}

campoAssunto.addEventListener("change", trocarDica);
trocarDica();





// ----------------------------------------------------------



function conferirFormulario(evento) {
    evento.preventDefault();

    // const nome = campoNome.value.trim();
    
    if (campoNome.value.trim().length < 3 || campoNome.value.trim().length > 60) {
        aviso.textContent = "O nome precisa ter entre 3 e 60 letras.";
    } else if (campoAssunto.value === "outro" && campoMensagem.value.trim().length < 30) {
        aviso.textContent = "Por favor, informe o motivo do contato no campo \"Algo mais\" com no mínimo 20 caracteres.";
    } else if (campoMensagem.value.trim().length > 0 && campoMensagem.value.trim().length < 30) {
        aviso.textContent = "A mensagem é muito curta (mínimo 30 caracteres)!.";
    } else {
        aviso.textContent = "Recebemos a sua mensagem, em breve entraremos em contato!";
    }

}
 formulario.addEventListener("submit", conferirFormulario);









 