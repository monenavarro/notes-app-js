const NotesModel = require('../src/notesModel')

describe('Notes model class', () => {
    it('initialises empty', () => {
        const notes = new NotesModel();

        expect(notes.getNotes()).toEqual([]);
    });

    it('adds a new note', () => {
        const notes = new NotesModel();
        notes.addNote('Buy stamps');

        expect(notes.getNotes()).toEqual(['Buy stamps']);
    });

    it('resets the list of notes', () => {
        const notes = new NotesModel();
        notes.addNote('Buy stamps');
        notes.reset();

        expect(notes.getNotes()).toEqual([]);
    });
});

