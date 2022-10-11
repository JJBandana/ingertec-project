CREATE DATABASE juan19990707;

USE juan19990707;

CREATE TABLE tresource_type(
	idResourceType INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    created DATETIME NOT NULL,
    descrip VARCHAR(200) NOT NULL
);

CREATE TABLE tresource(
	idResource INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    created DATETIME NOT NULL,
    descrip VARCHAR(200) NOT NULL,
    idResourceType INT NOT NULL,
    FOREIGN KEY (idResourceType) 
    REFERENCES tresource_type(idResourceType)
);