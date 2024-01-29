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
  getValidation(note) {
    if (!note.trim()) {
      return {
        messageError: "No se pueden crear notas en blanco",
        isValid: false,
        isInvalid: true,
      };
    }
    const alreadyExist = this.notes.find((currentNote) => currentNote === note);
    if (alreadyExist) {
      return {
        messageError: `La nota: ${note} ya ha sido creada`,
        isValid: false,
        isInvalid: true,
      };
    }
    return {
      messageError: null,
      isValid: true,
      isInvalid: false,
    };
  }
}

export default NoteModel;
