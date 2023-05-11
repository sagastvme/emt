-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2023 at 10:27 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `transport`
--
CREATE DATABASE transport;

USE transport;

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_globalstops` (IN `n` INT)   BEGIN
  DECLARE i INT DEFAULT 1;
  WHILE i <= n DO
    INSERT INTO `globalstops` (`stopId`, `timesVisited`)
    VALUES (@last_id := @last_id + 1, 0);
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`) VALUES
(1, 'Noticias y actualidad del transporte público madrileño', 'Categoría para estar al tanto de las últimas noticias y novedades sobre el transporte público en Madrid.'),
(2, 'Tecnología y transporte público', 'Esta categoría está dedicada a la tecnología aplicada al transporte público, desde apps hasta soluciones inteligentes.'),
(3, 'Deportes y actividades al aire libre en Madrid', 'Encuentra recomendaciones, eventos y consejos para practicar deportes o actividades al aire libre en Madrid y cómo llegar a ellos en transporte público.'),
(4, 'Cultura y entretenimiento en Madrid', 'Para conocer las últimas noticias y eventos relacionados con la cultura y el entretenimiento en Madrid y cómo acceder a ellos utilizando el transporte público.'),
(5, 'Salud y bienestar en el transporte público', 'Esta categoría se enfoca en la salud y el bienestar en el transporte público, desde recomendaciones para evitar el estrés hasta consejos para viajar con seguridad.'),
(6, 'Economía y finanzas en el transporte público', 'En esta categoría se discute sobre el costo del transporte público en Madrid, así como las subvenciones y otras medidas económicas relacionadas.'),
(7, 'Educación y formación en el transporte público', 'Para aquellos interesados en la formación y educación en el transporte público, desde cursos y programas de formación para conductores hasta educación vial para los usuarios.'),
(8, 'Gastronomía y transporte público', 'Esta categoría se enfoca en los mejores restaurantes, bares y foodtrucks accesibles en transporte público en Madrid.'),
(9, 'Consejos personales en el transporte público', 'Para conocer los mejores consejos y trucos para viajar cómodamente y con seguridad en el transporte público de Madrid.'),
(10, 'Turismo y transporte público en Madrid', 'Esta categoría está dedicada a los viajeros y turistas en Madrid, con recomendaciones de rutas, visitas guiadas y cómo llegar a los principales destinos turísticos en transporte público.');

-- --------------------------------------------------------

--
-- Table structure for table `globalstops`
--

CREATE TABLE `globalstops` (
  `id` int(11) NOT NULL,
  `timesVisited` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `globalstops`
--

INSERT INTO `globalstops` (`id`, `timesVisited`) VALUES
(1, 3),
(2, 1),
(3, 5),
(4, 1),
(5, 0),
(6, 0),
(7, 12),
(8, 0),
(9, 0),
(10, 0),
(11, 0),
(12, 0),
(13, 0),
(14, 0),
(15, 0),
(16, 0),
(17, 0),
(18, 0),
(19, 0),
(20, 0),
(21, 9),
(22, 0),
(23, 1),
(24, 0),
(25, 0),
(26, 0),
(27, 0),
(28, 0),
(29, 0),
(30, 0),
(31, 0),
(32, 1),
(33, 0),
(34, 0),
(35, 0),
(36, 0),
(37, 0),
(38, 0),
(39, 0),
(40, 0),
(41, 0),
(42, 0),
(43, 0),
(44, 0),
(45, 0),
(46, 0),
(47, 0),
(48, 0),
(49, 0),
(50, 0),
(51, 0),
(52, 0),
(53, 0),
(54, 0),
(55, 0),
(56, 0),
(57, 0),
(58, 0),
(59, 0),
(60, 0),
(61, 0),
(62, 0),
(63, 0),
(64, 0),
(65, 0),
(66, 0),
(67, 0),
(68, 0),
(69, 0),
(70, 1),
(71, 0),
(72, 0),
(73, 0),
(74, 0),
(75, 0),
(76, 0),
(77, 0),
(78, 16),
(79, 0),
(80, 0),
(81, 0),
(82, 0),
(83, 0),
(84, 0),
(85, 0),
(86, 0),
(87, 1),
(88, 1),
(89, 0),
(90, 1),
(91, 0),
(92, 0),
(93, 0),
(94, 0),
(95, 0),
(96, 0),
(97, 0),
(98, 0),
(99, 0),
(100, 0),
(101, 0),
(102, 0),
(103, 0),
(104, 0),
(105, 0),
(106, 0),
(107, 0),
(108, 0),
(109, 0),
(110, 0),
(111, 0),
(112, 0),
(113, 0),
(114, 0),
(115, 0),
(116, 0),
(117, 0),
(118, 0),
(119, 0),
(120, 0),
(121, 0),
(122, 0),
(123, 1),
(124, 0),
(125, 0),
(126, 0),
(127, 0),
(128, 0),
(129, 0),
(130, 0),
(131, 0),
(132, 0),
(133, 0),
(134, 0),
(135, 0),
(136, 0),
(137, 0),
(138, 0),
(139, 0),
(140, 0),
(141, 0),
(142, 0),
(143, 0),
(144, 0),
(145, 0),
(146, 0),
(147, 0),
(148, 0),
(149, 0),
(150, 0),
(151, 0),
(152, 0),
(153, 0),
(154, 0),
(155, 0),
(156, 0),
(157, 0),
(158, 0),
(159, 0),
(160, 0),
(161, 0),
(162, 0),
(163, 0),
(164, 0),
(165, 0),
(166, 0),
(167, 0),
(168, 0),
(169, 0),
(170, 0),
(171, 0),
(172, 0),
(173, 0),
(174, 0),
(175, 0),
(176, 0),
(177, 0),
(178, 0),
(179, 0),
(180, 0),
(181, 0),
(182, 0),
(183, 0),
(184, 0),
(185, 0),
(186, 0),
(187, 0),
(188, 0),
(189, 0),
(190, 0),
(191, 0),
(192, 0),
(193, 0),
(194, 0),
(195, 0),
(196, 0),
(197, 0),
(198, 0),
(199, 0),
(200, 0),
(201, 0),
(202, 0),
(203, 0),
(204, 0),
(205, 0),
(206, 0),
(207, 0),
(208, 0),
(209, 0),
(210, 0),
(211, 0),
(212, 0),
(213, 0),
(214, 0),
(215, 0),
(216, 0),
(217, 0),
(218, 0),
(219, 0),
(220, 0),
(221, 0),
(222, 0),
(223, 0),
(224, 0),
(225, 0),
(226, 0),
(227, 0),
(228, 0),
(229, 0),
(230, 0),
(231, 0),
(232, 0),
(233, 0),
(234, 0),
(235, 0),
(236, 0),
(237, 0),
(238, 0),
(239, 0),
(240, 0),
(241, 0),
(242, 0),
(243, 0),
(244, 0),
(245, 0),
(246, 0),
(247, 0),
(248, 0),
(249, 0),
(250, 0),
(251, 0),
(252, 0),
(253, 0),
(254, 0),
(255, 0),
(256, 0),
(257, 0),
(258, 0),
(259, 0),
(260, 0),
(261, 0),
(262, 0),
(263, 0),
(264, 0),
(265, 0),
(266, 0),
(267, 0),
(268, 0),
(269, 0),
(270, 0),
(271, 0),
(272, 0),
(273, 0),
(274, 0),
(275, 0),
(276, 0),
(277, 0),
(278, 0),
(279, 0),
(280, 0),
(281, 0),
(282, 0),
(283, 0),
(284, 0),
(285, 0),
(286, 0),
(287, 0),
(288, 0),
(289, 0),
(290, 0),
(291, 0),
(292, 0),
(293, 0),
(294, 0),
(295, 0),
(296, 0),
(297, 0),
(298, 0),
(299, 0),
(300, 0),
(301, 0),
(302, 0),
(303, 0),
(304, 0),
(305, 0),
(306, 0),
(307, 0),
(308, 0),
(309, 0),
(310, 0),
(311, 0),
(312, 0),
(313, 0),
(314, 0),
(315, 0),
(316, 0),
(317, 0),
(318, 0),
(319, 0),
(320, 0),
(321, 2),
(322, 0),
(323, 0),
(324, 0),
(325, 0),
(326, 0),
(327, 0),
(328, 0),
(329, 0),
(330, 0),
(331, 0),
(332, 0),
(333, 0),
(334, 0),
(335, 0),
(336, 0),
(337, 0),
(338, 0),
(339, 0),
(340, 0),
(341, 0),
(342, 0),
(343, 0),
(344, 0),
(345, 1),
(346, 0),
(347, 0),
(348, 0),
(349, 1),
(350, 0),
(351, 0),
(352, 0),
(353, 0),
(354, 0),
(355, 0),
(356, 0),
(357, 0),
(358, 0),
(359, 0),
(360, 0),
(361, 0),
(362, 0),
(363, 0),
(364, 0),
(365, 0),
(366, 0),
(367, 0),
(368, 0),
(369, 0),
(370, 0),
(371, 0),
(372, 0),
(373, 0),
(374, 0),
(375, 0),
(376, 0),
(377, 0),
(378, 0),
(379, 0),
(380, 0),
(381, 0),
(382, 0),
(383, 0),
(384, 0),
(385, 0),
(386, 0),
(387, 0),
(388, 0),
(389, 0),
(390, 0),
(391, 0),
(392, 0),
(393, 0),
(394, 0),
(395, 0),
(396, 0),
(397, 0),
(398, 0),
(399, 0),
(400, 0),
(401, 0),
(402, 0),
(403, 0),
(404, 0),
(405, 0),
(406, 0),
(407, 0),
(408, 0),
(409, 0),
(410, 0),
(411, 0),
(412, 0),
(413, 0),
(414, 0),
(415, 0),
(416, 0),
(417, 0),
(418, 0),
(419, 0),
(420, 0),
(421, 0),
(422, 0),
(423, 1),
(424, 0),
(425, 0),
(426, 0),
(427, 0),
(428, 1),
(429, 0),
(430, 0),
(431, 0),
(432, 1),
(433, 0),
(434, 0),
(435, 0),
(436, 0),
(437, 0),
(438, 0),
(439, 0),
(440, 0),
(441, 0),
(442, 0),
(443, 0),
(444, 0),
(445, 0),
(446, 0),
(447, 0),
(448, 0),
(449, 0),
(450, 0),
(451, 0),
(452, 0),
(453, 0),
(454, 0),
(455, 0),
(456, 0),
(457, 0),
(458, 0),
(459, 0),
(460, 0),
(461, 0),
(462, 0),
(463, 0),
(464, 0),
(465, 0),
(466, 0),
(467, 0),
(468, 0),
(469, 0),
(470, 0),
(471, 0),
(472, 0),
(473, 0),
(474, 0),
(475, 0),
(476, 0),
(477, 0),
(478, 0),
(479, 0),
(480, 0),
(481, 0),
(482, 0),
(483, 0),
(484, 0),
(485, 0),
(486, 0),
(487, 0),
(488, 0),
(489, 0),
(490, 0),
(491, 0),
(492, 0),
(493, 0),
(494, 0),
(495, 0),
(496, 0),
(497, 0),
(498, 0),
(499, 0),
(500, 0),
(501, 0),
(502, 0),
(503, 0),
(504, 0),
(505, 0),
(506, 0),
(507, 0),
(508, 0),
(509, 0),
(510, 0),
(511, 0),
(512, 0),
(513, 0),
(514, 0),
(515, 0),
(516, 0),
(517, 0),
(518, 0),
(519, 0),
(520, 0),
(521, 0),
(522, 0),
(523, 0),
(524, 0),
(525, 0),
(526, 0),
(527, 0),
(528, 0),
(529, 0),
(530, 0),
(531, 0),
(532, 0),
(533, 0),
(534, 3),
(535, 0),
(536, 0),
(537, 0),
(538, 0),
(539, 0),
(540, 0),
(541, 0),
(542, 0),
(543, 0),
(544, 0),
(545, 0),
(546, 0),
(547, 0),
(548, 0),
(549, 0),
(550, 0),
(551, 0),
(552, 0),
(553, 0),
(554, 1),
(555, 0),
(556, 0),
(557, 0),
(558, 0),
(559, 1),
(560, 0),
(561, 0),
(562, 0),
(563, 0),
(564, 0),
(565, 1),
(566, 0),
(567, 0),
(568, 0),
(569, 0),
(570, 0),
(571, 0),
(572, 0),
(573, 0),
(574, 0),
(575, 0),
(576, 0),
(577, 0),
(578, 0),
(579, 0),
(580, 0),
(581, 0),
(582, 0),
(583, 0),
(584, 0),
(585, 0),
(586, 0),
(587, 0),
(588, 0),
(589, 0),
(590, 0),
(591, 0),
(592, 0),
(593, 0),
(594, 0),
(595, 0),
(596, 0),
(597, 0),
(598, 0),
(599, 0),
(600, 0),
(601, 0),
(602, 0),
(603, 0),
(604, 0),
(605, 0),
(606, 0),
(607, 0),
(608, 0),
(609, 0),
(610, 0),
(611, 0),
(612, 0),
(613, 0),
(614, 0),
(615, 0),
(616, 0),
(617, 0),
(618, 0),
(619, 0),
(620, 0),
(621, 0),
(622, 0),
(623, 0),
(624, 0),
(625, 0),
(626, 0),
(627, 0),
(628, 0),
(629, 0),
(630, 0),
(631, 0),
(632, 0),
(633, 0),
(634, 0),
(635, 0),
(636, 0),
(637, 0),
(638, 0),
(639, 0),
(640, 0),
(641, 0),
(642, 0),
(643, 0),
(644, 0),
(645, 0),
(646, 0),
(647, 0),
(648, 0),
(649, 0),
(650, 0),
(651, 0),
(652, 0),
(653, 0),
(654, 0),
(655, 0),
(656, 0),
(657, 0),
(658, 0),
(659, 0),
(660, 0),
(661, 0),
(662, 0),
(663, 0),
(664, 0),
(665, 0),
(666, 0),
(667, 0),
(668, 0),
(669, 0),
(670, 0),
(671, 0),
(672, 0),
(673, 0),
(674, 0),
(675, 0),
(676, 0),
(677, 0),
(678, 1),
(679, 0),
(680, 0),
(681, 0),
(682, 0),
(683, 0),
(684, 0),
(685, 0),
(686, 0),
(687, 0),
(688, 0),
(689, 0),
(690, 0),
(691, 0),
(692, 0),
(693, 0),
(694, 0),
(695, 0),
(696, 0),
(697, 0),
(698, 0),
(699, 0),
(700, 0),
(701, 0),
(702, 0),
(703, 0),
(704, 0),
(705, 0),
(706, 0),
(707, 0),
(708, 0),
(709, 0),
(710, 0),
(711, 0),
(712, 0),
(713, 0),
(714, 0),
(715, 0),
(716, 0),
(717, 0),
(718, 0),
(719, 0),
(720, 0),
(721, 0),
(722, 20),
(723, 0),
(724, 0),
(725, 0),
(726, 0),
(727, 0),
(728, 0),
(729, 0),
(730, 0),
(731, 0),
(732, 0),
(733, 1),
(734, 0),
(735, 0),
(736, 0),
(737, 0),
(738, 0),
(739, 0),
(740, 0),
(741, 0),
(742, 0),
(743, 0),
(744, 0),
(745, 1),
(746, 0),
(747, 0),
(748, 0),
(749, 0),
(750, 0),
(751, 0),
(752, 0),
(753, 0),
(754, 8),
(755, 0),
(756, 1),
(757, 0),
(758, 0),
(759, 0),
(760, 0),
(761, 0),
(762, 0),
(763, 0),
(764, 0),
(765, 0),
(766, 0),
(767, 1),
(768, 0),
(769, 0),
(770, 0),
(771, 0),
(772, 0),
(773, 0),
(774, 0),
(775, 0),
(776, 0),
(777, 0),
(778, 0),
(779, 0),
(780, 0),
(781, 0),
(782, 0),
(783, 0),
(784, 0),
(785, 0),
(786, 0),
(787, 0),
(788, 283),
(789, 3),
(790, 0),
(791, 0),
(792, 0),
(793, 0),
(794, 0),
(795, 0),
(796, 0),
(797, 0),
(798, 0),
(799, 0),
(800, 0),
(801, 0),
(802, 0),
(803, 0),
(804, 0),
(805, 0),
(806, 0),
(807, 0),
(808, 0),
(809, 0),
(810, 0),
(811, 0),
(812, 0),
(813, 0),
(814, 0),
(815, 0),
(816, 0),
(817, 0),
(818, 0),
(819, 0),
(820, 0),
(821, 0),
(822, 0),
(823, 0),
(824, 0),
(825, 0),
(826, 0),
(827, 0),
(828, 0),
(829, 0),
(830, 0),
(831, 0),
(832, 0),
(833, 0),
(834, 0),
(835, 0),
(836, 0),
(837, 0),
(838, 0),
(839, 0),
(840, 0),
(841, 0),
(842, 0),
(843, 0),
(844, 0),
(845, 0),
(846, 0),
(847, 0),
(848, 0),
(849, 0),
(850, 0),
(851, 0),
(852, 0),
(853, 0),
(854, 0),
(855, 0),
(856, 0),
(857, 0),
(858, 0),
(859, 0),
(860, 0),
(861, 0),
(862, 0),
(863, 0),
(864, 0),
(865, 0),
(866, 0),
(867, 0),
(868, 0),
(869, 0),
(870, 0),
(871, 0),
(872, 0),
(873, 0),
(874, 0),
(875, 0),
(876, 0),
(877, 0),
(878, 0),
(879, 0),
(880, 0),
(881, 0),
(882, 0),
(883, 0),
(884, 0),
(885, 0),
(886, 0),
(887, 0),
(888, 4),
(889, 0),
(890, 1),
(891, 0),
(892, 0),
(893, 0),
(894, 0),
(895, 0),
(896, 0),
(897, 0),
(898, 0),
(899, 1),
(900, 0),
(901, 0),
(902, 0),
(903, 0),
(904, 0),
(905, 0),
(906, 0),
(907, 0),
(908, 0),
(909, 0),
(910, 0),
(911, 0),
(912, 0),
(913, 0),
(914, 0),
(915, 0),
(916, 0),
(917, 0),
(918, 0),
(919, 0),
(920, 0),
(921, 0),
(922, 0),
(923, 0),
(924, 0),
(925, 0),
(926, 0),
(927, 0),
(928, 0),
(929, 0),
(930, 0),
(931, 0),
(932, 0),
(933, 0),
(934, 0),
(935, 0),
(936, 0),
(937, 0),
(938, 0),
(939, 0),
(940, 0),
(941, 0),
(942, 0),
(943, 0),
(944, 0),
(945, 0),
(946, 0),
(947, 0),
(948, 0),
(949, 0),
(950, 0),
(951, 0),
(952, 0),
(953, 0),
(954, 0),
(955, 0),
(956, 0),
(957, 0),
(958, 0),
(959, 0),
(960, 0),
(961, 0),
(962, 0),
(963, 0),
(964, 0),
(965, 0),
(966, 0),
(967, 0),
(968, 0),
(969, 0),
(970, 0),
(971, 0),
(972, 0),
(973, 0),
(974, 0),
(975, 0),
(976, 0),
(977, 0),
(978, 0),
(979, 0),
(980, 0),
(981, 0),
(982, 0),
(983, 0),
(984, 0),
(985, 0),
(986, 0),
(987, 0),
(988, 0),
(989, 0),
(990, 0),
(991, 0),
(992, 0),
(993, 0),
(994, 0),
(995, 0),
(996, 0),
(997, 0),
(998, 0),
(999, 0),
(1000, 0),
(1001, 0);

-- --------------------------------------------------------

--
-- Table structure for table `metroplans`
--

CREATE TABLE `metroplans` (
  `Id` int(11) NOT NULL,
  `Path` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `metroplans`
--

INSERT INTO `metroplans` (`Id`, `Path`, `title`) VALUES
(11, 'metroPlans/MapaCercanias.jpg', 'cercanias\r\n'),
(12, 'metroPlans/RedDeMetroLigero.jpg', 'metro ligero\r\n'),
(49, 'metroPlans/dasdasd.jpg', 'dasdasd');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `date_created` datetime NOT NULL,
  `author` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `date_created`, `author`, `title`, `body`, `category`) VALUES
(40, '2023-04-11 19:29:00', 'sagastvme@gmail.com', 'MEssi es un echo frio blablbablbalbalblablaba a de toda la vida de dios', 'Si alguien de verdad vio el partido sabe que no jugo nada y se paso mirando al suelo los 90 minuntos que duro el partido', 1);

-- --------------------------------------------------------

--
-- Table structure for table `postimage`
--

CREATE TABLE `postimage` (
  `id` int(11) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `source` varchar(255) NOT NULL,
  `postanswerid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `postimage`
--

INSERT INTO `postimage` (`id`, `postId`, `source`, `postanswerid`) VALUES
(43, NULL, 'postImages/64394fcb3317f.gif', 59),
(44, NULL, 'postImages/6439542f44924.jpg', 60),
(45, NULL, 'postImages/643954954fa6e.jpg', 61),
(46, NULL, 'postImages/643954a2e9db8.jpg', 62),
(47, NULL, 'postImages/643955a5c1a7c.jpg', 63),
(48, NULL, 'postImages/643955a5c4077.jpg', 63);

-- --------------------------------------------------------

--
-- Table structure for table `post_answers`
--

CREATE TABLE `post_answers` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `body` text NOT NULL,
  `date_created` datetime NOT NULL,
  `author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post_answers`
--

INSERT INTO `post_answers` (`id`, `postId`, `body`, `date_created`, `author`) VALUES
(59, 40, 'Tu lo que eres es imbecil payaso emssi es el mehjor jugador edl mundo', '2023-04-14 15:06:19', 'sagastvme@gmail.com'),
(60, 40, 'ESTA ES LA RESPUESTA NUEVA ', '2023-04-14 15:25:03', 'sagastvme@gmail.com'),
(61, 40, 'ZXCzxcvzxcz', '2023-04-14 15:26:45', 'sagastvme@gmail.com'),
(62, 40, '543535', '2023-04-14 15:26:58', 'sagastvme@gmail.com'),
(63, 40, 'sdffssf', '2023-04-14 15:31:17', 'sagastvme@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `savedposts`
--

CREATE TABLE `savedposts` (
  `username` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stops`
--

CREATE TABLE `stops` (
  `id` int(11) NOT NULL,
  `stopId` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `timesVisited` int(11) NOT NULL,
  `stopName` varchar(255) NOT NULL,
  `customName` varchar(255) NOT NULL,
  `buses` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stops`
--

INSERT INTO `stops` (`id`, `stopId`, `username`, `timesVisited`, `stopName`, `customName`, `buses`) VALUES
(65, 888, 'ledesmatania91@gmail.com', 2, 'Casa de Campo', 'mi abuelal.', '36,39,N19'),
(79, 7, 'adminNAME@elrastro.madrid.spain.es', 2, 'Avenida Valdemarín-La Salle', 'Universidad casa ', '161'),
(84, 788, 'sagastvme@gmail.com', 0, 'Avenida de América', 'De casa al trabajo', '12,C2,72,73');

-- --------------------------------------------------------

--
-- Table structure for table `transport_prices`
--

CREATE TABLE `transport_prices` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transport_prices`
--

INSERT INTO `transport_prices` (`id`, `title`, `price`) VALUES
(39, 'Billete sencillo de Metro - Zona A y ML1', '1.50'),
(40, 'Billete sencillo de Metro - MetroEste, MetroNorte, MetroSur', '1.50'),
(41, 'Billete TFM', '2.00'),
(42, 'Billete Combinado Metro', '3.00'),
(43, 'Billete 10 viajes de Metro - Zona A y ML1', '8.50'),
(44, 'Billete 10 viajes de Metro - MetroEste, MetroNort, MetroSur', '5.60'),
(45, 'Billete Combinado Metro', '12.80'),
(46, 'Red de T.F.M. Estaciones de Línea 9, tramo Puerta de Arganda-Arganda del Rey (Zonas B1, B2 Y B3)', '6.10'),
(47, 'Metro y Metro Ligero - ML1,ML2 y ML3', '9.10'),
(48, 'Aeropuerto, zona A', '4.50'),
(49, 'Aeropuerto Metroligero', '6.00'),
(50, 'Aeropuerto billete sencillo/combinado/Metrobús', '3.00'),
(51, 'Billete sencillo de autobús - EMT', '1.50'),
(52, 'Billete Exprés Aeropuerto', '5.00'),
(53, 'Billete 10 viajes de autobús - Zona A, EMT, y ML1 (Metrobús)', '6.10'),
(54, 'Billete 10 viajes Bus+Bus EMT', '12.80'),
(55, 'Abono joven mensual', '8.00'),
(56, 'Abono zona A', '21.80'),
(57, 'Abono zona B1', '25.40'),
(58, 'Abono zona B2', '28.80'),
(59, 'Abono zona B3', '32.80'),
(60, 'Abono zona C1', '32.80'),
(61, 'Abono zona C2', '32.80'),
(62, 'Abono zona E1', '44.20'),
(63, 'Abono zona E2', '52.70'),
(64, 'Tarjeta azul', '4.30'),
(65, 'B1-B2, B2-B3, BD-C1, B2-C2, B3-C1, B3-C2,C1-C2,C2-E1', '19.10'),
(66, 'B1-B3;B1-C1,B1-C2,C1-1,C2-E2', '21.80'),
(67, 'B3-E1, C1-E2', '25.40'),
(68, 'B2-E1,C1-E2', '32.80'),
(69, 'B1-E1, B2-E2', '32.80');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profilePic` varchar(255) NOT NULL,
  `unique_attribute` varchar(255) NOT NULL,
  `verified` enum('N','Y') NOT NULL DEFAULT 'N',
  `postsPublished` int(11) DEFAULT NULL,
  `dateCreated` datetime DEFAULT NULL,
  `role` enum('U','A') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `profilePic`, `unique_attribute`, `verified`, `postsPublished`, `dateCreated`, `role`) VALUES
('adminNAME@elrastro.madrid.spain.es', '$argon2i$v=19$m=65536,t=4,p=1$OEhZV25yd3Z5L1pZcTdHYw$JCZN+q6DyeFtmYXQ0hMUxyWaljxEkENuYeB7ayy3DPM', 'profilePictures/null.jpg', 'e88a26ae-4210-412b-b0ef-e353127e9788', 'Y', 0, '2023-04-10 17:41:30', 'A'),
('bvb@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$ZVA4RTc0aVdEY1RLdnVNWQ$8B3twHM4DQDH0bEDmg9kmB07+/tcWv3/B8qTeFkFVGc', 'profilePictures/null.jpg', '675faead-5686-4d4e-b617-bc77ba8d7d28', 'N', 0, '2023-04-09 15:48:52', 'U'),
('eduedsdwgomrwerar@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$QnFVMDVRbVdkbUx3VUM3aQ$yt/YhpqStvsaJyFe2NYBm1OoFOBZfIJxv+kEfUN2l2o', 'profilePictures/null.jpg', '1727b7b8-53d5-4e2d-acf5-e121e1998aec', 'N', 0, '2023-04-09 16:01:22', 'U'),
('eduewgomrwerar@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$TUVja1pHenVEWWRNZ3haZg$N0Ymy2DFATRA8/mOhwAtIiEYEoQdcxlzHtRnD+xiZnQ', 'profilePictures/null.jpg', 'eaf97598-8661-4f6b-a615-551b3b2e2aa6', 'N', 0, '2023-04-09 15:58:27', 'U'),
('edugomrwerar@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$eXlXR0lGeHhHbkFjMW1ITg$DQGJH3OGnIR2Ai+4dCnKdI0wP0EWs/DwkoD4Uq4oJVU', 'profilePictures/null.jpg', 'ff79ac26-ba0d-451b-b744-9fe63346f2be', 'N', 0, '2023-04-09 15:57:45', 'U'),
('ffdsfsdfsd@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$V21WSE5CcjJGcTRnVHY3WQ$+e736+DApL0iWHq8RlUTWbEqQD7yUkGPNfpxJszi8Vo', 'profilePictures/null.jpg', 'feb0d8a6-ae27-4e50-860e-2a040d8daad6', 'N', 0, '2023-04-09 16:03:05', 'U'),
('ffdsfswedfsd@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$Rmh2TUpLcXl3Z29hbnRXTg$xyYN+M9j+ijxSao0cF608MH3BzuNT0YeHSwmY6sob4s', 'profilePictures/null.jpg', 'db1c3c4c-71e1-4702-bdb9-a75387e3a423', 'N', 0, '2023-04-09 16:09:11', 'U'),
('fsdfsd@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$cGdCMzhudDB5ZXcwNHgvYQ$mOrnNgjen7DQ6ly8wPiBPTEBzC7olir6Mc6wHLOaV5g', 'profilePictures/null.jpg', '1451a88c-0202-469c-815e-7286ba24909b', 'N', 0, '2023-04-09 16:02:24', 'U'),
('ledesmatania91@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$cG45Y3Ayc0xIUm1rLnFEag$tWDLByuP3027xFvBjHqRLkdyd+aIMcDd4BxENoCFyDE', 'profilePictures/ledesmatania91@gmail.com.jpg', '74d201b1-273b-46a7-a2e3-1fdb3fe5bc11', 'Y', NULL, '2023-04-26 17:35:16', 'U'),
('ledesmrwerweatania91@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$a3FmVDhoeEx5R0JFZ1FrdA$oiB06B1HwalHYHQdlReqAJn6/DtdEfl6irLFzP5amFU', 'profilePictures/null.jpg', '757129e7-ee89-46ab-9cb4-698a3c6e8741', 'N', 0, '2023-04-09 16:01:48', 'U'),
('ortegare@comem.es', '$argon2i$v=19$m=65536,t=4,p=1$dGtodGthZWxadkd6LzczOA$PwANY74CGFYVeSm3uv5jc47CLMK/HeI37OEnUOJ2iZA', 'profilePictures/null.jpg', '15e881de-9715-4726-b149-f4eb17e63760', 'N', 0, '2023-04-09 15:51:33', 'U'),
('ortegeqwa@comem.es', '$argon2i$v=19$m=65536,t=4,p=1$VENHQ013cXhmQWJoSDN1aw$xTcTdV1aenF1aP2o5PKJUdcFh+Qb+OxrE/DH+Rbxxdg', 'profilePictures/null.jpg', 'ce3a734b-f51b-405b-b108-d675703154f9', 'N', 0, '2023-04-09 15:54:25', 'U'),
('rewraSasws@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$VDJ2MnFTRDZWMFV5TkRrVA$kAhn7XDevb7OsJ8vWj8HurcDcsi4HZD49sIp+VlFfbo', 'profilePictures/null.jpg', '461c8134-42e2-411a-8ae4-6f77070983ef', 'N', 0, '2023-04-12 21:43:13', 'U'),
('rewraSpoasws@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$blNLWUpiT3FqODJMdWQuVg$X754Sns+Ge1M+efRNkVtXQ9fbFB47CnIX4+D/pnXdrs', 'profilePictures/null.jpg', '607d4b96-f808-4f78-8442-88ab2d6b6b5e', 'N', 0, '2023-04-12 22:29:43', 'U'),
('rewrw@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$TlFsUm9DdU56RzdDQUNxOQ$TUuAVpGYbetH2Deq9qO/cGKM3d1FqvRefnhL4BQtbR0', 'profilePictures/null.jpg', '968b2945-d94e-43a5-808f-63bb248214d6', 'N', 0, '2023-04-10 15:04:28', 'U'),
('sagastvme@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$dHcyZUFaM2lHVS9MQjB6UA$5akqpCzlm4AQAlLK6M4ctvkFF5Ja6HfXmUVcpKtrkNQ', 'profilePictures/sagastvme@gmail.com.gif', 'e1a4c8a4-2320-4aff-8df7-a78c8d20f031', 'Y', 31, '2023-04-26 17:16:25', 'U'),
('spursidto@gmail.comdd', '$argon2i$v=19$m=65536,t=4,p=1$MmtCYUltaktuYmFVN1BWbw$uxhAeb9YtcqGLgJfVwJP6GCZR5ZZMQIw0n3BWHf7hYo', 'profilePictures/null.jpg', '92957ced-82ee-4e0f-94de-09ef6052944f', 'N', 0, '2023-04-13 19:30:23', 'U'),
('spursito@gmail.com', '$argon2i$v=19$m=65536,t=4,p=1$RHNrckdmVWMuaFc3NWtNZA$D2qywCcuvRqwgLvxHVwfa5tmkOFWk01RYINcajUly5M', 'profilePictures/null.jpg', '0b241986-7e21-4ec0-bc5d-7bf3ca181e99', 'N', 0, '2023-04-13 19:29:47', 'U'),
('spursito@gmail.comsdadad', '$argon2i$v=19$m=65536,t=4,p=1$bkZyV1lQcnVvZHpBLnVqMw$VE61lkVkimviQTki7RWj33e9bISm+XBH/Fdqe5JrjfA', 'profilePictures/null.jpg', '6679c5ea-b411-4638-b381-44a099ad3982', 'N', 0, '2023-04-15 15:02:53', 'U');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `globalstops`
--
ALTER TABLE `globalstops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metroplans`
--
ALTER TABLE `metroplans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`),
  ADD KEY `categories` (`category`);

--
-- Indexes for table `postimage`
--
ALTER TABLE `postimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postsanswer` (`postanswerid`),
  ADD KEY `mainpost` (`postId`);

--
-- Indexes for table `post_answers`
--
ALTER TABLE `post_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post` (`postId`),
  ADD KEY `whosTheAuthor` (`author`);

--
-- Indexes for table `savedposts`
--
ALTER TABLE `savedposts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts` (`postId`),
  ADD KEY `users` (`username`);

--
-- Indexes for table `stops`
--
ALTER TABLE `stops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`username`);

--
-- Indexes for table `transport_prices`
--
ALTER TABLE `transport_prices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `globalstops`
--
ALTER TABLE `globalstops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;

--
-- AUTO_INCREMENT for table `metroplans`
--
ALTER TABLE `metroplans`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `postimage`
--
ALTER TABLE `postimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `post_answers`
--
ALTER TABLE `post_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `savedposts`
--
ALTER TABLE `savedposts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `stops`
--
ALTER TABLE `stops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `transport_prices`
--
ALTER TABLE `transport_prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `author` FOREIGN KEY (`author`) REFERENCES `user` (`username`),
  ADD CONSTRAINT `categories` FOREIGN KEY (`category`) REFERENCES `categories` (`id`);

--
-- Constraints for table `postimage`
--
ALTER TABLE `postimage`
  ADD CONSTRAINT `mainpost` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `postsanswer` FOREIGN KEY (`postanswerid`) REFERENCES `post_answers` (`id`);

--
-- Constraints for table `post_answers`
--
ALTER TABLE `post_answers`
  ADD CONSTRAINT `post` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `whosTheAuthor` FOREIGN KEY (`author`) REFERENCES `user` (`username`);

--
-- Constraints for table `savedposts`
--
ALTER TABLE `savedposts`
  ADD CONSTRAINT `posts` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `users` FOREIGN KEY (`username`) REFERENCES `user` (`username`);

--
-- Constraints for table `stops`
--
ALTER TABLE `stops`
  ADD CONSTRAINT `user` FOREIGN KEY (`username`) REFERENCES `user` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
