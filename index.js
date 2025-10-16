const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

const { tasks } = require("./data/tasks");

function updateArchive() {
  const tasksTemplate = `const tasks = ${JSON.stringify(tasks)} 

module.exports.tasks = tasks
`;

  fs.writeFile("./data/tasks.js", tasksTemplate, (error) => {
    if (error) throw error;
  });
}

app.get("/", (req, res) => {
  res.json(tasks);
});

app.post("/", (req, res) => {
  const tasksNew = {
    id: tasks.length + 1,
    titulo: req.body.titulo,
    completada: req.body.completada,
  };

  if (!tasksNew.titulo || tasksNew.completada === undefined) {
    return res.status(400).send("Tarea no agregada");
  }

  tasks.push(tasksNew);
  updateArchive();

  res.status(201).json({
    mensaje: "Tarea agregada exitosamente",
    tarea: tasksNew,
  });
});

app.put("/:id", (req, res) => {
  const task = req.body;
  const id = req.params.id;

  const indice = tasks.findIndex((tarea) => tarea.id == id);

  if (indice === -1) {
    return res.status(400).json({
      error: "Tarea no encontrada",
      mensaje: "El id no existe",
    });
  }

  tasks[indice] = { id, titulo, completada };
  updateArchive();

  res.status(200).json({
    mensaje: "Tarea modificada exitosamente",
    tarea: task,
  });
});

app.patch("/:id", (req, res) => {
  const task = req.body;
  const id = req.params.id;

  const indice = tasks.findIndex((tarea) => tarea.id == id);
  //validar campos invalidos
  if (indice === -1) {
    return res.status(400).json({
      error: "Tarea no encontrada",
      mensaje: "El id no existe",
    });
  }

  tasks[indice] = { ...tasks[indice], ...task };
  updateArchive();

  res.status(200).json({
    mensaje: "Tarea modificada exitosamente",
    tarea: task,
  });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;

  const indice = tasks.findIndex((tarea) => tarea.id == id);
  //validar campos invalidos
  if (indice === -1) {
    return res.status(400).json({
      error: "Tarea no encontrada",
      mensaje: "El id no existe",
    });
  }

  tasks.splice(indice, 1);
  updateArchive();

  res.status(200).json({
    mensaje: "Tarea eliminada exitosamente",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor ejecutandose...");
});
