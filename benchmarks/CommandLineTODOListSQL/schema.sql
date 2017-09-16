DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY, 
  description varchar(255), 
  is_complete boolean
);

INSERT INTO tasks (
  description, 
  is_complete
)
VALUES
(
  'Do Homework', 
  'false'
), 
(
  'Exercise', 
  'true'
);