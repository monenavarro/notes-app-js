/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('../src/notesModel');
const NotesView = require('../src/notesView');

describe('Notes view', () => {
    it('displays 2 notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('One note');
    model.addNote('Second note');
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);

    });

    it('clicks the button and adds a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();
    const view = new NotesView(model);
    
    const input = document.querySelector('#add-note-input');
    input.value = 'Help me';

    const button = document.querySelector('#add-note-button')
    button.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Help me');
    });
});