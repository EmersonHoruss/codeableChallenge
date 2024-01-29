class NoteStorage {
  static get() {
    return JSON.parse(localStorage.getItem("notes"))??[];
  }
  static save(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
}

export default NoteStorage;
