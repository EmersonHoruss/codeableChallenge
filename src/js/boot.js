import { idRootProject } from "./constants/constants.js";
import NoteController from "./notes/NoteController.js";
const rootElement = document.getElementById(idRootProject);
rootElement.classList.add("app");

export const boot = () => {
  new NoteController().boot();
};
