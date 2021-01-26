CREATE TABLE `users` (
  `id`            INT NOT NULL AUTO_INCREMENT,
  `firstName`         	VARCHAR(100),
  `lastName`         	VARCHAR(100),
  `email`         		VARCHAR(100),
  `phone`         		VARCHAR(100),
  `profession`         	VARCHAR(100),
  `address`         	VARCHAR(100),
  `zipCode`         	VARCHAR(100),
  `created_at`    		DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;