-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30-Out-2019 às 01:35
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `hope`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_post`
--

CREATE TABLE `tb_post` (
  `id` int(11) NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `datePublication` timestamp,
  `updatePublication` timestamp
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_post`
--

INSERT INTO `tb_post` (`id`, `title`, `message`, `datePublication`, `updatePublication`) VALUES
(3, 'TESTE', 'MESAGEM DO POST A SER COLOCADO', '2019-10-29 23:47:13', '2019-10-29 23:47:13');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_post`
--
ALTER TABLE `tb_post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_post`
--
ALTER TABLE `tb_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
