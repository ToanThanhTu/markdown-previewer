import EditorHeader from "./EditorHeader";
import '../styles/Editor.css';

/* Define the Editor component. Props:
    - textInput: Editor text input
    - onTextInputChange: function to handle text input change
    - isPreviewerMaximized: boolean to determine the component visibility
    - isEditorMaximized: passed to EditorHeader component
    - onEditorExpandCollapseClick: function passed to EditorHeader component */
function Editor({ textInput, onTextInputChange, isPreviewerMaximized, isEditorMaximized, onEditorExpandCollapseClick }) {
    return (
        // Conditional className to hide the editor if the previewer is maximized
        <div id="editor-wrap" className={isPreviewerMaximized ? "hidden" : ""}>
            {/* EditorHeader component */}
            <EditorHeader
                isEditorMaximized={isEditorMaximized}
                onEditorExpandCollapseClick={onEditorExpandCollapseClick} />
            {/* text input area */}
            <textarea
                id="editor"
                value={textInput} // Controlled component with textInput as its value
                onChange={(e) => onTextInputChange(e.target.value)} />
        </div>
    );
}

export default Editor;