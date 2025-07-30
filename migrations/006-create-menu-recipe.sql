CREATE TABLE Menu_Recipe (
    menu_id INT,
    recipe_id INT,
    PRIMARY KEY (menu_id, recipe_id),
    FOREIGN KEY (menu_id) REFERENCES Menu(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE
);
