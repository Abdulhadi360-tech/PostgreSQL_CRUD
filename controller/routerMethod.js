import con from "./db.js";

// Get all users
export const getUsers = async (req, res) => {
  const fetch_query = `SELECT * FROM users ORDER BY id ASC`;
  try {
    const result = await con.query(fetch_query);
    console.log("✅ Data retrieved:", result.rows);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.error(`❌ Error Getting Data: ${err}`);
    return res.status(500).send("Error Getting Data");
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  const fetchById_query = `SELECT * FROM users WHERE id = $1`;
  try {
    const result = await con.query(fetchById_query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    console.log("✅ Data retrieved:", result.rows);
    return res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(`❌ Error Getting Data: ${err}`);
    return res.status(500).send("Error Getting Data");
  }
};

// Add new user
export const addUser = async (req, res) => {
  const { name, email, age } = req.body;
  const insert_query = `INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *`;
 try {
    const result = await con.query(insert_query, [name, email, age]);
    console.log("✅ New User Added:", result.rows[0]);
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).send("❌ Email already exists");
    }
    if (err.code === '23514') {
      return res.status(400).send("❌ Age must be greater than 0");
    }
    if (err.code === '23502') {
      return res.status(400).send("❌ Missing required field (name, email, or age)");
    }
    console.error(`❌ Error Inserting Data: ${err}`);
    return res.status(500).send("Server error");
  }
};

// Update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const update_query = `UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *`;
  

  try {
    const result = await con.query(update_query, [name, email, age, id]);
    console.log("✅  User Updated:", result.rows[0]);
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).send("❌ Email already exists");
    }
    if (err.code === '23514') {
      return res.status(400).send("❌ Age must be greater than 0");
    }
    if (err.code === '23502') {
      return res.status(400).send("❌ Missing required field (name, email, or age)");
    }
    console.error(`❌ Error Inserting Data: ${err}`);
    return res.status(500).send("Server error");
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const delete_query = `DELETE FROM users WHERE id = $1 RETURNING *`;
  try {
    const result = await con.query(delete_query, [id]);
    if (result.rowCount === 0) {
      return res.status(404).send("User not found");
    }
    console.log("✅ User deleted:", result.rows[0]);
    return res.status(200).send("User deleted successfully");
  } catch (err) {
    console.error(`❌ Error deleting user: ${err}`);
    return res.status(500).send("Error deleting user");
  }
};
