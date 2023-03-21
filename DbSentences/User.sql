CREATE TABLE Users (
    id int,
    photo varchar(255),
    full_name varchar(255),
    email varchar(255),
    start_date varchar(255),
  	description varchar(255),
    phone_number varchar(255),
    status varchar(255),
    password varchar(255)
);

INSERT INTO users (id,photo,full_name,email,start_date,description,phone_number,status, password)
VALUES
(    1,
    "photo",
    'Rubi OSheeryne',
    'rosheeryne0@wikimedia.org',
    '2023-02-01',
    'ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
    '(102) 1504954',
    'ACTIVE',
    ""
);