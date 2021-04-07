Use `itcs212-3`;
DROP TABLE IF EXISTS `personal_info`;
CREATE TABLE `itcs212-3`.`personal_info` (
  `StudentID` INT(11) NOT NULL,
  `Firstname` VARCHAR(45) NULL,
  `Lastname` VARCHAR(45) NULL,
  `DOB` DATE NULL,
  `Mobilephone` VARCHAR(10) NULL,
  PRIMARY KEY (`StudentID`));
  
  INSERT INTO `personal_info`(`StudentID`,`Firstname` ,`Lastname`, `DOB`, `Mobilephone`) VALUES
  ( 1, 'Robrt', 'Dolls', '1985-01-20', '0919998877'),
  ( 2, 'Peter', 'Jones', '1980-06-10', '0834455667'),
  ( 3, 'Lily', 'James', '1991-10-20', '0889988776');
  
  select * from personal_info;
  