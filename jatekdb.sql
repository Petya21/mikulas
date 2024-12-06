-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Dec 05. 15:56
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `jatekdb`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyerek`
--

CREATE TABLE `gyerek` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `cim` varchar(255) NOT NULL,
  `joVolt` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gyerek`
--

INSERT INTO `gyerek` (`id`, `nev`, `cim`, `joVolt`) VALUES
(1, 'Kovács Péter', 'Budapest, Fő utca 1.', 1),
(2, 'Szabó Anna', 'Debrecen, Kossuth Lajos utca 5.', 0),
(3, 'Nagy László', 'Szeged, Kálvária tér 10.', 1),
(4, 'Tóth Klára', 'Pécs, Kertész utca 3.', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyerekjatek`
--

CREATE TABLE `gyerekjatek` (
  `id` int(11) NOT NULL,
  `gyerekId` int(11) NOT NULL,
  `jatekId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gyerekjatek`
--

INSERT INTO `gyerekjatek` (`id`, `gyerekId`, `jatekId`) VALUES
(1, 1, 1),
(3, 2, 3),
(4, 3, 4),
(5, 4, 1),
(6, 4, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatek`
--

CREATE TABLE `jatek` (
  `id` int(11) NOT NULL,
  `megnevezes` varchar(255) NOT NULL,
  `anyag` enum('wood','metal','plastic','other') NOT NULL,
  `suly` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `jatek`
--

INSERT INTO `jatek` (`id`, `megnevezes`, `anyag`, `suly`) VALUES
(1, 'Fa Játék', 'wood', 0.5),
(3, 'Műanyag Béka', 'plastic', 0.3),
(4, 'Egyéb Kocka', 'other', 0.1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `gyerek`
--
ALTER TABLE `gyerek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `gyerekjatek`
--
ALTER TABLE `gyerekjatek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_gyerekId` (`gyerekId`),
  ADD KEY `idx_jatekId` (`jatekId`);

--
-- A tábla indexei `jatek`
--
ALTER TABLE `jatek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `gyerek`
--
ALTER TABLE `gyerek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `gyerekjatek`
--
ALTER TABLE `gyerekjatek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `jatek`
--
ALTER TABLE `jatek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `gyerekjatek`
--
ALTER TABLE `gyerekjatek`
  ADD CONSTRAINT `gyerekjatek_ibfk_1` FOREIGN KEY (`gyerekId`) REFERENCES `gyerek` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `gyerekjatek_ibfk_2` FOREIGN KEY (`jatekId`) REFERENCES `jatek` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
