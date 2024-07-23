create table user (
  id int unsigned primary key auto_increment not null,
  pseudo varchar(255) not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table franchise(
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  city varchar(255) not null
);

create table player (
  id int unsigned primary key auto_increment not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null,
  post varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id),
  franchise_id int unsigned not null,
  foreign key(franchise_id) references franchise(id)
);


