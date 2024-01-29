import NoteController from "../NoteController.js";

const zoneListView = () => {
  const element = document.createElement("div");
  element.classList.add("zone-view");
  element.classList.add("scroll-y")
  element.classList.add("scroll")
  return element;
};
const containerNoteViewButton = () => {
  const element = document.createElement("div");
  element.classList.add("right");
  return element;
};
const buttonText = "Borrar";
const noteViewButton = (note) => {
  const element = document.createElement("button");
  element.classList.add("button-small");
  element.classList.add("text-button-small");
  element.classList.add("center");
  element.classList.add("w-fit-content");
  element.textContent = buttonText;
  element.addEventListener("click", () => {
    new NoteController().delete(note);
  });
  return element;
};
const noteView = (note) => {
  const element = document.createElement("div");
  element.classList.add("note-view");
  element.classList.add("text");
  element.textContent = note;
  const containerButton = containerNoteViewButton();
  containerButton.appendChild(noteViewButton(note));
  element.appendChild(containerButton);
  return element;
};
const listNotesViewElement = (notes) => {
  const zoneListViewElement = zoneListView();
  for (const note of notes) {
    const noteViewElement = noteView(note);
    zoneListViewElement.appendChild(noteViewElement);
  }
  return zoneListViewElement;
};

export default listNotesViewElement;
