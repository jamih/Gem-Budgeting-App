-- Drop user first if they exist
DROP USER if exists 'budgetuser'@'localhost' ;

-- Now create user with prop privileges
CREATE USER 'budgetuser'@'localhost' IDENTIFIED BY 'budgetuser';

GRANT ALL PRIVILEGES ON * . * TO 'budgetuser'@'localhost';