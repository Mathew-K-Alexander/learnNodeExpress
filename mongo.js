const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://reachmathewka:${password}@dragon.mrui2ja.mongodb.net/noteApp?retryWrites=true&w=majority&appName=dragon`;

mongoose.set('strictQuery', false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: 'i think i finished learning mern',
  important: true,
});

note.save().then((result) => {
  console.log('note saved!');
  mongoose.connection.close();
});
