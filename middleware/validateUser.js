export const validateUser = (req, res, next) => {
  const { name, email, age } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).send("❌ Name is required and must be a non-empty string");
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).send("❌ Valid email is required");
  }

  if (!age || isNaN(age) || Number(age) <= 0) {
    return res.status(400).send("❌ Age is required and must be a positive number");
  }

  next(); // All good — move to the next middleware or route handler
};
