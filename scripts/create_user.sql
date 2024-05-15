-- Drop user first if they exist
DROP USER if exists 'dataBudgetUser'@'localhost' ;

-- Now create user with prop privileges
CREATE USER 'dataBudgetUser'@'localhost' IDENTIFIED BY 'dataBudgetUser1';

GRANT ALL PRIVILEGES ON * . * TO 'dataBudgetUser'@'localhost';