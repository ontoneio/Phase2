
--  USERS 
--  |id| name |
--  |  |      |
--  |  |      |
--  |  |      |
--  |  |      
--  ORDERS 
--  |id| date | user_id |
--  |  |      |         |
--  |  |      |         |
--  |  |      |         |
--  |  |      |         |
--  ITEMS 
--  |id| name | price | quantity | order_id |
--  |  |      |       |          |          |
--  |  |      |       |          |          |
--  |  |      |       |          |          |
--  |  |      |       |          |          |
--  |  |      |       |          |          |

-- DROP DATABASE IF EXISTS shopping_cart;
-- CREATE DATABASE shopping_cart;
\c shopping_cart

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255)
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY, 
  order_date DATE, 
  user_id INTEGER
);

DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255), 
  price INTEGER, 
  quantity INTEGER, 
  order_id INTEGER
);


INSERT INTO users
(name)
VALUES
('Adam'), 
('Ben'), 
('Carolyn'), 
('Daisy'), 
('Emilie');

INSERT INTO orders 
(order_date, user_id)
VALUES 
(DATE ('01/01/2017'), 2),
(DATE ('01/02/2017'), 1),
(DATE ('01/03/2017'), 3),
(DATE ('01/04/2017'), 2),
(DATE ('01/05/2017'), 4),
(DATE ('01/06/2017'), 2);

INSERT INTO items
(name, price, quantity, order_id)
VALUES
('Toothpaste', 2, 1, 1), 
('Comb', 3, 1, 2), 
('Towel', 5, 2, 6), 
('Soap', 2, 1, 2), 
('Shampoo', 3, 2, 3), 
('Sanitizer', 3, 2, 4), 
('Sunscreen', 4, 2, 5);



-- SELECT * FROM users;

-- SELECT * FROM orders;

-- SELECT * FROM items;

-- AVERAGE NUMBER OF 

-- SELECT avg(quantity) AS Average
-- FROM orders
-- join items 
-- ON orders.id = items.order_id 

SELECT avg(items.quantity)
FROM orders
join items 
ON orders.id = items.order_id 






