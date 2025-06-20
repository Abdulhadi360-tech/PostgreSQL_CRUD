import { Client } from "pg";

const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Adinoyi@2020",
  database: "userDatabase",
});

// Connect to PostgreSQL
con
  .connect()
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ Connection error:", err));

export const getUsers = (req, res) => {
  const fetch_query = `SELECT * FROM users ORDER BY id ASC`;
  con.query(fetch_query, (err, result) => {
    if (err) {
      console.log(`❌ Error Getting Data ${err}`);
      return res.status(500).send(`Error Getting Data`);
    } else {
      console.log("✅ Data retrieved:", result.rows);
      return res.status(200).json(result.rows);
    }
  });
};

export const getUserById=(req, res) => {
  const { id } = req.params;
  const fetchById_query = `SELECT * FROM users WHERE id=$1`;
  con.query(fetchById_query, [id], (err, result) => {
    if (err) {
      console.log(`❌ Error Getting Data ${err}`);
      return res.status(500).send(`Error Getting Data`);
    } else if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    } else {
     console.log("✅ Data retrieved:", result.rows);
     return res.status(200).json(result.rows[0]);
    }
  });
}
export const addUser= (req, res) => {
  const { id, name, email, age } = req.body;
  const insert_query = `INSERT INTO users (id, name, email, age) VALUES ($1, $2, $3,$4)`;
  con.query(insert_query, [id, name, email, age], (err, result) => {
    if (err) {
      console.log(`❌ Error Inserting Data ${err}`);
      return res.status(500).send(`Error Inserting Data`);
    } else {
      console.log(`✅ New User Added Successfully ${result.rowCount}`);
      return res.status(201).send(`✅ New User Added Successfully`);
    }
  });
}
export const updateUser=(req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const update_query = "UPDATE users SET name=$1,email=$2,age=$3 WHERE id=$4";
  con.query(update_query, [name, email, age, id], (err, result) => {
    if (err) {
      console.error(`❌ Error updating user data:${err}`);
      return res.status(500).send("Error updating user data");
    }
    if (result.rowCount === 0) {
      return res.status(404).send("user not found");
    } else {
      console.log("✅ user data Successfully updated");
      res.status(200).send("user data Successfully updated");
    }
  });
}
export const deleteUser=(req,res)=>{
    const {id}=req.params;
    const delete_query=`DELETE FROM users WHERE id =$1`
    con.query(delete_query,[id],(err,result)=>{
        if(err){
            console.log(`❌ Error deleting user ${err}`)
            res.status(500).send(`Error deleting user`)
        }else if(result.rowCount===0){
            return res.status(404).send(`User not found`)
        }else{
            console.log(`✅ User deleted Successfully`);
            res.status(200).send(`User deleted successfully`)
        }
    })
}