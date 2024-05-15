CREATE DATABASE IF NOT EXISTS `budget_directory`;
USE `budget_directory`;

DROP TABLE IF EXISTS `expense_item`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` char(80) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `income` float NOT NULL,
  `enabled` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `users`(username, password, email, first_name, income, enabled)
VALUES
('cris', '{noop}test123', 'user_email@email.com', 'Cristian', 80000, 1),
('jami', '{noop}test123', 'user_email@email.com', 'Jami', 95000, 1);

CREATE TABLE `expense_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `date` DATE NOT NULL,
  `amount` float NOT NULL,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `expense_item`(user_id, name, date, amount, category)
VALUES
(1, 'QuikTrip', '2024-04-03', 34.54, 'GAS'),
(1, 'Whataburger', '2024-04-05', 26.45, 'FOOD'),
(1, 'Pokemon', '2024-04-07', 16.21, 'GAMES');
