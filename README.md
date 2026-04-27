
# ✅ To-Do List API

> A RESTful CRUD API built with Node.js and Express to practice route handling, HTTP methods and backend data persistence.

---

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Persistence | Local JSON file |

---

## ✨ Features

- ➕ **Create** new tasks
- 📋 **Read** all available tasks
- ✏️ **Update** a task's content or status
- ❌ **Delete** tasks
- 💾 **Data persistence** via local file — no database required
- 🧩 **Modular structure** following backend best practices

---

## 📋 Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/:id` | Get a task by ID |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

#### Example — Create a task

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Buy groceries",
  "completed": false
}
```

```json
{
  "id": "a1b2c3",
  "title": "Buy groceries",
  "completed": false
}
```

---

## ⚙️ Installation

### Prerequisites

- Node.js >= 18.0.0
- npm

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/your-user/todo-list-express.git
cd todo-list-express
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the server**

```bash
npm start
```

**4. API available at**

```
http://localhost:3000/api/tasks
```

---

## 🧪 Test the API

The repository includes an `app.http` file with all endpoints ready to run from VS Code.

Install the **REST Client** extension (`humao.rest-client`), open `app.http` and click **Send Request** on any endpoint.

---

## 🎯 Learning Goals

This project was built to practice and understand:

- RESTful API design with Express
- HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
- Route and middleware organization
- Data persistence without a database

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/tu-usuario">Wilker Vivas</a>
</p>
