const NotesModel = require("../src/notesModel");
const NotesView = require("../src/NotesView");

// Setup model with 1 note
const model = new NotesModel();
model.addNote('Buy bananas!');

// Setup the view
const view = new NotesView(model);

// Make the view display the notes
view.displayNotes();

