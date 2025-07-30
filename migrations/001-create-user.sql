CREATE table User(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    phone VARCHAR(10),
    cusineMastery VARCHAR(100),
    role INT,
    FOREIGN KEY (role) REFERENCES Role(id) ON DELETE CASCADE
)
