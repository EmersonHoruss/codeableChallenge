import NoteStorage from "./NoteStorage.js";

class NoteModel {
  notes;
  constructor() {
    this.notes = NoteStorage.get();
  }
  add(note) {
    this.notes.push(note);
    NoteStorage.save(this.notes);
  }
  delete(note) {
    this.notes = this.notes.filter((currentNote) => currentNote !== note);
    NoteStorage.save(this.notes);
  }
  list() {
    return this.notes;
  }
}

export default NoteModel;
