CREATE TABLE CookBook_Recipe (
    cookbook_id INT,
    recipe_id INT,
    PRIMARY KEY (cookbook_id, recipe_id),
    FOREIGN KEY (cookbook_id) REFERENCES CookBook(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE
);
