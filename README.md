<!--
  ============================================================================
  MODELO DE FOLHA DE ROSTO — README.md do projeto
  ============================================================================
  Copie este arquivo para a RAIZ do repositório da equipe com o nome
  README.md (a raiz é a pasta que contém frontend/ e backend/).

  O GitHub mostra o README automaticamente na página inicial do repositório:
  é a primeira coisa que qualquer pessoa vê, inclusive quem corrige.

  Troque tudo o que está entre < >. Apague este comentário e as instruções
  em itálico antes de entregar.
  ============================================================================
-->

# <Nome do projeto>

**Assunto:** Página inicial de um pet shop e hospital veterinario focado em apresentar o seu trabalho e planos futuros além de proporcionar uma forma fácil de contato.
**Equipe:** Miguel Amorim Otoni Ribeiro · Thiago Magalhães Costa · Rafael Diniz Carneiro Vieira · Kauan Gonçalvez de Almeida · Douglas Resende Furtado · alexander Pereira do Padro.
**Disciplina:** ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP
**Centro Universitário Newton Paiva · 2026/2**

---

## Sobre o projeto

O projeto é um site de Pet Shop e Hospital Veterinário, voltado para pessoas que possuem animais de estimação e procuram produtos, serviços e atendimento para seus pets. Quem acessar o site poderá conhecer melhor o Pet Shop, consultar os produtos disponíveis, conhecer os serviços e entrar em contato com a equipe.

A equipe está com a meta de colocar novos links para outras páginas e Mudar o cursor do mouse, substituindo a seta padrão por outra imagem.


---

## Identidade visual

*Estas são as decisões que o `frontend/css/estilo.css` aplica. Elas estão aqui
para quem lê o repositório entender **por que** o site tem essa cara — e para
a equipe não mudar de ideia a cada aula.*

### Paleta

| Papel | Cor | Por que esta |
|---|---|---|
| `--principal` | `#4D4DE9` | Cor mais chamativa para fazer contraste com a --sobre-principal |
| `--sobre-principal` | `#FAF49B` | Cor ligada a emoções mais alegres e leves. |
| `--destaque` | `#0bb4c0` | Cor diferenciada e que sai dos padrões da maioria dos sites. |
| `--fundo` | `#e4f3ff` | semelhante ao branco para transmitir calma. |
| `--superficie` | `#ECECEE` | Cor para separar o fundo do conteúdo sendo clara para transmitir calma também. |
| `--texto` | `#000000` | uma cor padrão para evitar exagero ou poluição visual. |

**Contraste conferido** em <https://webaim.org/resources/contrastchecker/>:

```
--texto sobre --superficie ......... 9,9:1
--principal sobre --superficie ..... 5,0:1
--sobre-principal sobre --principal  5,19:1
```

*Todos precisam ficar em 4,5:1 ou acima.*

### Tipografia

**Fonte:** "Poppins", com plano B `<fonte de sistema>, sans-serif`
**Pesos:** 400 e <600 ou 700>
**Por que esta:** Uma fonte clássica e segura para um site de informação de um estabelecimento.

**Escala:** `h1` 2.5rem · `h2` 1.75rem · `h3` 1.25rem · corpo 1rem

### Segundo tema

**Arquivo:** `frontend/css/tema-<nome>.css`
**O que é:** O segundo tema é ideal para quem optar por utilizar o site no modo escuro.

Para ligá-lo, tire o comentário da linha do `<link>` no `frontend/index.html`.
Ela vem **depois** do `estilo.css`.

---

## Como abrir

1. Abra **a pasta inteira** no VS Code (*Arquivo → Abrir Pasta*).
2. Abra `frontend/index.html` e clique em **Go Live** (extensão *Live Server*).

---

## Estrutura

```
.
├─ README.md                 esta folha de rosto
├─ frontend/                 tudo o que roda no navegador
│   ├─ index.html
│   ├─ css/
│   │   ├─ estilo.css        a folha do projeto
│   │   └─ tema-<nome>.css   o segundo tema: só variáveis
│   ├─ js/
│   │   └─ script.js         vazio até o ciclo 6
│   └─ img/
└─ backend/                  tudo o que roda no servidor
    ├─ config/
    │   └─ conexao.php       vazio até o ciclo 8
    └─ processa-contato.php
```

---

## Quem fez o quê


| Integrante | Parte da folha de estilo |
|---|---|
| Miguel Amorim Otoni Ribeiro | o `:root`, o `box-sizing` e o segundo tema |
| Thiago Magalhães Costa | tipografia: web font, escala e entrelinha |
| Rafael Diniz Carneiro Vieira | página e conteúdo |
| Kauan Gonçalvez de Almeida | cabeçalho e menu |
| Douglas Resende Furtado | tabela |
| Alexander Pereira do Padro | formulário e rodapé |


Miguel Amorim Otoni Ribeiro ; Thiago Magalhães Costa ; Rafael Diniz Carneiro Vieira ; Kauan Gonçalvez de Almeida ; Douglas Resende Furtado ; alexander Pereira do Padro.