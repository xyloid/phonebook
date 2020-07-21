const mongoose = require("mongoose");

console.log(process.argv);

const password = process.argv[2];

const data = process.argv.slice(3);

console.log(data);

const url = `mongodb+srv://fullstack:${password}@fso2020.q4awj.azure.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const generate_id = (check) => {
  let id = 0;

  id = Math.floor(Math.random() * 10000);

  return id;
};

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
});

const Person = mongoose.model("Person", personSchema);

if (data.length === 0) {
  Person.find({}).then((results) => {
    console.log("phonebook");
    results.forEach((r) => console.log(r));
    mongoose.connection.close();
  });
} else if (data.length === 2) {
  console.log("try add");
  let [name, number] = [...data];
  let id = generate_id();

  const person = new Person({
    name,
    number,
    id,
  });

  person.save().then((result) => {
    console.log(`Added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}
