DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  content varchar(250) NOT NULL
);

CREATE TABLE users (
  id bigserial PRIMARY KEY,
  email varchar(64) UNIQUE,
  username varchar(64) UNIQUE,
  password varchar(64)
);
