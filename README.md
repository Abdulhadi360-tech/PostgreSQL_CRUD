# 📦 PostgreSQL Express API

This is the solution to the PostgreSQL CRUD API Assignment built using **Express.js** and **PostgreSQL**.

---

## 📁 Project Structure

### 🔹 `router/`
Contains the `router.js` file, which defines all CRUD route endpoints.

### 🔹 `controller/`
Contains:
- `routerMethod.js` — the logic for each CRUD route (GET, POST, PUT, DELETE) it contain a try and catch block for error handling. 
- `db.js` — handles PostgreSQL database connection setup

### 🔹 `middleware/`
Contains:
- `validateUser.js` — handle data validation for adding and updating user into the database
---

## 📬 Sample API Test Collection

The file **`PostgreSql CRUD Router.postman_collection.json`** contains sample API requests you can import and test in [Postman](https://www.postman.com/).

---

## 🔧 Dependencies Required

Install them using:

```bash
npm install express cors pg dotenv
npm install --save-dev nodemon
```

---

## 🚀 Starting the Server

Run the development server with:

```bash
npm run dev
```

Make sure your `.env` file is correctly configured and the PostgreSQL service is running.

---

## 🌐 API Endpoints

| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    | `/users`       | Returns all users         |
| GET    | `/users/:id`   | Returns a user by ID      |
| POST   | `/users`       | Adds a new user           |
| PUT    | `/users/:id`   | Updates an existing user  |
| DELETE | `/users/:id`   | Deletes a user            |

---

## 📌 Environment Variables (`.env`)

Create a `.env` file in the root of your project with:

```env
PORT=8000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=userDatabase
```