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
      this.redoStates = [];
  }

  saveHistoryState(state) {
      this.prevStates.push(state);
      this.redoStates = []; 
  }

  undo() {
      if (this.prevStates.length > 0) {
          const state = this.prevStates.pop();
          this.redoStates.push(state);
          return state;
      }
      return null;
  }

  redo() {
      if (this.redoStates.length > 0) {
          const state = this.redoStates.pop();
          this.prevStates.push(state);
          return state;
      }
      return null;
  }
}

// Example Usage:
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

editor.restore(history.redo());
console.log(editor.getContent()); // Output: Version 1

editor.restore(history.redo());
console.log(editor.getContent()); // Output: Version 2
