import NoteController from "../NoteController.js";

const zoneCreateView = () => {
  const element = document.createElement("div");
  element.classList.add("zone-create");
  return element;
};
const containerCreatedInput = () => {
  const element = document.createElement("div");
  element.classList.add("column");
  element.classList.add("gap-1");
  return element;
};
const placeholderInput = "Algo para recordar...";
const idInput = "inputCreateNote";
const createdInput = () => {
  const element = document.createElement("textarea");
  element.classList.add("input");
  element.classList.add("text");
  element.placeholder = placeholderInput;
  element.id = idInput;
  element.addEventListener("keypress", (e) => {
    if (e.code === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const note = element.value;
      addNote(note);
    }
  });
  element.addEventListener("keyup", (e) => {
    const note = e.target.value;
    validate(note);
  });
  return element;
};
const validate = (note) => {
  const validation = new NoteController().getValidation(note);
  const inputElement = document.getElementById(idInput);
  const errorElement = document.getElementById(idInputError);
  if (validation.isValid) {
    inputElement.classList.remove("input-error");
    errorElement.classList.add("hidden");
  }
  if (validation.isInvalid) {
    inputElement.classList.add("input-error");
    errorElement.textContent = validation.messageError;
    errorElement.classList.remove("hidden");
  }
};
const addNote = (note) => {
  const validation = new NoteController().getValidation(note);
  if (validation.isInvalid) {
    return;
  }
  new NoteController().add(note);
};
const idInputError = "inputError";
const createdInputError = () => {
  const element = document.createElement("span");
  element.classList.add("text-error");
  element.classList.add("hidden");
  element.id = idInputError;
  return element;
};
const buttonText = "Crear";
const createdButton = () => {
  const element = document.createElement("button");
  element.classList.add("button-big");
  element.classList.add("text-button-big");
  element.textContent = buttonText;
  element.addEventListener("click", () => {
    const note = document.getElementById(idInput).value;
    validate(note);
    addNote(note);
  });
  return element;
};
const createNoteViewElement = () => {
  const zoneCreateViewElement = zoneCreateView();
  const containerInput = containerCreatedInput();
  containerInput.appendChild(createdInput());
  containerInput.appendChild(createdInputError());
  zoneCreateViewElement.appendChild(containerInput);
  const button = createdButton();
  zoneCreateViewElement.appendChild(button);
  return zoneCreateViewElement;
};

export default createNoteViewElement;
