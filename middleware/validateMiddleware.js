export const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body, {abortEarly: false});
        next();
    } catch (err) {
        res.status(400).json({ error: err.errors });
    }
}

export const validateRecipe  = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body, {abortEarly: false});
        next();
    }catch (error) {
        res.status(400).json({ error: error.errors });
    }
}

