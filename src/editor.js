let EDITOR_MODE = false;

const editorButton = document.getElementById("editorButton");
editorButton.addEventListener("click", startEditor);

function startEditor() {
  if(EDITOR_MODE){
    EDITOR_MODE = false;
    editorButton.innerText = "Open Editor";
  }
  else {
    EDITOR_MODE = true;
    editorButton.innerText = "Close Editor";
  }
}

