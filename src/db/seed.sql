create table users (
user_id serial primary key,
user_email varchar(100),
user_password varchar(250),
user_name varchar(100),
user_lastname varchar(150),
user_picture text,
user_phone int
);

create table data(
user_data_id integer references users(user_id),
date date,
amount decimal(10, 2),
type_of_debt varchar(20),
balance decimal(10, 2),
rate decimal(10, 2),
payment decimal(10, 2)
);




-- substring(user_phone, 1, 3) + '-' + substring(user_phone, 4, 3) + '-' + substring(user_phone, 7, 4)int