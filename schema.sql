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