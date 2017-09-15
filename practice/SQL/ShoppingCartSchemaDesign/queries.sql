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
  quantity INTEGER
);

DROP TABLE IF EXISTS item_order CASCADE;
CREATE TABLE item_order (
  order_id INTEGER, 
  item_id INTEGER
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
(DATE ('01/03/2017'), 3);


INSERT INTO items
(name, price, quantity)
VALUES
('Toothpaste', 2, 1), 
('Comb', 3, 1), 
('Soap', 2, 1), 
('Shampoo', 3, 2), 
('Sanitizer', 3, 2);

INSERT INTO item_order 
(order_id, item_id)
VALUES 
(1, 1), 
(2, 4), 
(3, 6), 
(1, 2), 
(2, 2), 
(3, 5);

-- select * from users;

-- select * from orders;

-- select * from items;

select * from 
users 
join 
orders
on 
users.id = orders.user_id
join 
item_order 
on 
orders.id = item_order.order_id 
join 
items 
on 
items.id = item_order.item_id
-- group by orders;
-- where 

-- join 
-- items.id = item_order.item_id






-- SELECT * FROM users;

-- SELECT * FROM orders;

-- SELECT * FROM items;

-- AVERAGE NUMBER OF 

-- SELECT avg(quantity) AS Average
-- FROM orders
-- join items 
-- ON orders.id = items.order_id 

-- SELECT avg(items.quantity)
-- FROM orders
-- join items 
-- ON orders.id = items.order_id 

-- SELECT * 
-- FROM orders 
-- JOIN items 
-- ON orders.id = items.order_id



-- Find average numbers of items per order  

-- Find total number of orders = 7 
-- Find total number of items = 11

--Total number of items per order = 11 / 7  
-- 1.571








