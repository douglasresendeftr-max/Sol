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

**Assunto:** <em uma frase, do que este site trata>
**Equipe:** <Nome 1> · <Nome 2> · <Nome 3> · <Nome 4> · <Nome 5> · <Nome 6>
**Disciplina:** ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP
**Centro Universitário Newton Paiva · 2026/2**

---

## Sobre o projeto

<Dois parágrafos, no máximo.>

<O primeiro diz **o que é** e **para quem é**: quem visita este site, e o que
essa pessoa vem fazer aqui. "Um site para a Padaria do Bairro, onde o cliente
vê os produtos do dia e encomenda bolo de aniversário.">

<O segundo diz o que o site vai ter até o fim do semestre — as páginas, o
formulário, o que será gravado no banco. É um plano, não uma promessa: ele
pode mudar, e vocês atualizam este arquivo quando mudar.>

---

## Identidade visual

*Estas são as decisões que o `frontend/css/estilo.css` aplica. Elas estão aqui
para quem lê o repositório entender **por que** o site tem essa cara — e para
a equipe não mudar de ideia a cada aula.*

### Paleta

| Papel | Cor | Por que esta |
|---|---|---|
| `--principal` | `#______` | <onde aparece, e o que ela comunica sobre o assunto> |
| `--sobre-principal` | `#______` | <o texto que fica em cima da principal> |
| `--apoio` | `#______` | <botões, destaques> |
| `--fundo` | `#______` | <o fundo da página> |
| `--superficie` | `#______` | <cartões e conteúdo> |
| `--texto` | `#______` | <a cor das letras> |

**Contraste conferido** em <https://webaim.org/resources/contrastchecker/>:

```
--texto sobre --superficie ......... __,_:1
--principal sobre --superficie ..... __,_:1
--sobre-principal sobre --principal  __,_:1
```

*Todos precisam ficar em 4,5:1 ou acima.*

### Tipografia

**Fonte:** <"Nome da fonte">, com plano B `<fonte de sistema>, sans-serif`
**Pesos:** 400 e <600 ou 700>
**Por que esta:** <uma frase ligando a fonte ao assunto>

**Escala:** `h1` 2.5rem · `h2` 1.75rem · `h3` 1.25rem · corpo 1rem

### Segundo tema

**Arquivo:** `frontend/css/tema-<nome>.css`
**O que é:** <em que situação este tema seria usado — modo escuro, uma data
comemorativa, uma campanha>

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

*Uma linha por integrante. É o mapa de quem procurar quando algo quebra — e
bate com o histórico de commits.*

| Integrante | Parte da folha de estilo |
|---|---|
| <Nome 1> | o `:root`, o `box-sizing` e o segundo tema |
| <Nome 2> | tipografia: web font, escala e entrelinha |
| <Nome 3> | página e conteúdo |
| <Nome 4> | cabeçalho e menu |
| <Nome 5> | tabela |
| <Nome 6> | formulário e rodapé |
