SELECT 
    books.id AS "book_id", 
    books.name AS "book_name", 
    users.id AS "user_id", 
    users.name AS "username", 
    sales.id AS "sale_id", 
    sales.time 
FROM 
    `books` 
INNER JOIN 
    `users` ON users.id = books.owner 
INNER JOIN 
    `sales` ON sales.user = users.id AND sales.book = books.id;