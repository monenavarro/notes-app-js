(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/notesModel.js
  var require_notesModel = __commonJS({
    "src/notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // src/index.js
  var NotesModel = require_notesModel();
  var model = new NotesModel();
  model.addNote("Buy bananas!");
  model.addNote("Do 1 load of laundry!");
  model.reset();
  console.log(model.getNotes());
  console.log("The notes app is running");
})();
