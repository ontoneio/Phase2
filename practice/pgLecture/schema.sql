DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name varchar(255) NOT NULL, 
  email varchar(255) NOT NULL
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id SERIAL PRIMARY KEY, 
  user_id integer NOT NULL, 
  title varchar(255) NOT NULL, 
  body text NOT NULL
);

INSERT INTO 
  users(
    name, 
    email
  )
  VALUES
  (
    'Jared', 
    'jared@learnersguild.org'
  ), 
  (
    'Justin', 
    'justin@learnersguild.org'
  ), 
  (
    'Bonnie', 
    'bonnie@learnersguild.org'
  )
  ;


INSERT INTO 
  posts(
    user_id, 
    title, 
    body
  )
  VALUES 
  (
    (select id from users where email='jared@learnersguild.org'), 
    'Jareds first blog post', 
    'Is this a blog for real?'
  ),
  (
    (select id from users where email='bonnie@learnersguild.org'), 
    'Bonnie first blog post', 
    'This is a real blog spot'
  ), 
  (
    (select id from users where email='jared@learnersguild.org'), 
    'Jared''s second blog post', 
    'Is this a blog for real times 2'
  ), 
  (
    (select id from users where email='bonnie@learnersguild.org'), 
    'Bonnie''s second blog post', 
    'This is a real blog spot times 2'
  ) 
  ;













