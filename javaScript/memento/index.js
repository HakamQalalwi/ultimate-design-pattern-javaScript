class TextEditorState {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

class TextEditor {
  constructor() {
    this.content = "";
  }

  save() {
    return new TextEditorState(this.content);
  }

  restore(state) {
    this.content = state.getContent();
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }
}

class History {
  constructor() {
    this.prevStates = [];
  }

  saveHistoryState(state) {
    this.prevStates.push(state);
  }

  undo() {
    if (this.prevStates.length > 0) {
      return this.prevStates.pop();
    }
    return null;
  }
}

const editor = new TextEditor();
const history = new History();

editor.setContent("Version 1");
history.saveHistoryState(editor.save());

editor.setContent("Version 2");
history.saveHistoryState(editor.save());

editor.setContent("Version 3");

console.log(editor.getContent()); // Output: Version 3

editor.restore(history.undo());
console.log(editor.getContent()); // Output: Version 2

editor.restore(history.undo());
console.log(editor.getContent()); // Output: Version 1
