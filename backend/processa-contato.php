<?php
/* ====================================================
 esse é o arquivo que recebe o formulário no ciclo 8
 ===================================================== */
/* Recebe o formulário e salva a mensagem no banco. */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Acesso permitido apenas pelo formulário.');
}

function escapar($valor) {
    return htmlspecialchars(
        is_string($valor) ? $valor : '',
        ENT_QUOTES,
        'UTF-8'
    );
}

function receber($campo) {
    $valor = $_POST[$campo] ?? '';
    return is_string($valor) ? trim($valor) : '';
}

$nome = receber('nome');
$email = receber('email');
$nomep = receber('nomep');
$assunto = receber('assunto');
$mensagem = receber('mensagem');
$copia = receber('copia') === 'sim';

try {
    require __DIR__ . '/config/conexao.php';

    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO mensagens (nome, email, nomep, assunto, mensagem)
            VALUES (:nome, :email, :nomep, :assunto, :mensagem)";

    $consulta = $conexao->prepare($sql);

    $consulta->execute([
        ':nome' => $nome,
        ':email' => $email,
        ':nomep' => $nomep,
        ':assunto' => $assunto,
        ':mensagem' => $mensagem
    ]);

    $numeroMensagem = $conexao->lastInsertId();

    $consultaData = $conexao->prepare(
        'SELECT criada_em FROM mensagens WHERE id = :id'
    );
    $consultaData->execute([':id' => $numeroMensagem]);

    $dataRecebida = new DateTimeImmutable($consultaData->fetchColumn());
    $dataFormatada = $dataRecebida->format('d/m/Y \à\s H:i');

} catch (PDOException $erro) {
    http_response_code(500);
    exit('Não foi possível salvar a mensagem no banco de dados.');
}

$totalCaracteres = mb_strlen($mensagem, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contato — PetShop Sol</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            background: #f5f3f7;
            color: #36313c;
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }

        .pagina {
            width: min(960px, 92%);
            margin: 32px auto;
            background: #ffffff;
            border-bottom: 8px solid #713b91;
        }

       header {
    padding: 38px;
    background: #010158;
    color: #ffffff;
    text-align: center;
}

header h1 {
    margin: 0;
    color: #FAF49B;
    font-size: clamp(28px, 5vw, 42px);
}

        main {
            padding: 32px 38px 40px;
        }

        h2 {
            margin-top: 0;
            color: #713b91;
            font-size: 28px;
        }

        .recebida {
            padding: 14px 18px;
            border-left: 5px solid #8c55a8;
            background: #f2ebf7;
        }

        .mensagem {
            padding: 20px;
            border-radius: 6px;
            background: #f8f6fa;
            overflow-wrap: anywhere;
        }

        a {
            display: inline-block;
            margin-top: 18px;
            color: #713b91;
        }

        a:hover {
            text-decoration: none;
        }

        @media (max-width: 600px) {
            header,
            main {
                padding: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="pagina">
        <header>
            <h1>PetShop Sol</h1>
            <p>Carinho e cuidado para o seu pet.</p>
        </header>

        <main>
            <h2>Obrigado, <?= escapar($nome) ?>!</h2>

            <p>Mensagem número: <?= escapar($numeroMensagem) ?></p>

            <p class="recebida">
                <strong>
                    Recebida em <?= escapar($dataFormatada) ?>.
                </strong>
            </p>

            <p>Sua mensagem foi salva com sucesso!</p>

            <p>
                E-mail para contato:
                <strong><?= escapar($email) ?></strong>
            </p>

            <p>Pet: <?= escapar($nomep) ?></p>
            <p>Assunto: <?= escapar($assunto) ?></p>

            <p>
                Sua mensagem tem <?= $totalCaracteres ?> caracteres.
            </p>

            <div class="mensagem">
                <?= $mensagem !== ''
                    ? nl2br(escapar($mensagem))
                    : 'Nenhuma mensagem adicional informada.' ?>
            </div>

            <p>Solicitou cópia: <?= $copia ? 'Sim' : 'Não' ?></p>

            <p>
                Recebemos a sua mensagem.
                Em breve entraremos em contato!
            </p>

            <a href="../frontend/index.html#contato">
                ← Voltar ao formulário
            </a>
        </main>
    </div>
</body>
</html>
