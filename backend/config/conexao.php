<?php
/*
$servidor = "localhost";
$banco = "Sol";
$usuario = "root";
$senha = "";
$conexao = new PDO("mysql:host=$servidor;dbname=$banco;charset=utf8mb4", $usuario, $senha);
*/

$servidor = "localhost";
$porta = "3307";
$banco = "Sol";
$usuario = "root";
$senha = "";

try {
    $conexao = new PDO(
        "mysql:host=$servidor;port=$porta;dbname=$banco;charset=utf8mb4",
        $usuario,
        $senha
    );

    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Conexão estabelecida com sucesso!";

} catch (PDOException $e) {

    die("Erro na conexão: " . $e->getMessage());
}

?>