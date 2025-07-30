CREATE TABLE Recipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    cuisine VARCHAR(50),
    user_id INT,
    ingredients TEXT,
    calories INT,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);
