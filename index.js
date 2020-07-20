const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(express.json());

// setup custom token function
morgan.token("data", (req, res) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

let persons = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello Phonebook!</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${
      persons.length
    } people</p> <p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  let id = Number(req.params.id);
  let person = persons.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json("person id doesn't exist");
  }
});

app.delete("/api/persons/:id", (req, res) => {
  let id = Number(req.params.id);
  persons = persons.filter((p) => p.id !== id);
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  let body = req.body;

  if (!body.name || !body.number || body.name.trim() === "") {
    return res.status(400).json("name or number missing");
  }

  if (persons.find((p) => p.name === body.name)) {
    return res.status(409).json("name already exists");
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generate_id(),
  };

  persons = persons.concat(person);
  res.json(person);
});

const generate_id = () => {
  let id = 0;
  do {
    id = Math.floor(Math.random() * 10000);
  } while (persons.find((p) => p.id === id));
  return id;
};

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
