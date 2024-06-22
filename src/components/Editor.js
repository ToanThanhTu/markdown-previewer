import Header from "./Header";
import '../styles/Editor.css';

function Editor({ textInput, onTextInputChange }) {
    return <div id="editor-wrap">
        <Header name="Editor" />
        <textarea
            id="editor"
            value={textInput}
            onChange={(e) => onTextInputChange(e.target.value)}
        />
    </div>;
}

export default Editor;