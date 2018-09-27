CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  user_password VARCHAR(255)
);

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  client VARCHAR(255) UNIQUE,
  phone VARCHAR(255) UNIQUE,
  party_size INTEGER,
  reserve_date VARCHAR(255),
  reserved_time VARCHAR(255)
);

CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  imageurl VARCHAR,
  details VARCHAR(255),
  price INTEGER,
  thumbsup INTEGER
);

CREATE TABLE cartItems (
  cart_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  details VARCHAR(255),
  price INTEGER,
  thumbsup INTEGER
);