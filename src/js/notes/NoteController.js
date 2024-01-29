import NoteModel from "./NoteModel.js";
import NoteView from "./NoteView.js";

class NoteController {
  noteModel;
  constructor() {
    this.noteModel = new NoteModel();
  }
  boot() {
    const notes = this.noteModel.list();
    NoteView.render(notes);
  }
  getValidation(note) {
    return this.noteModel.getValidation(note);
  }
  add(note) {
    this.noteModel.add(note);
    const notes = this.noteModel.list();
    NoteView.render(notes);
  }
  delete(note) {
    this.noteModel.delete(note);
    const notes = this.noteModel.list();
    NoteView.render(notes);
  }
}

export default NoteController;
