import NoteModel from "./NoteModel.js";
import titleViewElement from "../app/viewElements/titleViewElement.js";
import createNoteViewElement from "./viewElements/createNoteViewElement.js";
import listNotesViewElement from "./viewElements/listNotesViewElement.js";
import { idRootProject } from "../constants/constants.js";

class NoteView {
  static render(notes) {
    const rootElement = document.getElementById(idRootProject);
    rootElement.replaceChildren(
      ...[
        titleViewElement(),
        createNoteViewElement(),
        listNotesViewElement(notes),
      ]
    );

    // document.getElementById("inputCreateNote").focus({ focusVisible: true });
  }
}

export default NoteView;
