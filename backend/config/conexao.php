<?php
$servidor = "localhost";
$banco = "Sol";
$usuario = "root";
$senha = "";
$conexao = new PDO("mysql:host=$servidor;dbname=$banco;charset=utf8mb4", $usuario, $senha);
