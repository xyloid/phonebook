// import environment variable
require("dotenv").config();

const Person = require("./models/person");

const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(express.json());

const cors = require("cors");

app.use(cors());

app.use(express.static("build"));

// setup custom token function
morgan.token("data", (req, res) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

app.get("/", (req, res) => {
  res.send("<h1>Hello Phonebook!</h1>");
});

app.get("/api/persons", (req, res) => {
  if (req.query.name) {
    Person.find({ name: req.query.name }).then((people) => {
      console.log("find by name: ", req.query.name);
      res.json(people);
    });
  } else {
    Person.find({}).then((people) => {
      console.log("find all persons");
      res.json(people);
    });
  }
});

app.get("/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${
      persons.length
    } people</p> <p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (req, res, next) => {
  // let person = persons.find((p) => p.id === id);
  // if (person) {
  //   res.json(person);
  // } else {
  //   res.status(404).json("person id doesn't exist");
  // }
  Person.findById(req.params.id)
    .then((person) => {
      res.json(person);
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  // let id = Number(req.params.id);
  // persons = persons.filter((p) => p.id !== id);
  // res.status(204).end();
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (req, res, next) => {
  let body = req.body;

  if (!body.name || !body.number || body.name.trim() === "") {
    return res.status(400).json("name or number missing");
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savePerson) => {
      res.json(savePerson);
    })
    .catch((error) => next(error));

  // persons = persons.concat(person);
  // res.json(person);
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, {
    new: true,
    runValidators: true,
  })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error("print error msg", error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    console.log("before send", error.message);
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

// const generate_id = () => {
//   return Math.floor(Math.random() * 100000);
// };

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
