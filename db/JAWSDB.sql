CREATE TABLE asheville(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(255),
host_name VARCHAR(255),
neighbourhood INT NOT NULL,
room_type VARCHAR(255),
price INT NOT NULL,
minimum_nights INT NOT NULL,
availability_365 INT NOT NULL,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);