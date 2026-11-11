
const saudacao    = document.querySelector("#saudacao")      ;
const botaoApagar = document.querySelector('[type="reset"]') ;

const hora = new Date().getHours() ;
let cumprimento;

// ----------------------------------------------------------

const botaoTema = document.querySelector("#botao-tema")  ;
const temaNoite = document.querySelector("#tema-escuro") ;

function trocarTema() {
    temaNoite.disabled = !temaNoite.disabled;
    if(temaNoite.disabled) {
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>' ;
    }
}

botaoTema.addEventListener("click", trocarTema);

// ----------------------------------------------------------

if(saudacao != null)
{
    if (hora < 12) {
        cumprimento = "Bom dia"  ;
    } else if (hora < 18) {
        cumprimento = "Boa tarde";
    } else {
        cumprimento = "Boa noite";
    }


    saudacao.textContent = `${cumprimento}! Que bom ter você por aqui!`;
}

const campoMensagem = document.querySelector("#mensagem");
const contador      = document.querySelector("#contador");


function contarCaracteres() 
{
    const restam = campoMensagem.maxLength - campoMensagem.value.length;
    contador.textContent = `Restam ${restam} caracteres`;
    if (restam < 50) {
        contador.textContent = `Cuidado! Restam apenas ${restam} caracteres!`;
    }
    if (restam == 1) {
        contador.textContent = `Cuidado! Resta apenas ${restam} caracter!`   ;
    }

    if (restam == 0)
    {
        contador.textContent = `Limite de caracteres atingido` ;
    }
}

campoMensagem.addEventListener("input", contarCaracteres);

// ----------------------------------------------------------

const formulario   = document.querySelector("form")     ;
const aviso        = document.querySelector("#aviso")   ;
const campoNome    = document.querySelector("#nome")    || document.querySelector("#nomeCreche")    || document.querySelector("#nomeVeterinaria")    ;
const campoEmail   = document.querySelector("#email")   || document.querySelector("#emailCreche")   || document.querySelector("#emailVeterinaria")   ;
const campoNomePet = document.querySelector("#nomep")   || document.querySelector("#nomePetCreche") || document.querySelector("#nomePetVeterinaria") ;
const campoAssunto = document.querySelector("#assunto") || document.querySelector("#tipoAtendimento");

function configPlaceholder() 
{
    campoNome.placeholder    = "Digite seu nome completo" ;
    campoEmail.placeholder   = "Digite seu e-mail";
    campoNomePet.placeholder = "Digite o nome do seu pet" ;
}
configPlaceholder();

// ----------------------------------------------------------

if(campoAssunto != null)
{
    function trocarDica() 
    {
        switch (campoAssunto.value) 
        {
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
}

// ----------------------------------------------------------

function conferirFormulario(evento) 
{
    if (campoNome.value.trim().length < 3 || campoNome.value.trim().length > 60) 
    {
        evento.preventDefault();
        aviso.textContent = "O nome precisa ter entre 3 e 60 letras.";
    } 
    else 
    {
        if (campoNomePet.value.trim().length < 3 || campoNome.value.trim().length > 60) 
        {
            evento.preventDefault();
            aviso.textContent = "O nome do pet precisa ter entre 3 e 60 letras.";    
        } 
        else 
        {    
            if (campoMensagem.value.trim().length > 0 && campoMensagem.value.trim().length < 10) 
            {
                if(campoAssunto != null)
                {
                    if ((campoAssunto.value == "Outro" || campoAssunto.value == "Exame" || campoAssunto.value == "Cirurgia" ) && campoMensagem.value.trim().length < 30)
                    {
                        evento.preventDefault();
                        aviso.textContent = "A mensagem é muito curta (mínimo 30 caracteres)!.";
                    }
                    else
                    {
                        evento.preventDefault();
                        aviso.textContent = "A mensagem é muito curta (mínimo 10 caracteres)!.";
                    }
                }
                else
                {
                    evento.preventDefault();
                    aviso.textContent = "A mensagem é muito curta (mínimo 10 caracteres)!.";
                }
            } 
            else 
            {
                aviso.textContent = "Recebemos a sua mensagem, em breve entraremos em contato!";
            }
        }
    }
}
    formulario.addEventListener("submit", conferirFormulario);

    botaoApagar.addEventListener("click", () =>
    {
        aviso.textContent    = "";
        contador.textContent = `Restam 500 caracteres`;
    });

