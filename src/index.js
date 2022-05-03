const NotesModel = require("../src/notesModel");

const model = new NotesModel();

model.addNote('Buy bananas!');
model.addNote('Do 1 load of laundry!');

model.reset();

console.log(model.getNotes());

console.log('The notes app is running');

