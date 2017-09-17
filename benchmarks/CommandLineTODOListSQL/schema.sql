DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY, 
  description varchar(255), 
  is_complete boolean
);
