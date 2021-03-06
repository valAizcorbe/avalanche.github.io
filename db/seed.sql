create table users (
user_id serial primary key,
user_email varchar(100),
user_password varchar(250),
user_name varchar(100),
user_lastname varchar(150),
user_picture textr
user_phone int
);

create table data(
user_data_id integer references users(user_id),
date varchar(70),
amount decimal(10, 2),
type_of_debt varchar(20),
balance decimal(10, 2),
rate decimal(10, 2),
payment decimal(10,2),
savings decimal(10,2),
disposable decimal(10,2)
);

create table results(
user_results_id integer references users(user_id),
date varchar(70),
amount decimal(10, 2),
type_of_debt varchar(20),
balance decimal(10, 2),
rate decimal(10, 2),
payment decimal(10,2),
savings decimal(10,2),
disposable decimal(10,2)
);

insert into users (
user_email,
user_password,
user_name,
user_lastname,
user_phone
)
values (
'vali@gmail.com', 'qwaszx', 'Val', 'Aizcorbe', 987654321
);


-- substring(user_phone, 1, 3) + '-' + substring(user_phone, 4, 3) + '-' + substring(user_phone, 7, 4)int